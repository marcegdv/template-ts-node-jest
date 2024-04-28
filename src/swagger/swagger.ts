import swaggerJSDoc, { type Options } from "swagger-jsdoc";
import * as swaggerUi from 'swagger-ui-express';
import { type ExpressApp } from "../app";

const options: Options = {
    definition: {
        basePath: "/",
        openapi: '3.0.0',
        info: {
            title: "Example REST-API",
            version: "0.1.0",
            description: "Example for REST-API in Node with Typescript and Jest.",
        },
    },
    apis: [
        "swagger/docs/specification.yaml",
    ],
}

const swaggerSpec = swaggerJSDoc(options);

function swaggerRoute(path: string, app: ExpressApp) {
    return app.use(path, swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}

export default swaggerRoute;