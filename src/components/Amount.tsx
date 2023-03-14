import { styles } from '../constants/index'
import { NumericFormat } from 'react-number-format';

interface Prop {
  from: string;
  setAmount: any;
}

const Amount = ({from, setAmount}:Prop) => {

  let decimalScale = from != 'BTC' ? 2 : 6; /* Decimal fot BTC */

  return (
    <div className="flex flex-col relative gap-2 md:min-w-0 md:flex-1">
        <h2 className={`${styles.cardBold}`}>Amount</h2>
        <NumericFormat 
        value="5" 
        decimalScale={decimalScale} 
        prefix={`${from} `} 
        className={`${styles.amount} shadow-md`} 
        onChange={(e) => setAmount(e.target.value.length < 4 ? '0' : e.target.value.split(" ")[1])}/>
    </div>
  )
}

export default Amount