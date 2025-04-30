import { prisma } from "@/lib/prisma";

export async function getAllUsers() {
  return prisma.user.findMany();
}

export async function createUser(name: string, email: string) {
  return prisma.user.create({
    data: { name, email },
  });
}
