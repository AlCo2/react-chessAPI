import React, { useState } from 'react'
import { RxDashboard} from 'react-icons/rx';
import {FiActivity, FiSettings} from 'react-icons/fi'
import {AiFillSchedule} from 'react-icons/ai'
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [active, setActive] = useState('Dashboard');
  return (
    <div className='fixed top-0 left-0 h-screen w-40 m-0 flex flex-col
     bg-primary text-white shadow-lg'>
        <div className='mb-10 flex-col mx-auto'>
          <h1 className='flex items-center mt-10 gap-2 mb-10'><RxDashboard/>Co2</h1>
          <div className='grid place-items-center'>
            <img className='rounded-full h-16 w-16' src="https://marketplace.canva.com/EAFEits4-uw/1/0/1600w/canva-boy-cartoon-gamer-animated-twitch-profile-photo-oEqs2yqaL8s.jpg" alt="profilpic" />
            <p className='mb-3'>AlCo2</p>
            <Link to="/settings" onClick={()=>setActive('Settings')}><button className='border text-white rounded-md w-10 text-sm hover:bg-white hover:text-black transition-all hover:rounded-xl duration-300 ease-linear'>Edit</button></Link>
          </div>
        </div>
        <Link to="/" onClick={()=>setActive('Dashboard')}> <SideBarIcon nameOfClass={active==='Dashboard'?'active':''} icon={<RxDashboard size="28"/>} text={"Dashboard"} /></Link>
        <Link to="/leaderboards" onClick={()=>setActive('leaderboards')}><SideBarIcon nameOfClass={active==='leaderboards'?'active':''}  icon={<FiActivity size="28"/>} text={"leaderboards"} /></Link>
        <Link to="/quotes" onClick={()=>setActive('quotes')}><SideBarIcon nameOfClass={active==='quotes'?'active':''}  icon={<AiFillSchedule size="28"/>} text={"quotes"} /></Link>
        <Link to="/settings" onClick={()=>setActive('Settings')}><SideBarIcon nameOfClass={active==='Settings'?'active':''}  icon={<FiSettings size="28"/>} text={"settings"}/></Link>
    </div>
  )
}
const SideBarIcon = ({icon, text='tooltip', nameOfClass}) => (
    <div className={'sidebar-icon group '+ nameOfClass}>
        {icon}
        
        <span className='sidebar-tooltip group-hover:scale-100'>
            {text}
        </span>
    </div>
);

export default Sidebar;