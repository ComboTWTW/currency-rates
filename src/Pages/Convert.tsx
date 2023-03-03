import { styles, symbols } from '../constants/index'
import FromTo from './FromTo';
import { apiSymbols } from '../api/api';
import compare from '../assets/compare.jpg'

const Convert = () => {

  //https://apilayer.com/marketplace/fixer-api#

  //apiSymbols().then(res => console.log(res))

  return (
    <div className='container flex flex-col items-center mt-24 px-4 mb-96'>
        <h1 className='text-black font-bold text-3xl'>Currency Converter</h1>

        {/* Main White Card Start*/}
        <div className="bg-white container flex flex-col gap-6 mt-10 rounded-[10px] px-6 py-6 md:flex-row md:py-12 md:px-12">

          {/* Amount Start */}
          <div className="flex flex-col gap-2">
            <h2 className={`${styles.cardBold}`}>Amount</h2>
            <input type="number" className={styles.inputBorder} onKeyPress={(e) => {
              if (!/[0-9,.]/.test(e.key)) {
                e.preventDefault();
            }}} />
          </div>
          {/* Amount End */}

          {/* FromToComponent Start */}
          <div className="flex flex-col gap-2">
            {/* From Start */}
            <div className="flex flex-col gap-2">
              <h2 className={`${styles.cardBold}`}>From</h2>
              <select id="from" className={styles.inputBorder}>
                {symbols.map((symbol) => (
                    <option value={symbol.symbol}>{symbol.symbol + symbol.text}</option>
                ))}
              </select>
            </div>  
            {/* From End */}    

            {/* Compare Button Start */}  
            <div className='rounded-full flex justify-center items-center w-[50px] h-[50px]  bg-white border border-[#dddddd] cursor-pointer active:border-covertBG mt-4 mb-4'>
              <img src={compare} alt="compare_arrows" className='w-[20px] h-[20px] rotate-90'/>
            </div>
            {/* Compare Button End */} 

            {/* To Start */}
            <div className="flex flex-col gap-2">     
              <h2 className={`${styles.cardBold}`}>To</h2>
              <select id="from" className={styles.inputBorder}>
                  {symbols.map((symbol) => (
                      <option value={symbol.symbol}>{symbol.symbol + symbol.text}</option>
                  ))}
              </select>
            </div>
            {/* To End */}     
               
          </div> 
          {/* FromToComponent End */}

        </div>    
        {/* Main White Card End*/} 
    </div>
  )
}

export default Convert