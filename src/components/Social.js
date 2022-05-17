import React from 'react'
import {
  SiSpotlight
} from 'react-icons/si';
import {

  FaInstagramSquare,
  FaTwitterSquare,
  FaCameraRetro,
} from 'react-icons/fa';

export const Social = () => {
  return (
    <div name='social' className='w-full md:h-screen text-black bg-gray-300'>
      <div className='max-w-[1000px] mx-auto px-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-3xl font-bold inline border-b-4 text-black border-blue-500'>
            Social
          </p>

          <div class='@media only screen and (max-width: 767px) {
            .responsive.html_header_top #header_main .social_bookmarks {
            right: -30%;
            width: auto;
            margin-top: 5%;
            }}
            @media only screen and (max-width: 767px) {
            .responsive.html_header_top #header_main .social_bookmarks {
            right: -10%; }} bg-gray-300'>
          <ul className='hidden md:flex'>
          <a href='https://www.spotlight.com/9177-8970-3480' className='Spotlight'>
          <SiSpotlight size={45} />
          </a>
           <a href='https://www.instagram.com/sophiedouglas761/?hl=en' className="Instagram">
           <FaInstagramSquare size={45} />
           </a>
           <a href='https://twitter.com/sophie_douglas1' className='Twitter'>
          <FaTwitterSquare size={45} />
          </a>
          <a href='https://mediaviewer.spotlight.com/artist/showreels?artistRef=F267214' className='Showreel'>
          <FaCameraRetro size={45} />
          </a>
          
          </ul>
           
           </div>
        
        </div>
    </div>
    </div>
  );
};

export default Social; 