import { createUser, getAllUsers } from "@/services/userService";

import { NextResponse } from "next/server";

/**
 * GET /api/users
 * Fetches all users from the database and returns them as JSON.
 */
export async function GET() {
  try {
    // Call service function to retrieve all users
    const users = await getAllUsers();

    // Return the user list with a 200 OK status
    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    // Log any unexpected errors
    console.error("Error fetching users:", error);

    // Return a 500 Internal Server Error with a message
    return NextResponse.json(
      { error: "Error fetching users" },
      { status: 500 }
    );
  }
}

/**
 * POST /api/users
 * Creates a new user based on the request body (name and email).
 */
export async function POST(req: Request) {
  try {
    // Parse the request body as JSON
    const { name, email } = await req.json();

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 } // 400 Bad Request if missing required fields
      );
    }

    // Call service function to create a new user
    const user = await createUser(name, email);

    // Return the created user and a 201 Created status
    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    // Log any unexpected errors
    console.error("Error creating user:", error);

    // Return a 500 Internal Server Error with a message
    return NextResponse.json({ error: "Error creating user" }, { status: 500 });
  }
}
