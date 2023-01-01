import { PrismaClient } from "@prisma/client";

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

let prisma: PrismaClient;

if (typeof window === "undefined") {
  prisma =
    global.prisma ||
    new PrismaClient({
      log: import.meta.env.DEV ? ["query", "error", "warn"] : ["error"],
    });
  if (import.meta.env.PROD) {
    global.prisma = prisma;
  }
}

// @ts-ignore
export default prisma;
