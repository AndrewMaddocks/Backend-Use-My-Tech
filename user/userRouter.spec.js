const request = require("supertest");
const server = require("../api/server");

describe("userRouter.js", function() {
  describe("enviroment", function() {
    it("should set enviroment to testing", function() {
      expect(process.env.DB_ENV).toBe("testing"); // make sure it fails put "development" in place of testing
    });
  });
  describe("GET all users", function() {
    it("should have property username", function() {
      return request(server) //make sure to put return
        .get("/api/user") //check a non existing id
        .then(res => {
          expect(res.body[0]).toHaveProperty("username");
        });
    });
  });
  describe("GET user by id", function() {
    it("should have property username", function() {
      return request(server) //make sure to put return
        .get("/api/user/2") //check a non existing id
        .then(res => {
          expect(res.body).toEqual({
            id: 2,
            username: "user",
            password:
              "$2a$10$C86S.U2rk8F.jYPjqaBPAetPcmgbKatAjNeP9pgEQWzlNIUyCyAoi",
            location: "Alabama",
            user_image:
              "https://www.tvovermind.com/wp-content/uploads/2018/06/Napoleon-Dynamite-750x422.jpg"
          });
        });
    });
  });
});
