const request = require("supertest");
const server = require("../api/server");

describe("techRouter.js", function() {
  describe("enviroment", function() {
    it("should set enviroment to testing", function() {
      expect(process.env.DB_ENV).toBe("testing"); // make sure it fails put "development" in place of testing
    });
  });
  describe("GET /tech", function() {
    it("should return JSON", function() {
      return request(server) //make sure to put return
        .get("/api/tech")
        .expect("Content-Type", /json/i);
    });
  });
  describe("POST /tech", function() {
    it("should return 201 CREATED", function() {
      return request(server) //make sure to put return
        .post("/api/tech")
        .send({
          name: "iphone",
          description: "apple",
          price: "$30.00 a day",
          owner_id: "3"
        })
        .then(res => {
          expect(res.status).toBe(201);
        });
    });
  });
});
