import { dateNagerService } from "../../src/services/dateNager";
import * as repository from "../../src/repositories/dateNager";
import { CountryCode, PublicHolydayV3 } from "../../src/repositories/dateNager.types";
import { AxiosError } from "axios";

describe("dateNagerService tests:", () => {

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test("with empty params, throw error", async () => {
        const repositorySpy = jest.spyOn(repository, "dateNagerRepository");

        const expectedErrorMessage = "Invalid request";
        const expectedErrorStatus = 400;

        expect.assertions(4);
        try {
            await dateNagerService("" as CountryCode, "");
        } catch (error: unknown) {
            const err = error as AxiosError;
            expect(repositorySpy).toHaveBeenCalledTimes(0);
            expect(err instanceof AxiosError).toBeTruthy();
            expect(err.message).toEqual(expectedErrorMessage);
            expect(err.status).toEqual(expectedErrorStatus);
        }
    });

    test("with undefined params, throw error", async () => {
        const repositorySpy = jest.spyOn(repository, "dateNagerRepository");

        const expectedErrorMessage = "Invalid request";
        const expectedErrorStatus = 400;

        expect.assertions(4);
        try {
            await dateNagerService(
                undefined as unknown as CountryCode,
                undefined as unknown as string
            );
        } catch (error: unknown) {
            const err = error as AxiosError;
            expect(repositorySpy).toHaveBeenCalledTimes(0);
            expect(err instanceof AxiosError).toBeTruthy();
            expect(err.message).toEqual(expectedErrorMessage);
            expect(err.status).toEqual(expectedErrorStatus);
        }
    });

    test("call repository with not empty or undefined year and countryCode params, throw error", async () => {
        const expectedStatus = 404;
        const responseMock: unknown = {
            isAxiosError: true,
            status: expectedStatus,
        }
        const repositoryMock = jest
            .spyOn(repository, "dateNagerRepository")
            .mockRejectedValueOnce(responseMock as AxiosError);

        const countryCode: CountryCode = "AR";
        const year = "2024";

        expect.assertions(3);
        try {
            await dateNagerService(countryCode, year);
        } catch (error: unknown) {
            const err = error as AxiosError;
            expect(repositoryMock).toHaveBeenCalledTimes(1);
            expect(repositoryMock).toHaveBeenCalledWith(countryCode, year);
            expect(err.status).toBe(expectedStatus);
        }
    });

    test("with not empty or undefined year and countryCode params, call repository", async () => {
        const countryCode: CountryCode = "AR";
        const year = "2024";

        const repositoryMock = jest
            .spyOn(repository, "dateNagerRepository")
            .mockImplementationOnce(jest.fn());

        await dateNagerService(countryCode, year);

        expect(repositoryMock).toHaveBeenCalledTimes(1);
        expect(repositoryMock).toHaveBeenCalledWith(countryCode, year);
    });

    test("call console.log if error", async () => {
        const repositoryMock = jest
            .spyOn(repository, "dateNagerRepository")
            .mockRejectedValueOnce({} as AxiosError);

        const consoleLogSpy = jest
            .spyOn(console, "log")
            .mockImplementationOnce(jest.fn());

        expect.assertions(2);
        try {
            await dateNagerService("AR", "2024");
        } catch (error: unknown) {
            const err = error as AxiosError;
            expect(repositoryMock).toHaveBeenCalledTimes(1);
            expect(consoleLogSpy).toHaveBeenCalledTimes(1);
        }
    });

    test("with repository response, return that response", async () => {
        const responseMock: PublicHolydayV3[] = [
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
        const countryCode: CountryCode = "AR";
        const year = "2024";

        const repositorySpy = jest
            .spyOn(repository, "dateNagerRepository")
            .mockResolvedValueOnce(responseMock);

        const response: PublicHolydayV3[] = await dateNagerService(countryCode, year);

        expect(repositorySpy).toHaveBeenCalledTimes(1);
        expect(repositorySpy).toHaveBeenCalledWith(countryCode, year);
        expect(response).toStrictEqual(responseMock);
    });

});