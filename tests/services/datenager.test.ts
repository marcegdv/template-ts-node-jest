import { datenagerService } from "../../src/services/datenager";
import * as repository from "../../src/repositories/datenager";
import { CountryCode, PublicHolydayV3 } from "../../src/repositories/datenager.types";
import { AxiosError } from "axios";

describe("dateNagerService tests:", () => {

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test("with empty params, throw error", async () => {
        const repositorySpy = jest.spyOn(repository, "datenagerRepository");

        const expectedErrorMessage = "Invalid request";
        const expectedErrorStatus = 400;

        expect.assertions(4);
        try {
            await datenagerService("", "" as CountryCode);
        } catch (error: unknown) {
            const err = error as AxiosError;
            expect(repositorySpy).toHaveBeenCalledTimes(0);
            expect(err instanceof AxiosError).toBeTruthy();
            expect(err.message).toEqual(expectedErrorMessage);
            expect(err.status).toEqual(expectedErrorStatus);
        }
    });

    test("with undefined params, throw error", async () => {
        const repositorySpy = jest.spyOn(repository, "datenagerRepository");

        const expectedErrorMessage = "Invalid request";
        const expectedErrorStatus = 400;

        expect.assertions(4);
        try {
            await datenagerService(
                undefined as unknown as string,
                undefined as unknown as CountryCode,
            );
        } catch (error: unknown) {
            const err = error as AxiosError;
            expect(repositorySpy).toHaveBeenCalledTimes(0);
            expect(err instanceof AxiosError).toBeTruthy();
            expect(err.message).toEqual(expectedErrorMessage);
            expect(err.status).toEqual(expectedErrorStatus);
        }
    });

    test("call repository with valid year and countryCode params, throw error", async () => {
        const expectedStatus = 404;
        const responseMock: unknown = {
            isAxiosError: true,
            status: expectedStatus,
        }
        const repositoryMock = jest
            .spyOn(repository, "datenagerRepository")
            .mockRejectedValueOnce(responseMock as AxiosError);

        const consoleLogSpy = jest
            .spyOn(console, "log")
            .mockImplementationOnce(jest.fn());

        const year = "2024";
        const countryCode: CountryCode = "AR";

        expect.assertions(4);
        try {
            await datenagerService(year, countryCode);
        } catch (error: unknown) {
            const err = error as AxiosError;
            expect(repositoryMock).toHaveBeenCalledTimes(1);
            expect(repositoryMock).toHaveBeenCalledWith(year, countryCode);
            expect(err.status).toBe(expectedStatus);
            expect(consoleLogSpy).toHaveBeenCalledTimes(1);
        }
    });

    test("with not empty or undefined year and countryCode params, call repository", async () => {
        const year = "2024";
        const countryCode: CountryCode = "AR";

        const repositoryMock = jest
            .spyOn(repository, "datenagerRepository")
            .mockImplementationOnce(jest.fn());

        await datenagerService(year, countryCode);

        expect(repositoryMock).toHaveBeenCalledTimes(1);
        expect(repositoryMock).toHaveBeenCalledWith(year, countryCode);
    });

    test("call console.log if error", async () => {
        const repositoryMock = jest
            .spyOn(repository, "datenagerRepository")
            .mockRejectedValueOnce({} as AxiosError);

        const consoleLogSpy = jest
            .spyOn(console, "log")
            .mockImplementationOnce(jest.fn());

        expect.assertions(2);
        try {
            await datenagerService("2024", "AR");
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
        const year = "2024";
        const countryCode: CountryCode = "AR";

        const repositorySpy = jest
            .spyOn(repository, "datenagerRepository")
            .mockResolvedValueOnce(responseMock);

        const response: PublicHolydayV3[] = await datenagerService(year, countryCode);

        expect(repositorySpy).toHaveBeenCalledTimes(1);
        expect(repositorySpy).toHaveBeenCalledWith(year, countryCode);
        expect(response).toStrictEqual(responseMock);
    });

});
