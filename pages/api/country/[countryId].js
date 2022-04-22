// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from '@prisma/client'
import { format } from 'date-fns'

const prisma = new PrismaClient()

export default async function handler(req, res) {
  const { countryId } = req.query

  if (!countryId) {
    res.status(400).json({
      error: 'country is required',
    })
    return
  }
  const customers = await prisma.sales.count({
    where: {
      country: countryId.charAt(0).toUpperCase() + countryId.slice(1),
    },
  })

  const totalRevenue = await prisma.$queryRaw`SELECT
  SUM(quantity * unit_price)
 FROM sales
 WHERE country = ${countryId.charAt(0).toUpperCase() + countryId.slice(1)}
 ;`
  const avg = await prisma.$queryRaw`SELECT
  
  AVG(quantity * unit_price)
 FROM sales
 WHERE country = ${countryId.charAt(0).toUpperCase() + countryId.slice(1)}
 ;`

  const sales = await prisma.$queryRaw`SELECT
  DATE_TRUNC('month',date)::date
    AS  month,
    
  SUM(quantity * unit_price)  as total
FROM sales
WHERE country = ${countryId.charAt(0).toUpperCase() + countryId.slice(1)}
GROUP BY DATE_TRUNC('month',date)
ORDER BY month ASC
;
`
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
