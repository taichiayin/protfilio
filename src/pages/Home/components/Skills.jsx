import {
  BiLogoCss3,
  BiLogoHtml5,
  BiLogoJavascript,
  BiLogoVuejs,
  BiLogoReact,
  BiLogoGit,
  BiLogoGoLang,
  BiLogoNodejs
} from 'react-icons/bi'
import { FaJenkins } from 'react-icons/fa6'
import { SiWebpack } from 'react-icons/si'

function Skills() {
  return (
    <div className="w-full">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center flex-wrap">
        <div className="p-4">
          <BiLogoCss3 size="80" className="dark:fill-gray-400 max-md:w-10" />
        </div>
        <div className="p-4">
          <BiLogoHtml5 size="80" className="dark:fill-gray-400 max-md:w-10" />
        </div>
        <div className="p-4">
          <BiLogoJavascript
            size="80"
            className="dark:fill-gray-400 max-md:w-10"
          />
        </div>
        <div className="p-4">
          <BiLogoVuejs size="80" className="dark:fill-gray-400 max-md:w-10" />
        </div>
        <div className="p-4">
          <BiLogoReact size="80" className="dark:fill-gray-400 max-md:w-10" />
        </div>
        <div className="p-4">
          <BiLogoGit size="80" className="dark:fill-gray-400 max-md:w-10" />
        </div>
        <div className="p-4">
          <BiLogoGoLang size="80" className="dark:fill-gray-400 max-md:w-10" />
        </div>
        <div className="p-4">
          <BiLogoNodejs size="80" className="dark:fill-gray-400 max-md:w-10" />
        </div>
        <div className="p-4">
          <FaJenkins size="80" className="dark:fill-gray-400 max-md:w-10" />
        </div>
        <div className="p-4">
          <SiWebpack size="80" className="dark:fill-gray-400 max-md:w-10" />
        </div>
      </div>
    </div>
  )
}

export default Skills
