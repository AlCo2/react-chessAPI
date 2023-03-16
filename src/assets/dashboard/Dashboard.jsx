import React from 'react'

const Dashboard = () => {
  return (
    <div className='bg-primary ml-40 pl-10 h-max pb-10 flex flex-wrap gap-x-12 gap-y-10'>
        <div className='bg-secondary w-72 h-72 rounded-3xl pt-8 pr-8 pl-8'>
            <div className='flex items-center place-content-between'>
                <p className='font-bold'>Website traffic</p>
                <p className='text-sm text-right opacity-70'>More</p>
            </div>
            <div className='grid place-items-center pt-2'>
                <p className='border-8 border-black rounded-full p-8 text-3xl font-medium'>12K</p>
            </div>
            <div>
                <div className='border-b-2 flex place-content-between border-black pb-2'>
                    <p className=''>Social Media</p>
                    <p className='font-bold'>78%</p>
                </div>
                <div className='pt-1 flex place-content-between'>
                    <p className=''>Organic Search</p>
                    <p className='font-bold'>22%</p>
                </div>
            </div>
        </div>
        <div className='bg-primarySecond w-72 h-72 rounded-3xl'>
            
        </div>   
        <div className='bg-third w-72 h-72 rounded-3xl'>
            
        </div>   
        <div className='bg-primarySecond w-72 h-72 rounded-3xl'>
            
        </div>   
        <div className='bg-white w-72 h-72 rounded-3xl'>
            
        </div>   
        <div className='bg-primarySecond w-72 h-72 rounded-3xl'>
            
        </div>   
    </div>
  )
}
export default Dashboard;