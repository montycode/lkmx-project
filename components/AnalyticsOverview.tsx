"use client";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { useQuery } from "@tanstack/react-query";

type AnalyticsData = {
  totalUsers: number;
  recentUsers: number;
  mostCommonDomain: string | null;
};

export function AnalyticsOverview() {
  const { data, isLoading, error } = useQuery<AnalyticsData>({
    queryKey: ["analytics"],
    queryFn: async () => {
      const res = await fetch("/api/analytics");
      if (!res.ok) throw new Error("Failed to fetch analytics");
      return res.json();
    },
  });

  if (isLoading) return <p>Loading analytics...</p>;
  if (error || !data) return <p>Failed to load analytics</p>;

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 w-full">
      <Card>
        <CardHeader>
          <CardDescription>Total Users</CardDescription>
          <CardTitle className="text-3xl">{data.totalUsers}</CardTitle>
        </CardHeader>
      </Card>
      <Card>
        <CardHeader>
          <CardDescription>New Users (Last 7 days)</CardDescription>
          <CardTitle className="text-3xl">{data.recentUsers}</CardTitle>
        </CardHeader>
      </Card>
      <Card>
        <CardHeader>
          <CardDescription>Most Common Email Domain</CardDescription>
          <CardTitle className="text-2xl">
            {data.mostCommonDomain ?? "N/A"}
          </CardTitle>
        </CardHeader>
      </Card>
    </div>
  );
}
