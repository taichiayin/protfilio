import { useState } from "react";
import { RiSunFill, RiMoonClearFill } from "react-icons/ri"
import { Link } from "react-router-dom"
import { HashLink } from "react-router-hash-link"

const scrollWithOffset = (el) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -80;
  window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
}

function Header() {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    console.log('toggle');
    document.documentElement.classList.toggle('dark')
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <div className="w-full fixed top-0 left-0 bg-white z-50 flex justify-center items-center shadow-md dark:bg-gray-900 dark:shadow-[0_4px_6px_-1px_rgba(100,100,100,.3)] ">
      <ol className="p-4 flex justify-center items-center text-xl tracking-wider font-medium ml-20 ">
        <li className="ml-20 cursor-pointer hover:text-yellow-400 dark:text-white dark:hover:text-blue-400"><HashLink to="/#top" smooth scroll={el => scrollWithOffset(el)}>Home</HashLink></li>
        <li className="ml-20 cursor-pointer hover:text-yellow-400 dark:text-white dark:hover:text-blue-400"><HashLink to="/#about" smooth scroll={el => scrollWithOffset(el)}>About</HashLink></li>
        <li className="ml-20 cursor-pointer hover:text-yellow-400 dark:text-white dark:hover:text-blue-400"><Link to="/protfolio">Protfolio</Link></li>
        <li className="ml-20 cursor-pointer hover:text-yellow-400 dark:text-white dark:hover:text-blue-400"><Link to="/contact">Contact</Link></li>
      </ol>
      <div className="absolute right-4 flex items-center z-10 cursor-pointer" onClick={toggleTheme}>
        {
          theme === 'dark' ?
            <RiSunFill className="dark:fill-white" size="30" /> :
            <RiMoonClearFill size="30" />
        }
      </div>
    </div>
  )
}

export default Header
