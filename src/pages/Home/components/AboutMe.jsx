import { Link } from "react-router-dom"

function AboutMe() {
  return (
    <div id="about" className="w-[1200px] mx-auto my-10 px-4 flex justify-center items-center">
      <div className="w-1/2 pr-4">
        <span className="w-full mb-2 block text-xl text-yellow-400">I'm a Front End Developer</span>
        <h4 className="w-full block text-3xl mb-4 font-medium">Why Hire Me For Your Next Project?</h4>
        <p className="font-thin">
          Hello here! I’m a Front End Develpoer, and I’m very passionate and accountable to my job.
          With more than 10 years work experience as a professional web developer,
          I have acquired the skills and knowledge necessary to make your project a success.
          So, If it makes your heart flutter, don’t doubt, contact me immediately. 😁
        </p>
        <Link className="inline-block rounded-full mt-4 py-4 px-6 text-lg bg-yellow-400 text-white font-['Jost']" to="/experience">CV Download</Link>
      </div>
      <div className="w-1/2">
        <img src="/src/assets/images/aboutme.jpg" alt="" />
      </div>
    </div>
  )
}

export default AboutMe
