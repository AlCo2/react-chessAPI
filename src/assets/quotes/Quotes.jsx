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
      return <div className='bg-primary text-white ml-32 min-h-screen h-max pb-10 grid place-items-center'>Loading...</div>;
    }
  return (
    <div className="bg-primary text-white ml-32 min-h-screen h-max pb-10 grid place-items-center">
      <div>
        <div className="grid border place-items-center bg-primarySecond rounded-md h-30 w-2/4 ml-60">
          <div className='font-Poppins'><p className='text-md font-bold p-10'>{quote.quote}</p></div>
        </div>
        <div className='w-1/2 flex place-items-center translate-x-60 gap-2 mt-1'>
          <h1 className='text-lg font-bold bg-orange text-primarySecond shadow-md py-1 font-Poppins px-3 rounded-md mb-5'>{quote.anime}</h1>
          <p className='text-lg font-bold text-primary bg-orange shadow-md py-1 font-Poppins px-3 rounded-md mb-5'>{quote.character}</p>
        </div>
      </div>
    </div>
  )
}

export default Quotes