
function Banner() {
  return (
    <div className="w-full  mx-auto flex justify-start items-stretch">
      <img className="w-1/2 aspect-[4/3] object-cover" src="/src/assets/images/bannerPic.jpg" alt="banner pic" />
      <div className="w-1/2 flex-1 pr-4 ml-[150px] flex justify-start items-center">
        <div className="w-[200px] h-[200px] bg-yellow-400 absolute translate-y-1/2 -translate-x-1/2 dark:bg-blue-400" />
        <div className="w-[495px] p-4 relative shadow-lg dark:shadow-[0_4px_6px_-1px_rgba(100,100,100,.3)] ">
          <div className="text-xs tracking-widest dark:text-white">
            DEVELOPER/FRONT END/TECHNOLOGY
          </div>
          <div className="text-5xl tracking-wide leading-normal ">
            <p className="dark:text-white">Hello, I’m Davis Tai</p>
            <p className="font-bold dark:text-white">Front End Developer</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
