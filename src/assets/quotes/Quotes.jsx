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
          <div><h1 className='text-lg font-bold bg-cyan-400 shadow-md py-2 px-5 rounded-sm mb-5'>{quote.anime}</h1></div>
          <div><p>{quote.quote}</p></div>
        </div>
    </div>
  )
}

export default Quotes