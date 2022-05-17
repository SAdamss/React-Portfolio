import React from 'react'
import WorkImg from '../assests/PHOTO-2022-04-27-09-37-48.jpg';
import WorkImg1 from '../assests/a606ff39-d110-42ac-8cbe-921b8db93ca1.JPG';
import WorkImg2 from '../assests/9bcdc3fb-0cbe-4790-ad40-c04f6cc26427.JPG';
import WorkImg3 from '../assests/2ca46c10-31af-404d-93ee-c00ab65bac92.JPG';
import WorkImg4 from '../assests/6164225e-8c31-409d-8b9a-b12bd74abb7c.JPG';import WorkImg5 from '../assests/1c96538c-9839-49dc-ac27-e88baf540203.JPG';
import WorkImg6 from '../assests/b67dddef-cf6c-4b4d-8254-a57a8e435e7b.JPG';


const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-black bg-gray-300'>
      <div className='max-w-[1000px] mx-auto px-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-3xl font-bold inline border-b-4 text-black border-blue-500'>
            Work
          </p>
        
        </div>

{/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-1 overflow-auto'>

            {/* Grid Item */}
          <div class="w-full rounded"
            style={{ backgroundImage: `url(${WorkImg})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-black tracking-wider pl-4'>
                We Came To Dance
              </span>
              <div className='pt-8 text-center'>
                <a href='https://www.sbn.scot/blog/sbn-newscast-edinburgh-fringe-special-we-came-to-dance'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Description
                  </button>
                </a>
                <a href='https://foodtank.com/wecametodance/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Articles
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${WorkImg1})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-black tracking-wider pl-4'>
               We Came To Dance: Leading a breathing exercise
              </span>
              <div className='pt-8 text-center'>
                <a href='https://www.facebook.com/WCTDLive/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Description
                  </button>
                </a>
                <a href='https://www.theskinny.co.uk/festivals/edinburgh-fringe/theatre/we-came-to-dance-nicolson-square'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Articles
                  </button>
                </a>
              </div>
            </div>
          </div>
            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${WorkImg2})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          > 
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-black tracking-wider pl-4'>We Came To Dance: Playing a Scientist
               
              </span>
              <div className='pt-8 text-center'>
                <a href='https://www.facebook.com/watch/?v=648124639923846'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Description
                  </button>
                </a>
                <a href='https://edinburghguide.com/festival/2021/wecametodance-nicholson-square-review-20522'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Articles
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${WorkImg3})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-black tracking-wider pl-4'>
                PhotoShoot as "Emichu"
              </span>
              <div className='pt-8 text-center'>
            
                <a href='https://wecametodance.mystrikingly.com/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Articles
                  </button>
                </a>
              </div>
            </div>
          </div>
            {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${WorkImg4})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-black tracking-wider pl-4'>
              "Emichu", "Jesiva" & "Ungayu"
              </span>
              <div className='pt-8 text-center'>
                <a href='https://www.youtube.com/watch?v=G98mZZysFOk'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Description
                  </button>
                </a>
              
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${WorkImg5})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-black tracking-wider pl-4'>
               "Mrs Mushnik" in Little Shop of Horrors.
              </span>
              <div className='pt-8 text-center'>
                <a href='https://www.themgaacademy.com/little-shop-of-horrors/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                   Description
                  </button>
                </a>
                <a href='https://theedinburghreporter.co.uk/2019/06/review-little-shop-of-horrors-at-leith-theatre-last-night-tonight/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Articles
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;