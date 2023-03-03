import { styles, symbols } from '../constants/index'
import FromTo from '../components/FromTo';
import { apiSymbols } from '../api/api';
import compare from '../assets/compare.jpg'
import Amount from '../components/Amount';

const Convert = () => {

  //https://apilayer.com/marketplace/fixer-api#

  //apiSymbols().then(res => console.log(res))

  return (
    <div className='container flex flex-col items-center mt-24 px-4 mb-96'>
        <h1 className='text-black font-bold text-3xl'>Currency Converter</h1>

        {/* Main White Card Start*/}
        <div className="bg-white container flex flex-col gap-6 mt-10 rounded-[10px] px-6 py-6 md:flex-row md:justify-between md:gap-4 md:py-12 md:px-10">

          {/* Amount Component */}
          <Amount />

          {/* FromTo Component */}
          <FromTo />   

        </div>    
        {/* Main White Card End*/} 
    </div>
  )
}

export default Convert