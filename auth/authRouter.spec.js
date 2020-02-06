const request = require("supertest");
const server = require("../api/server");

describe("authRouter.js", function() {
  describe("enviroment", function() {
    it("should set enviroment to testing", function() {
      expect(process.env.DB_ENV).toBe("testing"); // make sure it fails put "development" in place of testing
    });
  });

  describe("Post /register a user", function() {
    it.skip("should create a new user and give a 201", function() {
      return request(server) //make sure to put return
        .post("/api/user/register")
        .send({
          username: "peter",
          password: "loser",
          location: "AZ"
        })
        .then(res => {
          expect(res.status).toBe(201);
        });
    });
  });
  describe("Post /login a user", function() {
    it("should login a user and give a token", function() {
      return request(server) //make sure to put return
        .post("/api/user/login")
        .send({
          username: "user",
          password: "user"
        })
        .then(res => {
          expect(res.body).toHaveProperty("token");
        });
    });
  });
});
