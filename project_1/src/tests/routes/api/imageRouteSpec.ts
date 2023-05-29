import supertest from "supertest";

// import api route
import app from "../../../server";

const request = supertest(app);

describe("to test all image routes", () => {
  describe("to test get all images route /images", () => {
    it("list all images", async () => {
      let response = await request.get("/api/images");
      expect(response.status).toBe(200);
    });
  });
});
