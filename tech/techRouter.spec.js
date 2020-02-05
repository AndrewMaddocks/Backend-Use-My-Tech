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
  describe("GET /all owners tech", function() {
    it("should return 404 ", function() {
      return request(server) //make sure to put return
        .get("/api/tech/all/50") //check a non existing id
        .then(res => {
          expect(res.status).toBe(404);
        });
    });
  });
  describe("GET by tech id", function() {
    it("should return 200 OK ", function() {
      return request(server) //make sure to put return
        .get("/api/tech/2") //check a non existing id
        .then(res => {
          expect(res.status).toBe(200);
        });
    });
  });
  describe("Put/:id", function() {
    it("should update tech item and give a 200", function() {
      return request(server) //make sure to put return
        .put("/api/tech/3") //check a non existing id
        .send({
          name: "apple airpods",
          description: "pro",
          price: "100.00 a day",
          rented: "true"
        })
        .then(res => {
          expect(res.status).toBe(200);
        });
    });
  });
  describe("Put/:id", function() {
    it("should update tech item and give a 200", function() {
      return request(server) //make sure to put return
        .put("/api/tech/3") //check a non existing id
        .send({
          name: "apple airpods",
          description: "pro",
          price: "100.00 a day",
          rented: "true"
        })
        .then(res => {
          expect(res.status).toBe(200);
        });
    });
  });
  describe("Delete/:id", function() {
    it("should delete tech item and give a 200", function() {
      return request(server) //make sure to put return
        .delete("/api/tech/3") //delete a existing id

        .then(res => {
          expect(res.status).toBe(200);
        });
    });
  });
  describe("GET /rented/:id", function() {
    it("should return JSON", function() {
      return request(server) //make sure to put return
        .delete("/api/tech/3") //delete a existing id

        .then(res => {
          expect(res.status).toBe(200);
        });
    });
  });
});
