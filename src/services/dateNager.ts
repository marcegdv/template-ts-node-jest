import { CountryCode, PublicHolydayV3 } from "../repositories/datenager.types";
import { datenagerRepository } from "../repositories/datenager";
import { AxiosError } from "axios";

export async function datenagerService(
    countryCode: CountryCode,
    year: string,
): Promise<PublicHolydayV3[]> {

    if (!countryCode || !year) {
        const newAxiosError = new AxiosError("Invalid request");
        newAxiosError.status = 400;
        throw newAxiosError;
    }

    try {
        const response: PublicHolydayV3[] = await datenagerRepository(
            countryCode as CountryCode,
            year as string,
        );
        return response;
    } catch (error: unknown) {
        const err = error as AxiosError;
        console.log(">>⭕ services/datenager - err:", err);
        throw err;
    }

}