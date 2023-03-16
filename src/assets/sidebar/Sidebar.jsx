import React from 'react'
import { FiAward, FiBarChart, FiBellOff, FiBookmark } from 'react-icons/fi';


const Sidebar = () => {
  return (
    <div className='fixed top-0 left-0 h-screen w-16 m-0 flex flex-col
     bg-gray-900 text-white shadow-lg'>
        <SideBarIcon icon={<FiAward size="28"/>} text={"BestPlayers"} />
        <SideBarIcon icon={<FiBarChart size="28"/>} text={"connect"} />
        <SideBarIcon icon={<FiBookmark size="28"/>} text={"Bookmark"} />
        <SideBarIcon icon={<FiBellOff size="28"/>} text={"nothing"}/>
    </div>
  )
}
const SideBarIcon = ({icon, text='tooltip'}) => (
    <div className='sidebar-icon group'>
        {icon}

        <span className='sidebar-tooltip group-hover:scale-100'>
            {text}
        </span>
    </div>
);

export default Sidebar;