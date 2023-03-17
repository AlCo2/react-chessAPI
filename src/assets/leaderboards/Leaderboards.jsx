import React from 'react'
import {BsFillTrophyFill} from 'react-icons/bs'
const Leaderboards = () => {
  return (
    <div className='bg-primary text-white ml-40 pl-10 min-h-screen h-max pb-10 '>
        <div className='flex justify-center'>
            <p className='-translate-x-36 bg-orange text-sm px-10 py-1 rounded'>Daily</p>
        </div>
        <div className='flex h-60 gap-36 mt-10 ml-1'>
            <div className='translate-y-10'><User name={'Alco2'} color='text-gray-500' rank={3} pic={'https://www.imgacademy.com/sites/default/files/2022-07/img-homepage-meta.jpg'}/></div>
            <div><User name={'Alco2'} color='text-yellow-500' rank={1} pic={'https://www.imgacademy.com/sites/default/files/2022-07/img-homepage-meta.jpg'}/></div>
            <div className='translate-y-10'><User name={'Alco2'} color='text-green-200' rank={2} pic={'https://www.imgacademy.com/sites/default/files/2022-07/img-homepage-meta.jpg'}/></div>
        </div>
        <div className='w-full grid place-items-center'>
            <table className='w-full'>
                <tr >
                    <td className='w-1/3 p-2'>Rank</td>
                    <td className='w-1/3 p-2'>name</td>
                    <td className='w-1/3 p-2'>score</td>
                </tr>
                <tr className='bg-primarySecond rounded-md'>
                    <td className='p-2'>1</td>
                    <td className='p-2'>Alco2</td>
                    <td className='p-2'>3213</td>
                </tr>
            </table>
        </div>
    </div>
  )
}

const User = ({name, pic,rank, color}) =>{
    return (
        <div className='w-40 grid place-items-center'>
            <div className={"w-20 h-20 bg-center bg-cover  bg-black rounded"}>
                <img className='w-20 h-20 rounded-md' src={pic} alt="" />
            </div>
            <p className=''>{name}</p>
            <div className='grid place-items-center mt-2'>
                <BsFillTrophyFill className={color}/>
                <p className={'font-bold'}>Rank: {rank}</p>
            </div>
        </div>
    )
}

export default Leaderboards