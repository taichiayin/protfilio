function Header() {
  return (
    <div className="w-full fixed top-0 left-0 bg-white z-50">
      <ol className="p-4 flex justify-center items-center text-lg tracking-wider">
        <li className="ml-20 cursor-pointer hover:text-green-400"><a href="">Home</a></li>
        <li className="ml-20 cursor-pointer hover:text-green-400"><a href="">Experience</a></li>
        <li className="ml-20 cursor-pointer hover:text-green-400"><a href="">Skill</a></li>
        <li className="ml-20 cursor-pointer hover:text-green-400"><a href="">Protfolio</a></li>
        <li className="ml-20 cursor-pointer hover:text-green-400"><a href="">Contact</a></li>
      </ol>
    </div>
  )
}

export default Header
