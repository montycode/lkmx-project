import { AnalyticsOverview } from "@/components/AnalyticsOverview";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center w-full p-4">
      <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>
      <AnalyticsOverview />
    </section>
  );
}
