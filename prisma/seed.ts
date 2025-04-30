import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const userData: Prisma.UserCreateInput[] = [
  { name: "Alice", email: "alice@example.com" },
  { name: "Bob", email: "bob@example.com" },
  { name: "Charlie", email: "charlie@example.com" },
  { name: "David", email: "david@example.com" },
  { name: "Eve", email: "eve@example.com" },
  { name: "Frank", email: "frank@example.com" },
  { name: "Grace", email: "grace@example.com" },
  { name: "Hannah", email: "hannah@example.com" },
  { name: "Ivy", email: "ivy@example.com" },
  { name: "Jack", email: "jack@example.com" },
  { name: "Kate", email: "kate@example.com" },
];

export async function main() {
  for (const u of userData) {
    await prisma.user.create({ data: u });
  }
}

main();
