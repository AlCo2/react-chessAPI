import React, { useEffect, useState } from 'react'
import {BsFillTrophyFill} from 'react-icons/bs'

const Leaderboards = () => {
    const [chessPlayers, setChessPlayers] = useState([]);
        useEffect(()=>{
        fetch("https://api.chess.com/pub/leaderboards")
        .then(response=>response.json())
        .then(jsonData=>setChessPlayers(jsonData));

    }, []);
  return (
    <div className='bg-primary text-white ml-40 pl-10 min-h-screen h-max pb-10 '>
        <div className='flex justify-center'>
            <p className='-translate-x-8 bg-orange text-sm px-10 py-1 rounded'>Daily</p>
        </div>
        {chessPlayers && chessPlayers.daily && 
        <div className='flex h-ma w-max p-10 gap-36 mt-10 mb-10 ml-5 rounded'>
            <div className='translate-y-10 h-max p-5 shadow-2xl border-b'><User name={chessPlayers.daily[2].username} color='text-gray-500' rank={chessPlayers.daily[2].rank} pic={chessPlayers.daily[2].avatar} /></div>
            <div className='h-max p-5 shadow-2xl border-b'><User name={chessPlayers.daily[0].username} color='text-yellow-500' rank={chessPlayers.daily[0].rank} pic={chessPlayers.daily[0].avatar} /></div>
            <div className='translate-y-10 h-max p-5 shadow-2xl border-b'><User name={chessPlayers.daily[1].username} color='text-green-200' rank={chessPlayers.daily[1].rank} pic={chessPlayers.daily[1].avatar} /></div>
        </div>
        }
        <div className='w-full grid place-items-center'>
            <table className='w-2/3'>
            <tbody>
                <tr className='shadow-md shadow-white'>
                    <td className='w-1/6 p-2 opacity-40'>Rank</td>
                    <td className='w-1/3 p-2 opacity-40'>name</td>
                    <td className='w-1/3 p-2 opacity-40'>score</td>
                </tr>
                {chessPlayers.daily?.map((player)=>(
                <tr key={player.player_id} className='bg-primarySecond rounded-md'>
                    <td className='p-2'>{player.rank}</td>
                    <td className='p-2'>{player.username}</td>
                    <td className='p-2'>{player.score}</td>
                </tr>
                ))}
            </tbody>
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


export default Leaderboards;