import axios from 'axios'
import { useState, useEffect, useRef } from 'react'

const Select = ({ handleDataChange }) => {
  const [selectData, setSelectData] = useState()
  const selectRef = useRef()

  useEffect(() => {
    axios
      .get('http://localhost:3000/api/country')
      .then((res) => setSelectData(res.data))
  }, [])

  const handleChange = async (e) => {
    const select = selectRef.current.value
    e.preventDefault()
    if (select === 'all') {
      const { data } = await axios.get(
        'http://localhost:3000/api/country/country/world'
      )
      handleDataChange(data)
    } else {
      const { data } = await axios.get(
        `http://localhost:3000/api/country/${select}`
      )
      handleDataChange(data)
    }
  }
  return (
    <label className="mt-5 block  text-lg font-medium text-gray-900">
      Select your country
      <select
        ref={selectRef}
        onChange={handleChange}
        className="mt-3 block w-1/3 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 "
      >
        <option value="all">All</option>
        {selectData &&
          selectData.map((country) => (
            <option key={country.country} value={country.country}>
              {country.country}
            </option>
          ))}
      </select>
    </label>
  )
}

export default Select
