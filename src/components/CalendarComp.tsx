import { styles } from '../constants/index'
import { calendarStyles } from '../constants/index';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

interface Prop {
  setDate: any;
  from: string;
  to: string,
}

const CalendarComp = ({setDate, from, to}:Prop) => {
  
  return (
    <div className=" flex flex-col relative gap-2 md:min-w-0 md:flex-1">
        <h2 className={`${styles.cardBold}`}>Date</h2>
        <LocalizationProvider  dateAdapter={AdapterDayjs}>
            <DatePicker   
            format="DD/MM/YYYY" 
            sx={calendarStyles} 
            className="shadow-md" 
            defaultValue={dayjs().subtract(1, 'day')} 
            desktopModeMediaQuery={'@media (min-width:768px)'}
            minDate={dayjs(`${(from === 'BTC' || to === "BTC") ? "2013-01-01" : "2000-01-01"}`)}
            maxDate={dayjs().subtract(1, 'day')}
            onChange={(x) => setDate(x)} />
        </LocalizationProvider>
        
    </div>
  )
}

export default CalendarComp