import CountUp from 'react-countup'

const Card = ({ title, amount, color }) => {
  let options
  title === 'Customers' ? null : (options = { suffix: ' €', decimals: 2 })
  return (
    <div
      className={`w-full rounded-lg border xl:w-1/3 border-${color}-200 bg-${color}-200 p-6 shadow-md  `}
    >
      <h5 className="mb-5 text-lg font-bold tracking-tight text-gray-900 xl:text-2xl  ">
        {title}
      </h5>
      <p className="text-3xl font-bold text-gray-700">
        <CountUp separator=" " end={amount} {...options} duration={1} />
      </p>
    </div>
  )
}

export default Card
