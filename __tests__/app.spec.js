const request = require("supertest");
const app = require("../app");

describe("API", () => {
  test("It should response the GET method", done => {
    request(app)
      .get("/")
      .then(response => {
        expect(response.statusCode).toBe(200);
        expect(response.text).toBe("Hello World!")
        done();
      });
  });
})