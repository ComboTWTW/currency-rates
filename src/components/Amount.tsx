import { styles } from '../constants/index'

const Amount = () => {
  return (
    <div className="flex flex-col gap-2 md:min-w-0 md:flex-1">
        <h2 className={`${styles.cardBold}`}>Amount</h2>
        <input type="number" className={styles.inputBorder} onKeyPress={(e) => {
            if (!/[0-9,.]/.test(e.key)) {
            e.preventDefault();
        }}} />
    </div>
  )
}

export default Amount