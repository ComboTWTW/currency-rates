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
        <div className="bg-white container flex flex-col mt-10 rounded-[10px] px-6 py-6 shadow-lg md:py-12 md:px-10">
          {/* ConvertationBlock Start */}
          <div className="flex flex-col md:flex-row container gap-6">
            {/* Amount Component */}
            <Amount from={from} setAmount={setAmount}/>
            {/* FromTo Component */}
            <FromTo setFrom={setFrom} setTo={setTo} from={from} to={to}/>   
          </div>
          {/* ConvertationBlock End */}
          <div className="flex flex-col md:flex-row justify-between mt-6 ">
            {/* Result Block Start */}
            <div className="flex flex-col w-full gap-3 justify-self-start md:w-[33%]">
              <p className='font-semibold text-gray-700'>4,000.00 US Dollars =</p>
              <h2 className='font-bold text-black text-2xl'>301,265.43 Russian Rubles</h2>
              <h3 className='font-normal text-gray-700'>1 USD = 75.3921 RUB</h3>
            </div>
            {/* Result Block End */}

            {/* Convertation Button Start*/}
            <button className='bg-covertBG shadow-md mt-6 md:mt-0 tracking-wide md:justify-self-end w-full items-end md:w-32 self-end md:self-start py-3 rounded-[10px] text-white font-bold hover:opacity-70 hover:duration-300 '>Convert</button>
            {/* Convertation Button End*/}
          </div>
        </div>    
        {/* Main White Card End*/} 
    </div>
  )
}

export default Convert