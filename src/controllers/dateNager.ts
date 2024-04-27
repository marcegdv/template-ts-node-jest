import { NextFunction, Request, Response } from "express";
import { CountryCode, PublicHolydayV3 } from "../repositories/dateNager.types";
import { AxiosError } from "axios";
import { dateNagerService } from "../services/dateNager";

export async function dateNagerController(
    req: Request,
    res: Response,
    next: NextFunction,
): Promise<void> {

    const countryCode = req.query.countryCode as CountryCode;
    const year = req.query.year as string;

    try {
        const response: PublicHolydayV3[] = await dateNagerService(countryCode, year);
        res.status(200).json(response);
    } catch (error: unknown) {
        const err = error as AxiosError;
        console.log(">>⭕ controller/dateNager - err:", err);
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