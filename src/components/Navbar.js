import React, {useState} from 'react'
import {
    FaBars,
    FaTimes,
    FaInstagramSquare,
    FaTwitterSquare,
    FaCameraRetro,
 } from 'react-icons/fa';
  import { HiOutlineMail } from 'react-icons/hi';
  import { BsFillPersonLinesFill } from 'react-icons/bs';
  import {
      SiSpotlight
  } from 'react-icons/si';
import { Link } from 'react-scroll';
import Logo from '../assests/logo_transparent_background.png';


export const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
  return (
    <div className='w-full h-[80px] flex justify-between items-center  px-4 bg-gray-300 text-black'>
    <div>
    <img src={Logo} alt='Logo Image' style={{ width: '35px' }} />
    </div>

     {/* menu */}
     <ul className='hidden md:flex'>
     <li>
       <Link to='home' smooth={true} duration={500}>
         Home
       </Link>
     </li>
     <li>
       <Link to='about' smooth={true} duration={500}>
         About
       </Link>
     </li>
     <li>
       <Link to='work' smooth={true} duration={500}>
         Work
       </Link>
     </li>
     <li>
       <Link to='contact' smooth={true} duration={500}>
         Contact
       </Link>
     </li>
   </ul>

       {/* Hamburger */}
       <div onClick={handleClick} className='md:hidden z-10'>
       {!nav ? <FaBars /> : <FaTimes />}
     </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top- left-0 w-full h-screen bg-gray-300 flex flex-col justify-center items-center'
        }
      >
        <li className='py-1 text-4xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>


        <li className='py-1 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>



        <li className='py-1 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>



        <li className='py-1 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
          {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
      <ul>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500'>
          <a
            className='flex justify-between items-center w-full text-gray-300'
            href='https://www.instagram.com/sophiedouglas761/?hl=en'
          >
          *Instagram <FaInstagramSquare size={30} />
          </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://twitter.com/sophie_douglas1'
            > *Twitter <FaTwitterSquare size={30} /> </a>
            </li>
            
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
              <a
                className='flex justify-between items-center w-full text-gray-300'
                href='https://mediaviewer.spotlight.com/artist/showreels?artistRef=F267214'
              > *Showreel <FaCameraRetro size={30} />
              </a>
              </li>
              <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                <a
                  className='flex justify-between items-center w-full text-gray-300'
                  href='mailto: sophiedouglasperformer@gmail.com'
                >
                  *Email <HiOutlineMail size={30} />
                </a>
              </li>
              <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500'>
              <a
                className='flex justify-between items-center w-full text-gray-300'
                href='https://www.spotlight.com/9177-8970-3480'
              >
              *Spotlight <SiSpotlight size={30} />
              </a>
              </li>
         
            </ul>
          </div>
</div>
    
  );
};

export default Navbar;