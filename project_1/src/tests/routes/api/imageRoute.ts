import supertest from "supertest";

// import image route
import imageRoute from "../../../routes/api/imageRoute";

const request = supertest(imageRoute);

describe("to test all image routes", () => {
  describe("to test get all images route /images", () => {
    it("list all images", async () => {
      let response = await request.get("/api/images");
      expect(response.status).toBe(204);
    });
  });
});
