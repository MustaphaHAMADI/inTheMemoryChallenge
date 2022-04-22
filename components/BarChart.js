import React from 'react'
import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

const BarChart = ({ sales }) => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  )
  if (sales) {
    const labels = sales[0].map((sale) => sale.month)

    const data = {
      labels,
      datasets: [
        {
          label: 'sales',
          data: sales[0].map((sale) => sale.total),
          backgroundColor: 'rgba(204, 169, 221, 0.8)',
        },
      ],
    }

    return (
      <div className=" mt-8 flex w-full ">
        <Bar data={data} />
      </div>
    )
  } else {
    return null
  }
}

export default BarChart
