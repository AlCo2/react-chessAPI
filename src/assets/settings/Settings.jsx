import React from 'react'

const Settings = () => {
  return (
    <div className='bg-primary text-white font-Poppins ml-40 pl-10 h-screen pb-10 gap-x-12 gap-y-10'>
        <div className='pt-10 pl-10'>
            <p className='font-bold'>My profil</p>
            <p className='opacity-40'>Edit your profil</p>
        </div>
        <div className='flex flex-wrap justify-between mr-72'>
            <div className='pl-20 pt-10'>
                <p className='text-left'>Your profil Pic</p>
                <div className='flex gap-2'>
                    <img className='rounded-full h-32 w-32' src="https://marketplace.canva.com/EAFEits4-uw/1/0/1600w/canva-boy-cartoon-gamer-animated-twitch-profile-photo-oEqs2yqaL8s.jpg" alt="profilpic" />
                    <div className='mt-5'>
                        <button className='bg-orange px-2 py-1 mb-2 w-20 rounded'>Edit pic</button>
                        <br />
                        <button className='bg-slate-300 px-2 py-1 w-20 text-black rounded'>Delete</button>
                    </div>
                </div>
                <p className='text-xs mt-5 opacity-70'>Please Only use pic with 256x256</p>
            </div>
            <div className='flex flex-col gap-10 pl-20 pt-10 mr-20'>
            <div>
                <label htmlFor="">Name</label>
                <br />
                <input className='text-black rounded p-1' type="text" value={'AlCo2'} name="" id="" />
            </div>
            <div>
                <label htmlFor="">Gmail</label>
                <br />
                <input className='text-black rounded p-1' disabled type="text" value={'abdou@gmail.com'} name="" id="" />
            </div>
            <div>
                <label htmlFor="">Password</label>
                <br />
                <input className='text-black rounded p-1' type="password" disabled value={'testtestssss'} name="" id="" />
            </div>
            <button className='bg-secondary px-2 py-1 w-20 text-black rounded'>Change</button>
        </div>
        </div>
        
    </div>
  )
}

export default Settings