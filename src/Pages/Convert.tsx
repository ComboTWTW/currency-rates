import { styles } from '../constants/index'
import FromTo from './FromTo';
import { apiSymbols } from '../api/api';

const Convert = () => {

  //https://apilayer.com/marketplace/fixer-api#

  //apiSymbols().then(res => console.log(res))

  return (
    <div className='container flex flex-col items-center mt-24 px-4 mb-96'>
        <h1 className='text-black font-bold text-3xl'>Currency Converter</h1>
        {/* Main Card */}
        <div className="bg-white container flex flex-col mt-10 rounded-[10px] px-6 py-6 md:py-12 md:px-12">
          {/* Convertation */}
          <div className="flex flex-col gap-6 md:flex-row">
            <div className="flex flex-col gap-2">
              <h2 className="text-bTextColor font-bold text-[1.125rem]">Amount</h2>
              <input type="number" className={styles.inputBorder} />
            </div>
          {/* FromToComponent */}
            <FromTo />
          </div>

        </div>
    </div>
  )
}

export default Convert