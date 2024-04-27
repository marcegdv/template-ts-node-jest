import { dateNagerRepository } from "../../src/repositories/dateNager";
import axios, { AxiosError, AxiosResponse } from "axios";
import { CountryCode, PublicHolydayV3 } from "../../src/repositories/dateNager.types";

describe("dateNagerRepository tests:", () => {

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test("call api, return list of holydays", async () => {
        const holydayMock: PublicHolydayV3[] = [
            {
                date: "2024-01-01",
                localName: "Año Nuevo",
                name: "New Year's Day",
                countryCode: "AR",
                fixed: false,
                global: true,
                counties: null,
                launchYear: null,
                types: ["Public"]
            },
        ];
        const responseMock: unknown = {
            data: holydayMock,
            status: 200,
        };
        const axiosMock = jest
            .spyOn(axios, "get")
            .mockResolvedValueOnce(responseMock as AxiosResponse);

        const countryCode: CountryCode = "AR";
        const year = "2024";
        const expectedUrl = `https://date.nager.at/api/v3/publicholidays/${year}/${countryCode}`;

        const response: PublicHolydayV3[] = await dateNagerRepository(countryCode, year);

        expect(axiosMock).toHaveBeenCalledTimes(1);
        expect(axiosMock).toHaveBeenCalledWith(expectedUrl);
        expect(response).toStrictEqual(holydayMock);
    });

    test("call api, throw error", async () => {
        const expectedErrorResponse = {
            type: "https://tools.ietf.org/html/rfc9110#section-15.5.5",
            title: "Not Found",
            status: 404,
            traceId: "00-6bac8ba369c870a74b6b076d473335c6-f2b27cb60e12f958-00"
        }
        const responseMock: unknown = {
            isAxiosError: true,
            status: 404,
            response: { data: expectedErrorResponse },
        }
        const axiosMock = jest
            .spyOn(axios, "get")
            .mockRejectedValueOnce(responseMock as AxiosError);
        const consoleLogSpy = jest
            .spyOn(console, "log")
            .mockImplementationOnce(jest.fn());

        const countryCode: unknown = "AR123";
        const year = "2024";
        const expectedUrl = `https://date.nager.at/api/v3/publicholidays/${year}/${countryCode}`;
        const expectedStatus = 404;

        expect.assertions(5);
        try {
            await dateNagerRepository(countryCode as CountryCode, year);
        } catch (error: unknown) {
            const err = error as AxiosError;
            expect(axiosMock).toHaveBeenCalledTimes(1);
            expect(axiosMock).toHaveBeenCalledWith(expectedUrl);
            expect(err.status).toBe(expectedStatus);
            expect(err.response?.data).toStrictEqual(expectedErrorResponse);
            expect(consoleLogSpy).toHaveBeenCalledTimes(1);
        }
    });

});