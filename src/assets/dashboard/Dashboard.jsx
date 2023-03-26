import React from 'react'
import { FiAlertOctagon,FiArrowRight} from 'react-icons/fi';
import img from './img.png';


const Dashboard = () => {
  return (
    <div className='bg-primary ml-40 pl-10 h-max pb-10 flex flex-wrap gap-x-12 gap-y-10'>
        <Section1/>
        <Section2/>
        <Section3/>
        <Section4/>
        <Section5/>
        <Section6/>
    </div>
  )
}

const Section1 = ()=>{
    return (
        <div className='bg-secondary w-72 h-72 rounded-3xl pt-8 pr-8 pl-8'>
            <div className='flex items-center place-content-between'>
                <p className='font-bold'>Website traffic</p>
                <p className='text-sm text-right opacity-70'>More</p>
            </div>
            <div className='grid place-items-center py-3'>
                <p className='border-8  border-l-slate-400 border-black rounded-full p-8 text-2xl font-semibold rotate'>12K</p>
            </div>
            <div>
                <div className='border-b flex place-content-between border-black pb-2'>
                    <div className="flex"><p className='w-4 h-4 relative top-1 right-1 rounded bg-black'></p> Social Media</div>
                    <p className='font-bold'>78%</p>
                </div>
                <div className='pt-1 flex place-content-between'>
                    <div className="flex"><p className='w-4 h-4 relative top-1 right-1 rounded bg-slate-400'></p>Organic Search</div>
                    <p className='font-bold'>22%</p>
                </div>
            </div>
        </div>
    )
}
const Section2 = ()=>{
    return (
        <div className='bg-primarySecond text-white w-72 h-72 rounded-3xl pt-8 pr-8 pl-8'>
            <div className='flex items-center place-content-between mb-32'>
                <p className='font-noraml border px-3 py-1 rounded-full'>Full Report</p>
                <p className='text-sm text-secondary text-right opacity-70'>/2023</p>
            </div>
            <div>
                <div className='flex justify-center items-center'>
                    <button className='border rounded-md p-2 bg-primary'>Download Report</button>
                </div>
            </div>
        </div>
    )
}
const Section3 = ()=>{
    return (
        <div className='bg-third text-black w-72 h-72 rounded-3xl pt-8 pr-8 pl-8'>
             <div className='flex items-center place-content-between'>
                <p className='font-bold'>Bounce Rate</p>
                <p className='text-sm text-right opacity-70 cursor-pointer border-2 border-black rounded-3xl hover:rounded-xl hover:bg-black hover:text-white transition-all duration-300 ease-linear '><FiArrowRight size='30'/></p>
            </div>
            <div className='flex place-items-center my-8 justify-evenly'>
                <p className='border border-black rounded-xl p-2 w-12 text-md font-light text-center'>Mon <br/> 2</p>
                <p className='rounded-xl p-2 w-12 text-md font-light text-center bg-secondary shadow-sm'>Tue <br/> 3</p>
                <p className='border border-black rounded-xl p-2 w-12 text-md font-light text-center'>Wed <br/> 4</p>
            </div>
            <div>
                <div className='flex place-content-between border-black pb-2'>
                    <p className='border-r font-semibold border-black text-5xl pr-10'>23%</p>
                    <p className='font-bold'>-10% <br /> <span className='font-normal text-xs'>Since Last Day</span></p>
                </div>
            </div>
        </div>
    )
}
const Section4 = ()=>{
    return (
        <div className='bg-primarySecond text-slate-200 w-72 h-72 rounded-3xl pt-8 pr-8 pl-8'>
             <div className='flex items-center place-content-between'>
                <p className='font-bold flex items-center gap-3'><FiAlertOctagon/> Roi</p>
                <p className='text-xs text-right opacity-70'>Details</p>
            </div>
            <div className='py-4'>
                <p className='text-3xl font-semibold'>283% <br /> <span className='text-sm opacity-60 font-normal'>Return On Investment</span></p>
            </div>
            <div>
                <div className='w-max'>
                    <img src={img} width={230} height={40} alt="" />
                </div>
            </div>
        </div>
    )
}
const Section5 = ()=>{
    return (
        <div className="bg-[url('https://eurekaergonomic.com/product_images/uploaded_images/what-are-gamer-eyes-2.png')] bg-center bg-cover w-72 h-72 rounded-3xl">
            <button className='bg-secondary rounded-xl px-4 py-2 shadow-xl translate-x-16 translate-y-56 font-semibold'>Web Score With Ai</button>
        </div>  
    )
}
const Section6 = () => {
    return (
        <div className='bg-primarySecond text-slate-200 w-72 h-72 rounded-3xl pt-8 pr-8 pl-8'>
            <div className='mb-5'>
                <p className='font-semibold text-lg'>Customer Churn Rate</p>
            </div>
            <div className='relative'>
                <div className='absolute left-9 top-0'>
                    <div className='absolute bg-orange text-black rounded-full text-xs px-1 left-12 top-2'><p>12.8%</p></div>
                    <div className='flex gap-9'>
                        <div className='w-5 rounded h-24 relative top-12 bg-slate-400'></div>
                        <div className='w-5 rounded h-28 relative top-8 bg-secondary'></div>
                        <div className='w-5 rounded h-16 relative top-20 bg-slate-400'></div>
                        <div className='w-5 rounded h-20 relative top-16 bg-slate-400'></div>
                    </div>
                </div>
                <div className='grid gap-7 text-xs opacity-40'>
                    <div className='w-52'><p>15</p> <hr className='relative left-5 -top-1.5'/></div>
                    <div className='w-52'><p>10</p> <hr className='relative left-5 -top-1.5'/></div>
                    <div className='w-52'><p>5</p> <hr className='relative left-5 -top-1.5'/></div>
                    <div className='w-52'><p>0</p> <hr className='relative left-5 -top-1.5'/></div>
                </div>
                <div className='flex gap-4 text-xs opacity-40 pl-6'>
                    <div className=''><p>50-100</p></div>
                    <div className=''><p>100-250</p></div>
                    <div className=''><p>250-500</p></div>
                    <div className=''><p>{'>'}500</p></div>
                </div>
            </div>
            
        </div>
    )
}
export default Dashboard;