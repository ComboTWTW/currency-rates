import { useState } from "react"
import { styles } from '../constants/index'
import * as React from 'react';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { border } from "@mui/system";




const CalendarComp = () => {

    

  return (
    <div className="flex flex-col relative gap-2 md:min-w-0 md:flex-1">
        <h2 className={`${styles.cardBold}`}>Date</h2>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker format="DD/MM/YYYY" sx={{
              '.MuiInputBase-input': {padding: "12px",},
              borderRadius: '10px',
              border: '#ddd 1px solid',
              outline: 'none',
              
            }} className="shadow-md" defaultValue={dayjs()} />
            <MobileDatePicker sx={{
              display: 'none',
            }} defaultValue={dayjs()} />
        </LocalizationProvider>
        
    </div>
  )
}

export default CalendarComp