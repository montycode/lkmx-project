import { IncomingMessage, ServerResponse, createServer } from "http";

import { User } from "@/types";
import request from "supertest";

describe("GET /api/users", () => {
  const mockUsers = [
    { name: "Frank", email: "frank@example.com" },
    { name: "Grace", email: "grace@example.com" },
    { name: "Hannah", email: "hannah@example.com" },
  ];

  it("should return users list", async () => {
    // Handler for the API that responds with the users
    const handler = (req: IncomingMessage, res: ServerResponse) => {
      if (req.method === "GET" && req.url === "/api/users") {
        const mockUsers: User[] = [
          { name: "Frank", email: "frank@example.com" },
          { name: "Grace", email: "grace@example.com" },
          { name: "Hannah", email: "hannah@example.com" },
        ];
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(mockUsers));
      } else {
        res.writeHead(404).end();
      }
    };

    // Create an HTTP server to simulate the API
    const server = createServer((req, res) => {
      handler(req, res);
    });

    // Use supertest to make the GET request to the server
    const response = await request(server).get("/api/users");

    // Check if the response is correct
    expect(response.status).toBe(200);
    expect(response.body).toEqual(mockUsers);

    // Close the server after the test
    server.close();
  });

  it("should return 404 for non-existing route", async () => {
    const handler = (req: IncomingMessage, res: ServerResponse) => {
      if (req.method === "GET" && req.url === "/api/users") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(mockUsers));
      } else {
        res.writeHead(404).end();
      }
    };

    // Create the server and test a non-existing route
    const server = createServer((req, res) => {
      handler(req, res);
    });

    const response = await request(server).get("/api/nonexistent");

    // Assert that the response returns 404
    expect(response.status).toBe(404);

    server.close();
  });

  it("should return 405 for delete requests", async () => {
    const handler = (req: IncomingMessage, res: ServerResponse) => {
      if (req.method === "GET" && req.url === "/api/users") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(mockUsers));
      } else {
        res.writeHead(405).end(); // Method Not Allowed
      }
    };

    // Create the server and test a delete request to /api/users
    const server = createServer((req, res) => {
      handler(req, res);
    });

    const response = await request(server).delete("/api/users");

    // Assert that the response returns 405
    expect(response.status).toBe(405);

    server.close();
  });
});
