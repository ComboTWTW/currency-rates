import { styles, symbols } from '../constants/index'

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
        </div>
            
    </div>
  )
}

export default FromTo