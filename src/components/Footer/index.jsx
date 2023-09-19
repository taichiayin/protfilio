import {
  RiInstagramLine,
  RiLinkedinBoxLine,
  RiLineLine,
  RiTwitterLine
} from 'react-icons/ri'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className="w-full border-t-2 mt-10">
      <div className="w-[1200px] mx-auto py-10 px-4 flex justify-between items-start ">
        <div className="w-[400px]">
          <div className="font-bold text-4xl mb-4 dark:text-white">
            Davis Tai
          </div>
          <div className="font-light dark:text-white">
            Thank you for browsing. If the above are what you need, please
            contact me quickly!
          </div>
        </div>
        <div className="">
          <div className="mb-4 text-xl font-bold dark:text-white">
            Quick Links
          </div>
          <div className="flex flex-col font-light opacity-70">
            <ul>
              <li className="mb-2 dark:text-white">
                <Link to="/">Home</Link>
              </li>
              <li className="mb-2 dark:text-white">
                <Link to="/experience">Experience</Link>
              </li>
              <li className="mb-2 dark:text-white">
                <Link to="/skill">Skill</Link>
              </li>
              <li className="mb-2 dark:text-white">
                <Link to="/protfolio">Portfolio</Link>
              </li>
              <li className="mb-2 dark:text-white">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="">
          <div className="mb-4 text-xl font-bold dark:text-white">
            Contact Details
          </div>
          <div className="flex flex-col font-light opacity-70">
            <ul>
              <li className="mb-2 dark:text-white">taichiayin@livemail.tw</li>
              <li className="mb-2 dark:text-white">Line: taichiayin</li>
            </ul>
          </div>
        </div>
        <div className="">
          <div className="mb-4 text-xl font-bold dark:text-white">
            Follow Me
          </div>
          <ul className="flex opacity-70">
            <li className="text-[30px] cursor-pointer">
              <RiInstagramLine className="dark:fill-gray-400" />
            </li>
            <li className="ml-2 text-[30px] cursor-pointer">
              <RiLinkedinBoxLine className="dark:fill-gray-400" />
            </li>
            <li className="ml-2 text-[30px] cursor-pointer">
              <RiLineLine className="dark:fill-gray-400" />
            </li>
            <li className="ml-2 text-[30px] cursor-pointer">
              <RiTwitterLine className="dark:fill-gray-400" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
