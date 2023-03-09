import { useState } from "react"
import { styles } from '../constants/index'
import { NumericFormat } from 'react-number-format';


const Calendar = () => {

    const [toggle, setToggle] = useState<boolean>(false);
    const [range, setRange] = useState({
        startDate: new Date(),
        endDate: new Date(),
      })

  return (
    <div className="flex flex-col relative gap-2 md:min-w-0 md:flex-1">
        <h2 className={`${styles.cardBold}`}>Amount</h2>
        <div className={`${styles.amount} shadow-md h-[50px]`} onClick={() => setToggle(true)}></div>
    </div>
  )
}

export default Calendar