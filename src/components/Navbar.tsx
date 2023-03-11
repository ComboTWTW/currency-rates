import logo from '../assets/logo.svg'
import { links } from '../constants/index'
import { HamburgerBoring } from 'react-animated-burgers'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { styles } from '../constants/index'


const Navbar = () => {

  const [toggle, setToggle] = useState<boolean>(false);
  console.log(toggle);

  return (

    <nav className="bg-navbarBG fixed top-0 z-20 w-full flex flex-col items-center md:flex-row md:justify-center">
        <div className="bg-navbarBG relative z-10 container flex flex-row justify-between items-center px-4 py-4 md:mx-3">
          {/* Logo Start */}
          <div className="flex flex-row gap-4 items-center">
            <a href="#"><img src={logo} alt="logo" className='w-[40px] h-[40px]'/></a>
            <h2 className='font-semibold text-xl text-white'>CurrencyRates</h2>
          </div>
          {/* Logo End */}

          {/* NavabrLinks for Desktop Start*/}
          <ul className='md:flex md:flex-row md:gap-16 hidden'>
            {links.map((link, key) => (
              <NavLink reloadDocument to={`${link.id}`}><li key={link.id} className='text-white py-1 px-4 text-lg rounded-[10px] hover:bg-white hover:bg-opacity-30 hover:py-1 hover:px-4 hover:cursor-pointer duration-200'>{link.tittle}</li></NavLink>
            ))}
          </ul>
          {/* NavabrLinks for Desktop End*/}

          {/* Burger Start*/}
          <HamburgerBoring barColor='white' className=" md:hidden" buttonWidth={28} isActive={toggle}  toggleButton={() => setToggle(!toggle)}/>  
          {/* Burger End*/}

        </div>

        {/* NavbarLinks Start*/}        
        {toggle ? (
          <div className={`${styles.navbar} container translate-y-[90px]`}>
            {links.map((link, key) => (
              <NavLink reloadDocument to={`${link.id}`}><li key={link.id} onClick={() => setToggle(false)} className='text-white list-none font-semibold text-xl cursor-pointer tracking-wider'>{link.tittle}</li></NavLink>
            ))}
          </div>
        ) : 
          <div className={`${styles.navbar} container -translate-y-[200px] `}>
            {links.map((link, key) => (
              <li key={link.id} className='text-white list-none font-semibold text-xl cursor-pointer tracking-wider'><NavLink to={`${link.id}`}>{link.tittle}</NavLink></li>
            ))}
          </div>
        }
        {/* NavbarLinks End */}
    </nav>

  )
}

export default Navbar