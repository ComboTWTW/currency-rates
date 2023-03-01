import logo from '../assets/logo.svg'
import { links } from '../constants/index'
import { HamburgerBoring } from 'react-animated-burgers'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { navbar } from '../constants/index'


const Navbar = () => {

  const [toggle, setToggle] = useState<boolean>(false);
  console.log(toggle);

  return (
    <div className="">
    <nav className="fixed top-0 z-10 w-full bg-navbarBG flex flex-row justify-center">
        {/* Logo */}
        <div className="relative container flex flex-row justify-between items-center px-4 py-4 md:mx-3">
          <div className="flex flex-row gap-4 items-center">
            <a href="#"><img src={logo} alt="logo" className='w-[40px] h-[40px]'/></a>
            <h2 className='font-semibold text-xl text-white'>CurrencyRates</h2>
          </div>
        {/* NavabrLinks for Desktop */}
          <ul className='md:flex md:flex-row md:gap-16 hidden'>
            {links.map((link) => (
              <li className='text-white py-1 px-4 text-lg rounded-[10px] hover:bg-white hover:bg-opacity-30 hover:py-1 hover:px-4 hover:cursor-pointer duration-200'><NavLink to={`${link.id}`}>{link.tittle}</NavLink></li>
            ))}
          </ul>
        {/* NavbarLinks for Mobile */}
        <HamburgerBoring barColor='white' className=" md:hidden" buttonWidth={28} isActive={toggle}  toggleButton={() => setToggle(!toggle)}/>  
        </div>
    </nav>
    {toggle ? (
      <div className={`${navbar} translate-y-[90px] md:hidden`}>
        {links.map((link) => (
          <li onClick={() => setToggle(false)} className='text-white list-none font-semibold text-xl cursor-pointer tracking-wider'><NavLink to={`${link.id}`}>{link.tittle}</NavLink></li>
        ))}
      </div>
    ) : 
      <div className={`${navbar} -translate-y-[200px] md:hidden`}>
        {links.map((link) => (
          <li className='text-white list-none font-semibold text-xl cursor-pointer tracking-wider'><NavLink to={`${link.id}`}>{link.tittle}</NavLink></li>
        ))}
      </div>
  }
    </div>
  )
}

export default Navbar