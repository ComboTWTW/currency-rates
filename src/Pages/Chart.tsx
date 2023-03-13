import FromTo from '../components/FromTo';
import { useState } from 'react';
import { apiConvert } from '../api/api';
import { useQuery } from 'react-query'
import CircularProgress from '@mui/material/CircularProgress';
import CalendarComp from '../components/CalendarComp';

const Chart = () => {
  const [date, setDate] = useState<object>({
    dateFrom: '',
    dateTo: '',
  });
  const [from, setFrom] = useState<string>('USD');
  const [to, setTo] = useState<string>('EUR');

  type statDataType = {
    fromStat: string,
    toStat: string,
    dateStat: object,
  }

  const [statData, setStatData] = useState<statDataType>({
    fromStat: '',
    toStat: '',
    dateStat: date,
  })

  /* const { isLoading, isSuccess, data, refetch, isRefetching, isFetchedAfterMount } = useQuery(['conv'], () => apiConvert(to, from, amount));
  isSuccess && console.log(data); */
  
  return (
    <div className='container flex flex-col items-center mt-28 px-4 mb-96'>
        <h1 className='text-black font-bold text-3xl'>Currency Chart by Dates</h1>

        {/* Main White Card Start*/}
        <div className="bg-white container flex flex-col mt-10 rounded-[10px] px-6 py-6 shadow-lg md:py-12 md:px-10">
          {/* ConvertationBlock Start */}
          <div className="flex flex-col md:flex-row container gap-6">
            <CalendarComp />
            {/* FromTo Component */}
            <FromTo setFrom={setFrom} setTo={setTo} from={from} to={to} />   
          </div>
          {/* ConvertationBlock End */}

            {/* Convertation Button Start*/}
          <button className='bg-covertBG shadow-md mt-[50px] md:mt-8 tracking-wide self-end w-full md:w-32  py-3 rounded-[10px] text-white font-bold hover:opacity-70 hover:duration-300 ' onClick={() => {
            setStatData({dateStat: date, fromStat: from, toStat: to})
            /* refetch() */
            }}>Convert</button>
            {/* Convertation Button End*/}
          </div>
        </div>    
  )
}

export default Chart