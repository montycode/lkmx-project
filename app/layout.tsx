import "./globals.css";

import { Geist, Geist_Mono } from "next/font/google";

import type { Metadata } from "next";
import { NavMenu } from "@/components/NavMenu";
import { Providers } from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MontyCode - Next, Prisma & React Query CRUD App",
  description:
    "A simple CRUD application built with Next.js, Prisma, and React Query. Explore user management, analytics, and more.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-50`}
      >
        <Providers>
          <main className="min-h-screen w-full p-4">
            <NavMenu />
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
