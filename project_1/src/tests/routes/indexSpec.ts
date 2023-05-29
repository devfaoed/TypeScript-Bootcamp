import supertest from "supertest";

// importing api route
import app from "../../server";

const request = supertest(app);

describe("To test index api routes response endpoints", () => {
  describe("To test /api", () => {
    it("get /api endpoint", async () => {
      const response = await request.get("/api");
      expect(response.status).toBe(200);
    });
  });
});
