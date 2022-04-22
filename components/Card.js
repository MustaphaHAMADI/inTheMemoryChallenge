import CountUp from 'react-countup'

const Card = ({ title, amount, color }) => {
  return (
    <div
      className={`w-1/3 rounded-lg border border-${color}-200 bg-${color}-200 p-6 shadow-md  `}
    >
      <h5 className="mb-5 text-2xl font-bold tracking-tight text-gray-900 ">
        {title}
      </h5>
      <p className="text-3xl font-bold text-gray-700">
        <CountUp
          separator=" "
          end={amount}
          decimals={2}
          suffix=" €"
          duration={1}
        />
      </p>
    </div>
  )
}

export default Card
