import { styles } from '../constants/index'

interface Prop {
  from: string;
}

const Amount = ({from}:Prop) => {

  return (
    <div className="flex flex-col relative gap-2 md:min-w-0 md:flex-1">
        <h2 className={`${styles.cardBold}`}>Amount</h2>
        <input type="number" className={`${styles.inputBorder}`} onKeyPress={(e) => {
            if (!/[0-9,.]/.test(e.key)) {
            e.preventDefault();
        }}} />
        <span className='absolute text-gray-600 mt-[3rem] left-3'>
          {from}
        </span>
    </div>
  )
}

export default Amount