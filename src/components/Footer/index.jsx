import { RiInstagramLine, RiLinkedinBoxLine, RiLineLine, RiTwitterLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className="w-[1200px] mx-auto py-10 px-4 flex justify-between items-start">
      <div className="w-[400px]">
        <div className="font-bold text-4xl mb-4">Davis Tai</div>
        <div className="font-light">Thank you for browsing. If the above are what you need, please contact me quickly!</div>
      </div>
      <div className="">
        <div className="mb-4 text-xl font-bold">Quick Links</div>
        <div className="flex flex-col font-light opacity-70">
          <ul>
            <li className="mb-2"><Link to="/">Home</Link></li>
            <li className="mb-2"><Link to="/experience">Experience</Link></li>
            <li className="mb-2"><Link to="/skill">Skill</Link></li>
            <li className="mb-2"><Link to="/protfolio">Protfolio</Link></li>
            <li className="mb-2"><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="">
        <div className="mb-4 text-xl font-bold">Contact Details</div>
        <div className="flex flex-col font-light opacity-70">
          <ul>
            <li className="mb-2">taichiayin@livemail.tw</li>
            <li className="mb-2">Line: taichiayin</li>
          </ul>
        </div>
      </div>
      <div className="">
        <div className="mb-4 text-xl font-bold">Follow Me</div>
        <ul className='flex opacity-70'>
          <li className='text-[30px] cursor-pointer'><RiInstagramLine /></li>
          <li className='ml-2 text-[30px] cursor-pointer'><RiLinkedinBoxLine /></li>
          <li className='ml-2 text-[30px] cursor-pointer'><RiLineLine /></li>
          <li className='ml-2 text-[30px] cursor-pointer'><RiTwitterLine /></li>
        </ul>

      </div>
    </div>
  )
}

export default Footer
