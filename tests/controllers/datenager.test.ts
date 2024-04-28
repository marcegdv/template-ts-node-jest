import request, { Response } from "supertest";
import app from "../../src/app";
import { CountryCode, PublicHolydayV3 } from "../../src/repositories/datenager.types";
import * as service from "../../src/services/datenager";
import { AxiosError } from "axios";
import { datenagerController } from "../../src/controllers/datenager";
import { Response as ExpressResponse, Request as ExpressRequest } from "express";

describe("dateNager controller tests", () => {

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test("with valid query params, return list of holydays", async () => {
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

        const serviceMock = jest
            .spyOn(service, "datenagerService")
            .mockResolvedValueOnce(responseMock);

        const year = "2024";
        const countryCode: CountryCode = "AR";
        const url = `/holydays/${year}/${countryCode}`;

        const response: Response = await request(app).get(url);

        expect(serviceMock).toHaveBeenCalledTimes(1);
        expect(serviceMock).toHaveBeenCalledWith(year, countryCode);
        expect(response.status).toBe(200);
        expect(response.body).toStrictEqual(responseMock);
    });

    test("with valid query params, return error with status 500", async () => {
        const responseMock: unknown = {
            status: 500,
            message: "Internal server error.",
        }

        const serviceMock = jest
            .spyOn(service, "datenagerService")
            .mockRejectedValueOnce({});

        const consoleLogSpy = jest
            .spyOn(console, "log")
            .mockImplementationOnce(jest.fn());

        const year = "2024";
        const countryCode: CountryCode = "AR";
        const url = `/holydays/${year}/${countryCode}`;

        const response: Response = await request(app).get(url);

        expect(serviceMock).toHaveBeenCalledTimes(1);
        expect(serviceMock).toHaveBeenCalledWith(year, countryCode);
        expect(response.status).toBe(500);
        expect(response.body).toStrictEqual(responseMock);
        expect(consoleLogSpy).toHaveBeenCalledTimes(1);
    });

    test("with invalid query params, return error with status 400", async () => {
        const responseMock: unknown = {
            isAxiosError: true,
            status: 400,
        }

        const serviceMock = jest
            .spyOn(service, "datenagerService")
            .mockRejectedValueOnce(responseMock as AxiosError);

        const consoleLogSpy = jest
            .spyOn(console, "log")
            .mockImplementationOnce(jest.fn());

        const year = "0";
        const countryCode: unknown = "lalala";
        const url = `/holydays/${year}/${countryCode}`;

        const response: Response = await request(app).get(url);

        expect(serviceMock).toHaveBeenCalledTimes(1);
        expect(serviceMock).toHaveBeenCalledWith(year, countryCode);
        expect(response.status).toBe(400);
        expect(response.body).toStrictEqual(responseMock);
        expect(consoleLogSpy).toHaveBeenCalledTimes(1);
    });

    test("res.status() and res.status().json() and next() function are called", async () => {
        const expressRequestMock: unknown = {
            params: {
                countryCode: "1",
                year: "2"
            }
        }

        const expressResponseStatusMock = { json: (json: any) => { } };
        const expressResponseMock: unknown = {
            status: (status: number) => expressResponseStatusMock,
        }

        const nextMock = jest.fn();

        const serviceMock = jest
            .spyOn(service, "datenagerService")
            .mockResolvedValueOnce([] as PublicHolydayV3[]);
        const expressStatusSpy = jest
            .spyOn(expressResponseMock as any, "status");
        const expressStatusJsonSpy = jest
            .spyOn(expressResponseStatusMock as any, "json");

        await datenagerController(
            expressRequestMock as ExpressRequest,
            expressResponseMock as ExpressResponse,
            nextMock,
        );

        expect(serviceMock).toHaveBeenCalledTimes(1);
        expect(serviceMock).toHaveBeenCalledWith("2", "1");
        expect(expressStatusSpy).toHaveBeenCalledTimes(1);
        expect(expressStatusSpy).toHaveBeenCalledWith(200);
        expect(expressStatusJsonSpy).toHaveBeenCalledTimes(1);
        expect(expressStatusJsonSpy).toHaveBeenCalledWith([]);
        expect(nextMock).toHaveBeenCalledTimes(1);
        expect(nextMock).toHaveBeenCalledWith();
    });

});
