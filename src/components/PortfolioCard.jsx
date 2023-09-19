import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

function PortfolioCard(props) {
  const [data, setData] = useState({ skills: [] })

  useEffect(() => {
    setData(props.rowData)
  }, [])

  return (
    <div className="w-full flex justify-center items-center">
      <div
        style={{
          backgroundImage: `url(${data.imgUrl})`
        }}
        className="w-1/2 aspect-square bg-top bg-cover"
      />
      <div className="w-1/2 p-4">
        <h1 className="text-4xl py-4 font-['Jost'] dark:text-white">
          {data.title}
        </h1>
        <p className="text-lg font-thin dark:text-white">{data.description}</p>
        <div className="mt-2 text-lg font-light">
          {data.skills.map((skill, index) => (
            <span
              key={index}
              className="mr-2 bg-yellow-400 text-white py-1 px-2 rounded-full dark:bg-blue-400"
            >
              {skill}
            </span>
          ))}
          <span />
        </div>
      </div>
    </div>
  )
}

PortfolioCard.propTypes = {
  rowData: PropTypes.object
}

export default PortfolioCard
