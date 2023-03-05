import { styles } from '../constants/index'
import { NumericFormat } from 'react-number-format';


interface Prop {
  from: string;
  setAmount: any;
}

const Amount = ({from, setAmount}:Prop) => {

  return (
    <div className="flex flex-col relative gap-2 md:min-w-0 md:flex-1">
        <h2 className={`${styles.cardBold}`}>Amount</h2>
        <NumericFormat value="5" prefix={`${from} `} className={`${styles.amount} shadow-md`} onChange={(e) => setAmount(e.target.value)}/>
    </div>
  )
}

export default Amount