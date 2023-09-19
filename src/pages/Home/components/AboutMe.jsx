import aboutMeImg from '@/assets/images/aboutme.jpg'
import cv from '@/assets/download/Davis_Tai_Resume.pdf'

function AboutMe() {
  return (
    <div
      id="about"
      className="max-w-[1200px] mx-auto my-10 px-4 flex justify-center items-center max-md:flex-col"
    >
      <div className="w-1/2 pr-4 max-md:w-full">
        <span className="w-full mb-2 block text-xl text-yellow-400 dark:text-blue-400">
          I’m a Front End Developer
        </span>
        <h4 className="w-full block text-3xl mb-4 font-medium dark:text-white">
          Why Hire Me For Your Next Project?
        </h4>
        <p className="font-thin dark:text-white">
          Hello here! I’m a Front End Develpoer, and I’m very passionate and
          accountable to my job. With more than 10 years work experience as a
          professional web developer, I have acquired the skills and knowledge
          necessary to make your project a success. So, If it makes your heart
          flutter, don’t doubt, contact me immediately. 😁
        </p>
        <a
          href={cv}
          download="davis_tai_cv.pdf"
          className="inline-block rounded-full mt-4 py-4 px-6 text-lg bg-yellow-400 text-white font-['Jost'] dark:bg-blue-400"
          to=""
        >
          CV Download
        </a>
      </div>
      <div className="w-1/2 max-md:w-full max-md:order-first">
        <img src={aboutMeImg} alt="" />
      </div>
    </div>
  )
}

export default AboutMe
