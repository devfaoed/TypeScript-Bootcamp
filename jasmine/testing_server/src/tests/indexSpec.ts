import supertest from "supertest";

// importing app from index.js
import app from "..";

const request = supertest(app);

describe("testing async/await endpoint response", () => {
  it("gets the /api response", async () => {
    const response = await request.get("/api");
    expect(response.status).toBe(200);
  });
});
