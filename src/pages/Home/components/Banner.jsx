import avatar from '@/assets/images/avatar.png'

function Banner() {
  return (
    <div className="w-full mx-auto flex justify-start items-stretch max-md:flex-col">
      <div className="w-1/2 p-10 max-md:w-full ">
        <img
          className="w-2/3 aspect-[1/1] object-cover mx-auto "
          src={avatar}
          alt="banner pic"
        />
      </div>
      <div className="w-1/2 flex-1 pr-4 flex justify-start items-center max-md:w-full">
        <div className="p-4 relative shadow-lg dark:shadow-[0_4px_6px_-1px_rgba(100,100,100,.3)] max-md:mx-auto">
          {/* <div className="w-full h-full bg-yellow-400 absolute dark:bg-blue-400 -z-10" /> */}
          <div className="max-md:hidden text-xs tracking-widest dark:text-white">
            DEVELOPER/FRONT END/TECHNOLOGY
          </div>
          <div className="text-[96px] max-xl:text-[50px] max-md:text-[25px] ">
            <p className="tracking-wide leading-normal  dark:text-white">
              Hello, I’m <span className="font-['Raleway']">Davis Tai</span>
            </p>
            <p className="mt-10 max-md:mt-0 font-bold dark:text-white font-['Raleway']">
              Front End Developer
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
