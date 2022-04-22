// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from '@prisma/client'
import { format } from 'date-fns'

const prisma = new PrismaClient()

export default async function handler(req, res) {
  const sales = await prisma.$queryRaw`SELECT
  DATE_TRUNC('month',date)::date
    AS  month,
    
  SUM(quantity * unit_price)  as total,
  COUNT(customer_id) as customers
  FROM sales
  GROUP BY DATE_TRUNC('month',date)
  ORDER BY month ASC
;
`

  const customers = await prisma.sales.count({})
  const avg = await prisma.$queryRaw`SELECT
  
  AVG(quantity * unit_price)
  FROM sales
 
 ;`

  const totalRevenue = await prisma.$queryRaw`SELECT
  
 SUM(quantity * unit_price)
  FROM sales

;`

  const response = []

  const data = sales.map(({ month, total }) => ({
    month: format(new Date(month), 'MMMM yyyy'),
    total: Number(total.toFixed(2)),
  }))

  const divData = {
    avg: Number(avg[0].avg.toFixed(2)),
    customers: customers,
    totalRevenue: Number(totalRevenue[0].sum.toFixed(2)),
  }

  response.push(data, divData)

  res.status(200).json(response)
}
