import supertest from "supertest";

// importing api route
import ApiRoute from "../../routes";

const request = supertest(ApiRoute);

describe("To test index api routes response endpoints", () => {
  describe("To test /api", () => {
    it("get /api endpoint", async () => {
      const response = await request.get("/api");
      expect(response.status).toBe(200);
    });
  });
});
