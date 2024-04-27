import axios, { AxiosError, AxiosResponse } from "axios";
import { CountryCode, PublicHolydayV3 } from "./dateNager.types";
import ENV from "../environments";

export async function dateNagerRepository(
    countryCode: CountryCode,
    year: string,
): Promise<PublicHolydayV3[]> {

    const url = `${ENV.API_DATENAGER_URL}${ENV.API_DATENAGER_PATH_PUBLICHOLYDAYS}/${year}/${countryCode}`;

    try {
        const response: AxiosResponse = await axios.get(url);
        return response.data;
    } catch (error: unknown) {
        const err = error as AxiosError;
        console.log(">>⭕ repositories/dateNager - err:", err);
        throw err;
    }

}