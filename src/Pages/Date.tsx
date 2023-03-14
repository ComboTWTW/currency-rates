import FromTo from '../components/FromTo';
import { useState } from 'react';
import { apiDate } from '../api/api';
import { useQuery } from 'react-query'
import CircularProgress from '@mui/material/CircularProgress';
import CalendarComp from '../components/CalendarComp';
import dayjs from 'dayjs';

const Date = () => {
  
  const [from, setFrom] = useState<string>('USD');
  const [to, setTo] = useState<string>('EUR');
  const [date, setDate] = useState(dayjs().subtract(1, 'day'));

  const [statData, setStatData] = useState({
    fromStat: '',
    toStat: '',
    dateStat: '',
  })

  const { 
    isLoading, 
    isSuccess, 
    data, 
    refetch, 
    isRefetching, 
    isFetchedAfterMount 
  } = useQuery(['conv'], () => apiDate(to, from, date.format("YYYY-MM-DD")));
  
  return (
    <div className='container flex flex-col items-center mt-28 px-4 mb-96'>
        <h1 className='text-black text-center font-bold text-3xl'>Currency Rates on Specific Date</h1>

        {/* Main White Card Start*/}
        <div className="bg-white container flex flex-col mt-10 rounded-[10px] px-6 py-6 shadow-lg md:py-12 md:px-10">
          {/* ConvertationBlock Start */}
          <div className="flex flex-col md:flex-row container gap-6">
            {/* Calendar Component */}
            <CalendarComp setDate={setDate} from={from} to={to}/>
            {/* FromTo Component */}
            <FromTo setFrom={setFrom} setTo={setTo} from={from} to={to} />   
          </div>
          {/* ConvertationBlock End */}
          {/* Result Block Start */}
          <div className={`flex flex-col md:flex-row ${(isLoading || isSuccess) ? 'justify-between' : 'justify-end'} mt-8 `}>
            {
              isLoading || isRefetching  ? /* If API is Loading */
              <div className={`justify-self-start} ${isRefetching && 'pb-[3.16rem] md:pb-[1.4rem]'}`}> 
                <CircularProgress/>
              </div> :
              (isSuccess && !isRefetching) && /* If API has been loaded */
              <div className={`flex flex-col w-full gap-3 justify-self-start md:w-[40%] ${!isFetchedAfterMount && '-z-10 h-0'}`}>
                <h3 className='font-normal text-gray-700'>On {statData.dateStat} :</h3>
                <div className="flex flex-col items-start md:flex-row md:items-center gap-2 md:gap-2">
                  <h2 className='font-bold text-black text-2xl justify-self-end shrink-0'>1 {statData.fromStat} = </h2>
                  <h2 className='font-bold text-black text-2xl justify-self-end shrink-0'>{data.rates[`${statData.toStat}`]} {statData.toStat}</h2>
                </div>
              </div>
            }
          {/* Result Block End */}

          {/* Convertation Button Start*/}
          <button disabled={isLoading ? true : false} className='bg-covertBG shadow-md mt-6 md:mt-0 tracking-wide md:justify-self-end w-full items-end md:w-32 self-end md:self-start py-3 rounded-[10px] text-white font-bold hover:opacity-70 hover:duration-300 ' onClick={() => {
            setStatData({dateStat: date.format('DD/MM/YYYY'), fromStat: from, toStat: to});
            refetch();
            }}>Convert</button>
          {/* Convertation Button End*/}
          </div>
        </div>    
        {/* Main White Card End*/} 
    </div>
  )
}


export default Date