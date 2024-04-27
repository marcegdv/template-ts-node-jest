import { NextFunction, Request, Response } from "express";

export const homeHTML: string = '<html><head><title>Node App</title></head><body style=\"color: white; background-color: black;\"><h1>API online.</h1></body></html>'

export async function homeControllerExample(req: Request, res: Response, next: NextFunction) {
    res.status(200).send(homeHTML);
    next();
};