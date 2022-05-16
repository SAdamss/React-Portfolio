import React from 'react'
import Photo from '../assests/image_6483441 (1).JPG';

export const Aboutme = () => {
  return (
   
    <div name='about' className='w-full h-screen bg-gray-300 padding-top-10px'>
    <div className='flex flex-col justify-center items-center w-full h-full'>
    <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
    <div className='sm:text-right pb-8 pl-4'>

    <p className='text-3xl font-bold inline border-b-4 border-blue-500'> 
    About
    </p>
    <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
    <div className='sm:text-align text-4xl font-bold'>
    
    </div>
    </div>

    <div></div>

    <div class="w-full rounded"
    className='group container rounded-md flex justify-center items-center mx-auto'
  >
  <img class="rounded-md" src={Photo} alt='Work' style={{ width: '250px' }}/>
  <p>
  Sophie hails from Edinburgh where she completed her BA Hons Degree in Musical Theatre at The MGA Academy Of Performing Arts. Sophie always knew that she was meant to be onstage, even from the tender age of 2 where she first performed at a nursery group and belted out "Never fully dressed without a smile" from Annie! When not performing, Sophie has taught at a number of stage schools such as: House of Jack Studios; Stagecoach; Simon Says Dance; Razzamatazz; most recently she was the Junior School Coordinator at MGA, as she loves working with kids and passing on all of her knowledge to the next generation of superstars. 
  //
MURDOCH ARTIST Tel: 07789486093 Email: stuart@murdochartists.com More information can be found below or at my spotlight link which will also be found on the pop-out tabs.
  </p>

  </div>
  </div>
   
  </div>
</div>
</div>


  );
};



export default Aboutme;