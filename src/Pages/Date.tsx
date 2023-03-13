import FromTo from '../components/FromTo';
import { useEffect, useState } from 'react';
import { apiDate } from '../api/api';
import { useQuery } from 'react-query'
import CircularProgress from '@mui/material/CircularProgress';
import CalendarComp from '../components/CalendarComp';
import dayjs from 'dayjs';

const Date = () => {
  
  const [from, setFrom] = useState<string>('USD');
  const [to, setTo] = useState<string>('EUR');
  const [date, setDate] = useState<string>(JSON.stringify(dayjs()).substring(1, 11));

  
  const { isLoading, isSuccess, data, refetch, isRefetching, isFetchedAfterMount } = useQuery(['conv'], () => apiDate(to, from, date));
  console.log("date is " + date)
  isSuccess && console.log(data);
  
  console.log("isFetched is " + isFetchedAfterMount)
  return (
    <div className='container flex flex-col items-center mt-28 px-4 mb-96'>
        <h1 className='text-black font-bold text-3xl'>Currency Rates in Specific Date</h1>

        {/* Main White Card Start*/}
        <div className="bg-white container flex flex-col mt-10 rounded-[10px] px-6 py-6 shadow-lg md:py-12 md:px-10">
          {/* ConvertationBlock Start */}
          <div className="flex flex-col md:flex-row container gap-6">
            {/* Amount Component */}
            <CalendarComp setDate={setDate}/>
            {/* FromTo Component */}
            <FromTo setFrom={setFrom} setTo={setTo} from={from} to={to} />   
          </div>
          {/* ConvertationBlock End */}
          <div className={`flex flex-col md:flex-row ${(isLoading || isSuccess) ? 'justify-between' : 'justify-end'} mt-8 `}>
            
            {/* Convertation Button End*/}
          </div>
        </div>    
        {/* Main White Card End*/} 
    </div>
  )

}

export default Date