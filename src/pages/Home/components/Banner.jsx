function Banner() {
  return (
    <div className="w-full  mx-auto flex justify-start items-stretch">
      <div className="w-1/2 p-10">
        <img
          className="w-2/3 aspect-[1/1] object-cover mx-auto "
          src="/src/assets/images/avatar.png"
          alt="banner pic"
        />
      </div>
      <div className="w-1/2 flex-1 pr-4 ml-[150px] flex justify-start items-center">
        <div className="w-[20%] h-[30%] bg-yellow-400 absolute translate-y-1 -translate-x-1/2 dark:bg-blue-400" />
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
