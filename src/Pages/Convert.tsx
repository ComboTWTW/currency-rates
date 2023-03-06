import FromTo from '../components/FromTo';
import Amount from '../components/Amount';
import { useState } from 'react';
import { apiConvert } from '../api/api';
import { useQuery } from 'react-query'

const Convert = () => {

  const [from, setFrom] = useState<string>('USD');
  const [to, setTo] = useState<string>('EUR');
  const [amount, setAmount] = useState<string>('5');

  const { isLoading, isSuccess, data, refetch, isRefetching } = useQuery(['conv'], () => apiConvert(to, from, amount));
  isSuccess && console.log(data);
  

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
            <FromTo setFrom={setFrom} setTo={setTo} from={from} to={to} />   
          </div>
          {/* ConvertationBlock End */}
          <div className={`flex flex-col md:flex-row ${(isLoading || isSuccess) ? 'justify-between' : 'justify-end'} mt-8 `}>
            {/* Result Block Start */}
            {
              isLoading || isRefetching  ? 
              <div className="">Loading</div> :
              isSuccess && !isRefetching && 
            <div className="flex flex-col w-full gap-3 justify-self-start md:w-[40%]">
              <div className="flex flex-row items-center gap-1 md:gap-3">
                <p className='font-semibold text-gray-700 shrink-0'>{amount} {from} <span className='md:ml-3'>=</span></p>
                <h2 className='font-bold text-black text-2xl justify-self-end shrink-0'>{isSuccess && (data.result).toString().slice(0, -3)} {to}</h2>
              </div>
              <h3 className='font-normal text-gray-700'>1 {from} = {isSuccess && data.info.rate} {to}</h3>
            </div>
            }
            {/* Result Block End */}

            {/* Convertation Button Start*/}
            <button className='bg-covertBG shadow-md mt-6 md:mt-0 tracking-wide md:justify-self-end w-full items-end md:w-32 self-end md:self-start py-3 rounded-[10px] text-white font-bold hover:opacity-70 hover:duration-300 ' onClick={() => refetch()}>Convert</button>
            {/* Convertation Button End*/}
          </div>
        </div>    
        {/* Main White Card End*/} 
    </div>
  )
}

export default Convert