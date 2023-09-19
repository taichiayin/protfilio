import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

function PortfolioCard(props) {
  const [data, setData] = useState({ skills: [] })

  useEffect(() => {
    setData(props.rowData)
  }, [])

  return (
    <div className="w-full flex justify-center items-center max-md:flex-col">
      <div
        style={{
          backgroundImage: `url(${data.imgUrl})`
        }}
        className="max-w-1/2 aspect-square bg-top bg-cover max-md:w-full"
      />
      <div className="max-w-1/2 p-4">
        <h1 className="text-4xl py-4 font-['Jost'] dark:text-white">
          {data.title}
        </h1>
        <p className="text-lg font-thin dark:text-white">{data.description}</p>
        <div className="mt-2 text-lg font-light">
          {data.skills.map((skill, index) => (
            <div
              key={index}
              className="mr-2 inline-block bg-yellow-400 text-white py-1 px-2 rounded-full dark:bg-blue-400 max-md:text-sm"
            >
              {skill}
            </div>
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
