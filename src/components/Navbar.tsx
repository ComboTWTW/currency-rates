import logo from '../assets/logo.svg'
import { links } from '../constants/index'

const Navbar = () => {
  return (
    <div className=" bg-navbarBG flex flex-row justify-center">
        <div className="container flex flex-row justify-between items-center py-3 mx-3">
          <div className="flex flex-row gap-4 items-center">
            <a href="#"><img src={logo} alt="logo" className='w-[40px] h-[40px]'/></a>
            <h2 className='font-semibold text-xl text-white'>CurrencyRates</h2>
          </div>

          <ul className='md:flex md:flex-row md:gap-16 hidden'>
            {links.map((link) => (
              <li className='text-white py-1 px-4 text-lg rounded-[10px] hover:bg-white hover:bg-opacity-30 hover:py-1 hover:px-4 hover:cursor-pointer duration-200'>{link.tittle}</li>
            ))}
          </ul>
        </div>
    </div>
  )
}

export default Navbar