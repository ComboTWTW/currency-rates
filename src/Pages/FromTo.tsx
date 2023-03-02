import { styles, symbols } from '../constants/index'
import compare from '../assets/compare.jpg'

const FromTo = () => {
  return (
    <div className="flex flex-col">
        <div className="flex flex-col gap-2">
            <h2 className="text-bTextColor font-bold text-[1.125rem]">From</h2>
            <select id="from" className={styles.inputBorder}>
              {symbols.map((symbol) => (
                  <option value={symbol.symbol}>{symbol.symbol + symbol.text}</option>
              ))}
            </select>
            <span className='rounded-full flex justify-center items-center w-[50px] h-[50px]  bg-white border border-[#dddddd] cursor-pointer active:border-covertBG mt-4 mb-4'>
                  <img src={compare} alt="compare_arrows" className='w-[20px] h-[20px] rotate-90'/>
            </span>
            <h2 className="text-bTextColor font-bold text-[1.125rem]">To</h2>
            <select id="from" className={styles.inputBorder}>
                {symbols.map((symbol) => (
                    <option value={symbol.symbol}>{symbol.symbol + symbol.text}</option>
                ))}
            </select>
        </div>
            
    </div>
  )
}

export default FromTo