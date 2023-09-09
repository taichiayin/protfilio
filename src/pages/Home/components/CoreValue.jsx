// import { RiHeartsFill, RiTeamFill, RiUserFollowFill } from "react-icons/ri";

function CoreValue() {
  return (
    <div className="flex-wrap">
      <div className="w-[1200px] mx-auto flex justify-start items-stretch">
        <div className="flex flex-col justify-center items-center w-1/3 h-full p-10 ">
          <img className="w-[200pxz] h-[200pxz] rounded-full" src="/src/assets/images/teamwork.png" alt="" />
          <h3 className="tracking-wider text-2xl font-medium mt-2 dark:text-white">Teamwork</h3>
          <p className="text-sm text-center mt-2 text-cyan-600 font-light dark:text-white">Together to achieve the same goal, communicate with each other and share everything.</p>
        </div>
        <div className="flex flex-col justify-center items-center w-1/3 h-full p-10 ">
          <img className="w-[200pxz] h-[200pxz] rounded-full" src="/src/assets/images/tolerance.png" alt="" />
          <h3 className="tracking-wider text-2xl font-medium mt-2 dark:text-white">Tolerance</h3>
          <p className="text-sm text-center mt-2 text-cyan-600 font-light dark:text-white">Need comprehend everything and everyone, no matter what happen.</p>
        </div>
        <div className="flex flex-col justify-center items-center w-1/3 h-full p-10 ">
          <img className="w-[200pxz] h-[200pxz] rounded-full" src="/src/assets/images/accountable.png" alt="" />
          <h3 className="tracking-wider text-2xl font-medium mt-2 dark:text-white">Accountable</h3>
          <p className="text-sm text-center mt-2 text-cyan-600 font-light dark:text-white">Make all-out effort to everything what I choose.</p>
        </div>
      </div>

    </div>
  )
}

export default CoreValue
