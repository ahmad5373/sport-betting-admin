import { SlHome } from 'react-icons/sl'
import { BsCalendar2Event, BsPersonVcard } from 'react-icons/bs'
import { TbSportBillard } from "react-icons/tb";
import { RiCloseFill, RiContactsLine, RiLogoutCircleLine, RiSecurePaymentFill } from 'react-icons/ri'
import { AiOutlineUser } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { NavLink } from "react-router-dom";
import { useState } from 'react'

export default function Sidebar() {
  const [showMenu, setShowMenu] = useState(false);
  const [activeTab, setActiveTab] = useState('');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setShowMenu(false);
  };

  return (
    <>
      <div className='bg-white px-4 sm:px-8 pt-2'>
        <button
          type="button"
          onClick={e => setShowMenu(true)}
          className="flex items-center p-2 border-0 text-sm text-gray-150 bg-white bg-opacity-5 rounded-lg lg:hidden hover:bg-gray-100"
        >
          <span className="sr-only">Open sidebar</span>
          <svg className="w-6  h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
          </svg>
        </button>
      </div>

      <aside className={`fixed top-0 left-0 z-40 w-64 bg-gray-150 h-screen ${showMenu ? null : `hidden`} lg:block`} aria-label="Sidebar">
        <div className="h-full px-3 py-4 overflow-y-auto">
          {showMenu &&
            <button className='float-right bg-white rounded-full text-xl text-white' onClick={e => setShowMenu(false)}>
              <RiCloseFill />
            </button>
          }
          <div className='flex flex-col justify-between h-full'>
            <ul className="space-y-2 font-normal text-sm">
              <li className='py-3'>
                <Link to='/' className="flex items-center justify-center py-6 px-5 rounded-lg space-x-2">
                {/* <img src={secondLogo} alt='....' className='object-cover  ' /> */}

                  <h1 className='text-white text-2xl font-semibold'>Bettign Logo</h1>
                </Link>
              </li>
              <li onClick={() => handleTabClick('dashboard')}>
                <NavLink
                  to="/"
                  className={({ isActive, isPending }) =>
                    isActive ? "flex items-center py-2 px-5 rounded-lg bg-white drop-shadow text-black font-semibold"
                      :
                      "flex items-center py-2 px-5 text-white rounded-lg hover:hover:hover:bg-white/30 drop-shadow hover:text-white hover:font-medium outline-none"
                  }
                >
                  <SlHome />
                  <span className="flex-1 ml-3 whitespace-nowrap">Dashboard</span>
                </NavLink>
              </li>
              <li onClick={() => handleTabClick('sellers')}>
                <NavLink
                  to='/users'
                  className={({ isActive, isPending }) => {
                    return (
                      isActive ? "flex items-center py-2 px-5 rounded-lg bg-white drop-shadow text-black font-semibold"
                        :
                        "flex items-center py-2 px-5 text-white rounded-lg hover:hover:hover:bg-white/30 drop-shadow hover:text-white hover:font-medium outline-none"
                    )
                  }}
                >
                  <AiOutlineUser />
                  <span className="flex-1 ml-3 whitespace-nowrap">Users</span>
                </NavLink>
              </li>
              <li onClick={() => handleTabClick('sellers')}>
                <NavLink
                  to='/subscriptions'
                  className={({ isActive, isPending }) => {
                    return (
                      isActive ? "flex items-center py-2 px-5 rounded-lg bg-white drop-shadow text-black font-semibold"
                        :
                        "flex items-center py-2 px-5 text-white rounded-lg hover:hover:hover:bg-white/30 drop-shadow hover:text-white hover:font-medium outline-none"
                    )
                  }}
                >
                  <RiSecurePaymentFill   />
                  <span className="flex-1 ml-3 whitespace-nowrap">Subscriptions</span>
                </NavLink>
              </li>
              <li onClick={() => handleTabClick('dashboard')}>
                <NavLink
                  to='/data-insights'
                  className={({ isActive, isPending }) => {
                    return (
                      isActive ? "flex items-center py-2 px-5 rounded-lg bg-white drop-shadow text-black font-semibold"
                        :
                        "flex items-center py-2 px-5 text-white rounded-lg hover:hover:hover:bg-white/30 drop-shadow hover:text-white hover:font-medium outline-none"
                    )
                  }}
                >
                  <TbSportBillard />
                  <span className="flex-1 ml-3 whitespace-nowrap">Betting Insights</span>
                </NavLink>
              </li>
              <li onClick={() => handleTabClick('dashboard')}>
                <NavLink
                  to="/faqs"
                  className={({ isActive, isPending }) =>
                    isActive ? "flex items-center py-2 px-5 rounded-lg bg-white drop-shadow text-black font-semibold"
                      :
                      "flex items-center py-2 px-5 text-white rounded-lg hover:bg-white/20 drop-shadow hover:text-white hover:font-medium outline-none"
                  }
                >
                  <BsPersonVcard />
                  <span className="flex-1 ml-3 whitespace-nowrap">FAQs</span>
                </NavLink>
              </li>
              <li onClick={() => handleTabClick('dashboard')}>
                <NavLink
                  to='/contact-us'
                  className={({ isActive, isPending }) => {
                    return (
                      isActive ? "flex items-center py-2 px-5 rounded-lg bg-white drop-shadow text-black font-semibold"
                        :
                        "flex items-center py-2 px-5 text-white rounded-lg hover:hover:hover:bg-white/30 drop-shadow hover:text-white hover:font-medium outline-none"
                    )
                  }}
                >
                  <RiContactsLine />
                  <span className="flex-1 ml-3 whitespace-nowrap">Contact Us</span>
                </NavLink>
              </li>
              <li onClick={() => handleTabClick('dashboard')}>
                <NavLink
                  to="/content"
                  className={({ isActive, isPending }) =>
                    isActive ? "flex items-center py-2 px-5 rounded-lg bg-white drop-shadow text-black font-semibold"
                      :
                      "flex items-center py-2 px-5 text-white rounded-lg hover:hover:hover:bg-white/30 drop-shadow hover:text-white hover:font-medium outline-none"
                  }
                >
                  <BsCalendar2Event />
                  <span className="flex-1 ml-3 whitespace-nowrap">App Settings</span>
                </NavLink>
              </li>
            </ul>
            <div>
              <Link to={'/login'}>
                <div className='flex items-center px-5 py-2 rounded-lg text-white gap-2.5 cursor-pointer font-medium bg-white/30 drop-shadow hover:text-white hover:font-medium'>
                  <RiLogoutCircleLine />
                  <p>Logout</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}
