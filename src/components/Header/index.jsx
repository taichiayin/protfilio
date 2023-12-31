import { useState } from 'react'
import { RiSunFill, RiMoonClearFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

const scrollWithOffset = (el) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset
  const yOffset = -80
  window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' })
}

function Header() {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark')
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <div className="w-full fixed top-0 left-0 bg-white z-50 flex justify-center items-center shadow-md dark:bg-gray-900 dark:shadow-[0_4px_6px_-1px_rgba(100,100,100,.3)] ">
      <ol className="w-[600px] p-4 flex justify-between items-center text-xl tracking-wider font-medium max-md:justify-start max-md:text-sm">
        <li className="cursor-pointer hover:text-yellow-400 dark:text-white dark:hover:text-blue-400 max-md:mr-2">
          <HashLink to="/#top" smooth scroll={(el) => scrollWithOffset(el)}>
            Home
          </HashLink>
        </li>
        <li className="cursor-pointer hover:text-yellow-400 dark:text-white dark:hover:text-blue-400 max-md:mr-2">
          <HashLink to="/#about" smooth scroll={(el) => scrollWithOffset(el)}>
            About
          </HashLink>
        </li>
        <li className="cursor-pointer hover:text-yellow-400 dark:text-white dark:hover:text-blue-400 max-md:mr-2">
          <Link to="/protfolio">Portfolio</Link>
        </li>
        <li className="cursor-pointer hover:text-yellow-400 dark:text-white dark:hover:text-blue-400 max-md:mr-2">
          <Link to="/contact">Contact</Link>
        </li>
      </ol>
      <div
        className="absolute right-4 flex items-center z-10 cursor-pointer"
        onClick={toggleTheme}
      >
        {theme === 'dark' ? (
          <RiSunFill className="dark:fill-white max-md:w-6" size="30" />
        ) : (
          <RiMoonClearFill size="30" className="max-md:w-6" />
        )}
      </div>
    </div>
  )
}

export default Header
