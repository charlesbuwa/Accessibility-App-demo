const request = require("supertest");
const app = require("../app");

describe("POST /api/analyze", () => {
  it("should return accessibility analysis for valid HTML", async () => {
    const response = await request(app)
      .post("/api/analyze")
      .attach(
        "htmlFile",
        Buffer.from('<img src="test.jpg"><h1>Title</h1><h3>Subtitle</h3>'),
        "test.html"
      );
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("score");
    expect(response.body.issues.length).toBeGreaterThan(0);
  });

  it("should handle file processing errors", async () => {
    const response = await request(app).post("/api/analyze");
    expect(response.status).toBe(500);
  });
});
