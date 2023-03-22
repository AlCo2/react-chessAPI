import React, { useEffect, useState } from 'react'

const Quotes = () => {
    const [quote, setQuote] = useState(null);
    useEffect(() => {
      if (!quote) {
        fetch("https://animechan.vercel.app/api/random")
          .then((response) => response.json())
          .then((jsonData) => setQuote(jsonData));
          console.log(quote);
      }
    }, [quote]);

    if (!quote) {
      return <div>Loading...</div>;
    }
  return (
    <div className='bg-primary text-white ml-40 pl-10 min-h-screen h-max pb-10 '>
        <div className='flex justify-center'>
            
        </div>
        <div className='w-full grid place-items-center'>
          <div><h1 className='text-lg font-bold bg-cyan-800 shadow-md py-2 font-mono px-5 rounded-md mb-5'>{quote.anime}</h1></div>
          <div className='w-1/2 font-mono bg-lime-900 p-2 rounded'><p className='text-sm'>{quote.quote}</p></div>
        </div>
    </div>
  )
}

export default Quotes