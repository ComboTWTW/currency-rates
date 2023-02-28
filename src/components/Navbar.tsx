import logo from '../assets/logo.svg'
import { links } from '../constants/index'
import { HamburgerBoring } from 'react-animated-burgers'
import { useState } from 'react'

const Navbar = () => {

  const [toggle, setToggle] = useState<boolean>(false);

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
              <li className='text-white py-1 px-4 text-lg rounded-[10px] hover:bg-white hover:bg-opacity-30 hover:py-1 hover:px-4 hover:cursor-pointer duration-200'>{link.tittle}</li>
            ))}
          </ul>
        {/* NavbarLinks for Mobile */}
        <HamburgerBoring barColor='white' className=" md:hidden" buttonWidth={28} isActive={toggle}  toggleButton={() => setToggle(!toggle)}/>  
        </div>
    </nav>
    {toggle && (
      <div className={`bg-navbarMobile absolute ${toggle ? 'top-[90px]' : 'top-[-100px]'} py-10  left-0 right-0 mx-3 md:hidden flex flex-col items-center gap-10 rounded-[10px]`}>
        {links.map((link) => (
          <li className='text-white list-none font-semibold text-xl cursor-pointer tracking-wider'>{link.tittle}</li>
        ))}
      </div>
    )}
    </div>
  )
}

export default Navbar