
function Banner() {
  return (
    <div className="w-full  mx-auto flex justify-start items-center">
      <img className="w-[1000px] h-[800px] object-cover" src="/src/assets/images/bannerPic.jpg" alt="banner pic" />
      <div className="ml-[300px] p-4 relative shadow-lg after:content-[''] after:absolute after:block after:w-[200px] after:h-[500px] after:bg-yellow-400 after:-translate-y-3/4 after:-translate-x-1/2 after:-z-10">
        <div className="text-xs tracking-widest">
          DEVELOPER/FRONT END/TECHNOLOGY
        </div>
        <div className="text-5xl tracking-wide leading-normal ">
          <p>Hello, I'm Davis Tai</p>
          <p className="font-bold">Front End Developer</p>
        </div>
      </div>
    </div>
  )
}

export default Banner
