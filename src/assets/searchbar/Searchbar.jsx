import React from 'react'
import { FiBluetooth, FiSearch } from 'react-icons/fi';

const Searchbar = () => {
  return (
    <div className='bg-primary text-white ml-16 h-24 flex space-x-80 items-center'>
      <p className='text-gray-300 text-2xl pl-10 font-normal'>Statistics</p>
      <div className='flex items-center gap-3'>
        <FiSearch/>
        <input type="text" name="" id="" placeholder='Search something...' className='bg-transparent w-52 text-sm outline-none transition-all ease-linear' />
      </div>
      <div className='flex gap-6'>
        <button className='bg-secondary text-center text-primary rounded-xl font-bold w-24 shadow-lg'>Upgrade</button>
        <button className=' items-center p-3 border-2 border-primarySecond text-white rounded-xl font-bold shadow-md'><FiBluetooth size='14'/></button>
      </div>
    </div>
  )
}

export default Searchbar;