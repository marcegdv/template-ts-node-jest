import { NextFunction, Request, Response } from "express";

export const healthResponse = { status: 'ok' };

export async function healthControllerExample(req: Request, res: Response, next: NextFunction) {
    res.json(healthResponse);
    next();
};