import { Fragment } from 'react'
import { styles, options, selectStyles } from '../constants/index'
import compare from '../assets/compare.jpg'
import React from 'react'
import Select from 'react-select'

interface Prop {
  setFrom: any;
  setTo: any;
  from: string;
  to: string;
}


const FromTo = ({ setFrom, setTo, from, to }:Prop) => {

  const handleChangeFrom = (data:any) => {
    setFrom(data.value)
  }

  const handleChangeTo = (data:any) => {
    setTo(data.value)
  }

  const compareClick = () => {
    let oldFrom = from;
    let oldTo = to;
    setFrom(oldTo);
    setTo(oldFrom);
  }

  return <Fragment>
    
    {/* From Start */}
    <div className="flex  flex-col gap-2 mt-2 md:mt-0 md:min-w-0 md:flex-1">
      <h2 className={`${styles.cardBold}`}>From</h2>
      <Select
        className='shadow-md rounded-[10px]'
        styles={selectStyles}
        classNamePrefix="select"
        defaultValue={options.filter(function(option) {
          return option.value === 'USD';
        })}
        value={options.filter(function(option) {
          return option.value === from;
        })}
        isClearable={true}
        isSearchable={true}
        name="from"
        options={options}
        placeholder={"Type to search..."}
        onChange={handleChangeFrom}
      />
    </div>  
    {/* From End */}    

    {/* Compare Button Start */}  
    <div className={`${styles.compareButton} md:mt-9 md:mb-0`} onClick={compareClick}>
      <img src={compare} alt="compare_arrows_picture" className='w-[20px] h-[20px] rotate-90 md:rotate-0'/>
    </div>
    {/* Compare Button End */} 
    
    {/* To Start */}
    <div className="flex flex-col gap-2 md:min-w-0 md:flex-1">     
      <h2 className={`${styles.cardBold}`}>To</h2>
      <Select
        className='shadow-md rounded-[10px]'
        styles={selectStyles}
        classNamePrefix="select"
        value={options.filter(function(option) {
          return option.value === to;
        })}
        defaultValue={options.filter(function(option) {
          return option.value === 'EUR';
        })}
        isClearable={true}
        isSearchable={true}
        name="to"
        options={options}
        onChange={handleChangeTo}
      />
    </div>
    {/* To End */}   

  </Fragment>
}

export default FromTo