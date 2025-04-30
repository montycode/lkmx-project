import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    // Get the total number of users in the database
    const totalUsers = await prisma.user.count();

    // Calculate the date 7 days ago from now
    const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);

    // Count how many users were created in the last 7 days
    const recentUsers = await prisma.user.count({
      where: {
        createdAt: {
          gte: sevenDaysAgo,
        },
      },
    });

    // Fetch all user emails
    const users = await prisma.user.findMany({
      select: { email: true },
    });

    // Create a record to store domain frequency
    const domainCount: Record<string, number> = {};

    // Count how many users have each email domain
    for (const user of users) {
      const domain = user.email.split("@")[1];
      domainCount[domain] = (domainCount[domain] || 0) + 1;
    }

    // Find the most common email domain
    const mostCommonDomain =
      Object.entries(domainCount).sort((a, b) => b[1] - a[1])[0]?.[0] ?? null;

    // Return the analytics data
    return NextResponse.json({
      totalUsers,
      recentUsers,
      mostCommonDomain,
    });
  } catch (error) {
    console.error("Error fetching analytics:", error);

    // Return an error response in case of failure
    return NextResponse.json(
      { error: "Failed to get analytics" },
      { status: 500 }
    );
  }
}
