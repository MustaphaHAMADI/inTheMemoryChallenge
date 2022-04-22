import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async function handler(req, res) {
  const contries = await prisma.$queryRaw`SELECT DISTINCT country FROM sales;`

  res.status(200).json(contries)
}
