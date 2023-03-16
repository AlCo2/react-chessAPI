import React from 'react'
import { RxDashboard} from 'react-icons/rx';
import {FiActivity, FiSettings} from 'react-icons/fi'
import {AiFillSchedule} from 'react-icons/ai'

const Sidebar = () => {
  return (
    <div className='fixed top-0 left-0 h-screen w-40 m-0 flex flex-col
     bg-primary text-white shadow-lg'>
        <div className='mb-10 flex-col mx-auto'>
          <h1 className='flex items-center mt-10 gap-2 mb-10'><RxDashboard/>Wise</h1>
          <div className='grid place-items-center'>
            <img className='rounded-full h-16 w-16' src="https://marketplace.canva.com/EAFEits4-uw/1/0/1600w/canva-boy-cartoon-gamer-animated-twitch-profile-photo-oEqs2yqaL8s.jpg" alt="profilpic" />
            <p className='mb-3'>AlCo2</p>
            <button className='border text-white rounded-md w-10 text-sm hover:bg-white hover:text-black transition-all hover:rounded-xl duration-300 ease-linear'>Edit</button>
          </div>
        </div>
        <SideBarIcon icon={<RxDashboard size="28"/>} text={"Dashboard"} />
        <SideBarIcon icon={<FiActivity size="28"/>} text={"Activity"} />
        <SideBarIcon icon={<AiFillSchedule size="28"/>} text={"Schedule"} />
        <SideBarIcon icon={<FiSettings size="28"/>} text={"settings"}/>
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