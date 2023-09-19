// import { RiHeartsFill, RiTeamFill, RiUserFollowFill } from "react-icons/ri";
import teamwork from '@/assets/images/teamwork.png'
import tolerance from '@/assets/images/tolerance.png'
import accountable from '@/assets/images/accountable.png'

function CoreValue() {
  return (
    <div className="flex-wrap">
      <div className="max-w-[1200px] mx-auto flex justify-start items-stretch max-md:flex-col">
        <div className="flex flex-col justify-center items-center w-1/3 h-full p-10 max-md:w-full">
          <img className="w-full aspect-square" src={teamwork} alt="" />
          <h3 className="tracking-wider text-2xl font-medium mt-2 dark:text-white">
            Teamwork
          </h3>
          <p className="text-sm text-center mt-2 text-cyan-600 font-light dark:text-white">
            Together to achieve the same goal, communicate with each other and
            share everything.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center w-1/3 h-full p-10 max-md:w-full">
          <img className="w-full aspect-square" src={tolerance} alt="" />
          <h3 className="tracking-wider text-2xl font-medium mt-2 dark:text-white">
            Tolerance
          </h3>
          <p className="text-sm text-center mt-2 text-cyan-600 font-light dark:text-white">
            Need comprehend everything and everyone, no matter what happen.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center w-1/3 h-full p-10 max-md:w-full">
          <img className="w-full aspect-square" src={accountable} alt="" />
          <h3 className="tracking-wider text-2xl font-medium mt-2 dark:text-white">
            Accountable
          </h3>
          <p className="text-sm text-center mt-2 text-cyan-600 font-light dark:text-white">
            Make all-out effort to everything what I choose.
          </p>
        </div>
      </div>
    </div>
  )
}

export default CoreValue
