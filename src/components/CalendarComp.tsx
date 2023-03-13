import { useState } from "react"
import { styles } from '../constants/index'
import * as React from 'react';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Popper from '@mui/material';


const CalendarComp = () => {

  
  return (
    <div className=" flex flex-col relative gap-2 md:min-w-0 md:flex-1">
        <h2 className={`${styles.cardBold}`}>Date</h2>
        <LocalizationProvider  dateAdapter={AdapterDayjs}>
          
            <DatePicker   format="DD/MM/YYYY" sx={{
              '.MuiInputBase-input': {padding: "13px",
              borderRadius: '10px',
              outline: 'none',
            },
              borderRadius: '10px',
              outline: 'none',
              '.MuiOutlinedInput-root': {
                borderRadius: '10px',
                borderColor: '#ddd',
                '&:hover': {
                  outline: 'none',
                },
              }
              
            }} className="shadow-md" defaultValue={dayjs()} 
            desktopModeMediaQuery={'@media (min-width:768px)'}
            minDate={dayjs('2000-01-01')}
            />
          
         

        </LocalizationProvider>
        
    </div>
  )
}

export default CalendarComp