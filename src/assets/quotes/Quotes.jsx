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
    <div className="bg-primary bg-center bg-cover text-white ml-40 pl-10 min-h-screen h-max pb-10 ">
        <div className='flex justify-center'>
    
        </div>
        <div className='w-1/2 grid place-items-center translate-y-5'><h1 className='text-lg font-bold bg-blue-600 shadow-md py-2 font-mono px-5 rounded-md mb-5'>{quote.anime}</h1></div>
        <div className="grid place-items-center bg-[url('https://i.pinimg.com/736x/60/cb/46/60cb4600ad2427938722b77faba6426a.jpg')] bg-cover rounded-md h-30 w-2/4 ml-60">
          <div className='font-mono'><p className='text-md font-bold p-10'>{quote.quote}</p></div>
        </div>
        <div className='w-1/2 grid place-items-center translate-x-52'><p className='text-lg font-bold bg-red-600 shadow-md py-2 font-mono px-5 rounded-md mb-5'>{quote.character}</p></div>
    </div>
  )
}

export default Quotes