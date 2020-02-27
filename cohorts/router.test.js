const request = require("supertest");

const server = require("../api/server.js");

describe("cohorts router", function() {
  it("should run the tests", () => {
    expect(true).toBe(true); // Assertion
  });

  describe("GET /api/cohorts", function() {
    it("should return 200 OK", function() {
      return request(server)
        .get("/api/cohorts")
        .then(res => {
          expect(res.status).toBe(200);
        });
    });

    it("should return cohorts as the router value", () => {
      return request(server)
        .get("/api/cohorts")
        .then(res => {
          expect(res.body.router).toBe("cohorts");
        });
    });

    it("should return cohorts as the router value (async version)", async function() {
      const res = await request(server).get("/api/cohorts");

      expect(res.body.router).toBe("cohorts");
    });
  });
  it("should return JSON formatted body", () => {
    return request(server)
      .get("/api/cohorts")
      .then(res => {
        expect(res.type).toMatch(/json/);
      });
  });

  it("should return an array of cohorts (async version", async function() {
    const res = await request(server).get("/api/cohorts");
  });
});
