import { NextFunction, Request, Response } from "express";
import { CountryCode, PublicHolydayV3 } from "../repositories/datenager.types";
import { AxiosError } from "axios";
import { datenagerService } from "../services/datenager";

export async function datenagerController(
    req: Request,
    res: Response,
    next: NextFunction,
): Promise<void> {

    const year = req.params.year as string;
    const countryCode = req.params.countryCode as CountryCode;

    try {
        const response: PublicHolydayV3[] = await datenagerService(countryCode, year);
        res.status(200).json(response);
    } catch (error: unknown) {
        const err = error as AxiosError;
        console.log(">>⭕ controller/datenager - err:", err);
        if (err.status) {
            res.status(err.status).json(err);
        } else {
            res.status(500).json({
                status: 500,
                message: "Internal server error."
            });
        }
    } finally {
        next();
    }

}
