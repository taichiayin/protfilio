import { RiTranslate2, RiSunFill, RiMoonClearFill } from "react-icons/ri"
import { Link } from "react-router-dom"
import { HashLink } from "react-router-hash-link"

const scrollWithOffset = (el) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -80;
  window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
}

function Header() {
  return (
    <div className="w-full fixed top-0 left-0 bg-white z-50 flex justify-center items-center shadow-md">
      <ol className="p-4 flex justify-center items-center text-xl tracking-wider font-medium ml-20 ">
        <li className="ml-20 cursor-pointer hover:text-yellow-400"><HashLink to="/#top" smooth scroll={el => scrollWithOffset(el)}>Home</HashLink></li>
        <li className="ml-20 cursor-pointer hover:text-yellow-400"><HashLink to="/#about" smooth scroll={el => scrollWithOffset(el)}>About</HashLink></li>
        <li className="ml-20 cursor-pointer hover:text-yellow-400"><Link to="/protfolio">Protfolio</Link></li>
        <li className="ml-20 cursor-pointer hover:text-yellow-400"><Link to="/contact">Contact</Link></li>
      </ol>
      <div className="absolute right-4 flex items-center ">
        <div className="">
          <RiTranslate2 className="w-[20px] h-[20px] cursor-pointer" />
        </div>
        <div className="ml-4">
          <RiSunFill className="w-[20px] h-[20px] cursor-pointer" />
          {/* <RiMoonClearFill className="w-[20px] h-[20px] cursor-pointer" /> */}
        </div>
      </div>
    </div>
  )
}

export default Header
