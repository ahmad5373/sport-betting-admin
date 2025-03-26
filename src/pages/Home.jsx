import { Link } from "react-router-dom";
import Header from "../layouts/partials/header";
import { BsCartCheckFill } from "react-icons/bs";
import { HiMiniUsers } from "react-icons/hi2";
import ChartOne from "../components/chartOne";
import { RiSecurePaymentLine } from "react-icons/ri";
import { PiSoccerBallFill } from "react-icons/pi";

export default function Home() {
  
  return (
    <div>
      <Header header={"Dashboard"} />
      <div className="max-w-screen-2xl mx-auto">
        <div className="mx-4 sm:mx-9 my-5">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 md:gap-6 2xl:grid-cols-4 2xl:gap-7">
            <Link to='/users' className="w-full">
              <div className="rounded-sm border border-stroke bg-white py-6 px-7 shadow-lg">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-150 bg-opacity-10">
                  <BsCartCheckFill className="w-6 h-6 text-gray-150" />
                </div>
                <div className="mt-4 flex items-end justify-between">
                  <div>
                    <h4 className="text-title-md font-bold text-black ">
                      456
                    </h4>
                    <span className="text-sm font-medium text-gray-500">Users</span>
                  </div>
                  <span className="flex items-center gap-1 text-sm font-medium text-gray-500">
                    0.43%
                  </span>
                </div>
              </div>
            </Link>
            <Link to='/subscriptions' className="w-full">
              <div className="rounded-sm border border-stroke bg-white py-6 px-7 shadow-lg">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-150 bg-opacity-10">
                  <RiSecurePaymentLine className="w-6 h-6 text-gray-150" />
                </div>
                <div className="mt-4 flex items-end justify-between">
                  <div>
                    <h4 className="text-title-md font-bold text-black ">
                      56
                    </h4>
                    <span className="text-sm font-medium text-gray-500">Subscription</span>
                  </div>
                  <span className="flex items-center gap-1 text-sm font-medium text-gray-500">
                    0.43%
                  </span>
                </div>
              </div>
            </Link>
            <Link to='/data-insights' className="w-full">
              <div className="rounded-sm border border-stroke bg-white py-6 px-7 shadow-lg">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-150 bg-opacity-10">
                  <PiSoccerBallFill className="w-6 h-6 text-gray-150" />
                </div>
                <div className="mt-4 flex items-end justify-between">
                  <div>
                    <h4 className="text-title-md font-bold text-black ">
                      56
                    </h4>
                    <span className="text-sm font-medium text-gray-500">Betting Insights</span>
                  </div>
                  <span className="flex items-center gap-1 text-sm font-medium text-gray-500">
                    0.43%
                  </span>
                </div>
              </div>
            </Link>

          </div>

          <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7 2xl:gap-7">
            <ChartOne />
            {/* <ChartTwo /> */}
            {/* <ChartThree />
            <ChartFour /> */}
          </div>
        </div>
      </div>
    </div>
  )
}
