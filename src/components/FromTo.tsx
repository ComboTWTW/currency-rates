import { Fragment } from 'react'
import { styles, options } from '../constants/index'
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

  let oldFrom = "AFN - Afghan Afghani";
  let oldTo = "AFN - Afghan Afghani";

  const handleChange = () => {

  }

  const compareClick = () => {
    let oldFrom = from;
    let oldTo = to;
    setFrom(oldTo);
    setTo(oldFrom);

  }

  const selectStyles = {

    control: (baseStyles:any, state:any) => ({
      ...baseStyles,
      backgroundColor: "white",
      borderRadius: "10px",
      outline: "none",
      textOverflow: "ellipsis",
      padding: "0.35rem",
      border: "#ddd 1px solid",
      ':hover': {
        border: "#ddd 1px solid",
      },
    }),
    menu: (baseStyles:any, state:any) => ({
      ...baseStyles,
      borderRadius: "10px",
    }),
    option: (baseStyles:any, state:any) => ({
      ...baseStyles,
      fontSize: '0.925rem',
      ':hover': {
        backgroundColor: 'light-gray',
      }
    }),
    valueContainer: (baseStyles:any, state:any) => ({
      ...baseStyles,
      paddingRight: 0,
    }),
    
  }

  return <Fragment>
    
    {/* From Start */}
    <div className="flex  flex-col gap-2 mt-2 md:mt-0 md:min-w-0 md:flex-1">
      <h2 className={`${styles.cardBold}`}>From</h2>
      <Select
        className='shadow-md rounded-[10px]'
        styles={selectStyles}
        classNamePrefix="select"
        defaultValue={options[0]}
        isClearable={true}
        isSearchable={true}
        name="from"
        options={options}
        placeholder={"Type to search..."}
      />
    </div>  
    {/* From End */}    

    {/* Compare Button Start */}  
    <div className={`${styles.compareButton} md:mt-8 md:mb-0`} onClick={compareClick}>
      <img src={compare} alt="compare_arrows_picture" className='w-[20px] h-[20px] rotate-90 md:rotate-0'/>
    </div>
    {/* Compare Button End */} 
    {/* Test */}
    {/* To Start */}
    <div className="flex flex-col gap-2 md:min-w-0 md:flex-1">     
      <h2 className={`${styles.cardBold}`}>To</h2>
      <Select
        className='shadow-md rounded-[10px]'
        styles={selectStyles}
        classNamePrefix="select"
        defaultValue={options[0]}
        isClearable={true}
        isSearchable={true}
        name="to"
        options={options}
      />
    </div>
    {/* To End */}   

  </Fragment>
}

export default FromTo