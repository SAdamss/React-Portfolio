import { Container } from 'postcss';
import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import Review from '../assests/1c96538c-9839-49dc-ac27-e88baf540203.JPG'
import {
  SiSpotlight
} from 'react-icons/si';
import {

  FaInstagramSquare,
  FaTwitterSquare,
  FaCameraRetro,
} from 'react-icons/fa';
import { Link } from 'react-scroll/modules';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <h2 className='text-blue-500'>Hi, my name is</h2>
        <h1 className='text-4xl sm:text-7xl font-bold text-black'>
          Sophie Douglas
        </h1>
        <h2 className='text-4xl sm:text-3xl font-bold text-black'>
          I'm an MGA Academy of Performing Arts graduate: Musical Theatre BA (Hons)
        </h2>
     
        <div class="w-full rounded"
        className='group container rounded-md flex justify-center items-center mx-auto'
      >
      <img class="rounded-full brightness-50" src={Review} alt='Work' style={{ width: '20px margin-5' }}/>
      <p>
      "Mushnik traditionally a male role is played by the sublime Sophie Douglas who sells every comedy moment and displays a shrewd sense of comedy timing" - <a class='bg-blue-500' href='https://scotsgayarts.com/' >(Scotsgayarts) </a>
      </p>

      </div>

       
        
      


        {/* Mobile menu */}
        <div
        className={
          
          '@media screen and (max-width:600px) display:block bg-gray-300 md:flex justify-center items-center'
        }
      >
      <span class='inline-gird grid-cols-2 gap-4'>
      
      <a href='https://www.spotlight.com/9177-8970-3480' className='Spotlight'>
      <SiSpotlight size={30} />
      </a>
     
       <a href='https://www.instagram.com/sophiedouglas761/?hl=en' className="Instagram">
       <FaInstagramSquare size={30} />
       </a>
      
       <a href='https://twitter.com/sophie_douglas1' className='Twitter'>
      <FaTwitterSquare size={30} />
      </a>
     
      <a href='https://mediaviewer.spotlight.com/artist/showreels?artistRef=F267214' className='Showreel'>
      <FaCameraRetro size={30} />
      </a>

      </span>
      </div>
      

        <div>
          <button className='text-black group border-2 px-6 py-3 my-2 flex items-center hover:bg-blue-500 hover:border-blue-500'>
            View More
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;