import FromTo from '../components/FromTo';
import Amount from '../components/Amount';
import { useState } from 'react';

const Convert = () => {

  const [from, setFrom] = useState<string>('AFN');
  const [to, setTo] = useState<string>('AFN');

  return (
    <div className='container flex flex-col items-center mt-24 px-4 mb-96'>
        <h1 className='text-black font-bold text-3xl'>Currency Converter</h1>

        {/* Main White Card Start*/}
        <div className="bg-white container flex flex-col gap-6 mt-10 rounded-[10px] px-6 py-6 md:flex-row md:justify-between md:gap-4 md:py-12 md:px-10">

          {/* Amount Component */}
          <Amount from={from} />

          {/* FromTo Component */}
          <FromTo setFrom={setFrom} setTo={setTo} from={from} to={to}/>   

        </div>    
        {/* Main White Card End*/} 
    </div>
  )
}

export default Convert