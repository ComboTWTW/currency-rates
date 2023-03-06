import FromTo from '../components/FromTo';
import Amount from '../components/Amount';
import { useState } from 'react';
import { apiConvert } from '../api/api';

const Convert = () => {

  const [from, setFrom] = useState<string>('USD');
  const [to, setTo] = useState<string>('EUR');
  const [amount, setAmount] = useState<string>('5');

  const link = `https://api.apilayer.com/fixer/convert?to=${to}&from=${from}&amount=${amount}`;

  const click = (link:string) => {
    apiConvert(link);
  }

 

  return (
    <div className='container flex flex-col items-center mt-24 px-4 mb-96'>
        <h1 className='text-black font-bold text-3xl'>Currency Converter</h1>

        {/* Main White Card Start*/}
        <div className="bg-white container flex flex-col gap-6 mt-10 rounded-[10px] px-6 py-6 shadow-lg md:flex-row md:justify-between md:gap-4 md:py-12 md:px-10">
          {/* Amount Component */}
          <Amount from={from} setAmount={setAmount}/>
          {/* FromTo Component */}
          <FromTo setFrom={setFrom} setTo={setTo} from={from} to={to}/>   
        </div>    
        <button className='bg-covertBG  rounded-[10px] text-white font-bold py-3 px-8 hover:opacity-70 hover:duration-300'>Convert</button>
        {/* Main White Card End*/} 
    </div>
  )
}

export default Convert