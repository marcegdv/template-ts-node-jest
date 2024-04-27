import { CountryCode, PublicHolydayV3 } from "../repositories/dateNager.types";
import { dateNagerRepository } from "../repositories/dateNager";
import { AxiosError } from "axios";

export async function dateNagerService(
    countryCode: CountryCode,
    year: string,
): Promise<PublicHolydayV3[]> {

    if (!countryCode || !year) {
        const newAxiosError = new AxiosError("Invalid request");
        newAxiosError.status = 400;
        throw newAxiosError;
    }

    try {
        const response: PublicHolydayV3[] = await dateNagerRepository(
            countryCode as CountryCode,
            year as string,
        );
        return response;
    } catch (error: unknown) {
        const err = error as AxiosError;
        console.log(">>⭕ services/dateNager - err:", err);
        throw err;
    }

}