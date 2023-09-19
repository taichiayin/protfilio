import PortfolioCard from '@/components/PortfolioCard'
import { useState } from 'react'

function Protfolio() {
  const [list, setList] = useState([
    {
      title: 'TRAVEL AGENCY',
      description:
        'Looking for an unforgettable tour? Book a fully-organized trip with the best tour companies and let the tour operator take care of everything for you. Check out the tour details and read reviews from our customers to help you choose the perfect tour for you.',
      skills: ['Vuejs3.0', 'Vue-Router', 'Vite', 'TailwindCss'],
      imgUrl: '/src/assets/images/portfolio/travelAgent_Home.jpg'
    },
    {
      title: 'WX APP',
      description:
        'Weather forecast app, you can search for the weather of the city you want to know, and you can also see the weather of the current location.',
      skills: ['React', 'Redux', 'axios', 'chakra-ui', 'Vite', 'TailwindCss'],
      imgUrl: '/src/assets/images/portfolio/wxApp1.jpg'
    }
  ])

  return (
    <div className="w-[1200px] mx-auto p-4 flex flex-col justify-center items-center">
      {list.map((item, index) => (
        <PortfolioCard key={index} rowData={item} />
      ))}
    </div>
  )
}

export default Protfolio
