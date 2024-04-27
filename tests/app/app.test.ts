import request from "supertest";
import app from "../../src/app";
import { homeHTML } from "../../src/controllers/home";
import { healthResponse } from "../../src/controllers/health";

describe("api tests:", () => {
    
    test("/ path return homeHTML", async () => {
        const url = "/"
        const response = await request(app).get(url);
        expect(response.status).toBe(200);
        expect(response.text).toEqual(homeHTML);
    });
    
    test("/health path return healt status json", async () => {
        const url = "/health"
        const response = await request(app).get(url);
        expect(response.status).toBe(200);
        expect(response.text).toEqual(JSON.stringify(healthResponse));
    });
       
});