import React from 'react'
import Photo from '../assests/image_6483441 (1).JPG';

export const Aboutme = () => {
  return (
   
    <div name='about' className='w-full h-screen bg-gray-300 padding-top-5px'>
    <div className='flex flex-col justify-center items-center w-full h-full'>
    <div className='max-w-[1000px] w-full grid grid-flex gap-8'>
    <div className='pb-8 pl-4 pr-4'>

    <p className='text-4xl font-bold inline border-b-4 text-black border-blue-500'>
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
  <span class="margin-5px-5px text-wrap pt-4">
  <img class="rounded-md" src={Photo} alt='Work' style={{ width: '175px' }}/>
  <p>
  Sophie hails from Edinburgh where she completed her BA Hons Degree in Musical Theatre at The MGA Academy Of Performing Arts. Sophie always knew that she was meant to be onstage, even from the tender age of 2 where she first performed at a nursery group and belted out "Never fully dressed without a smile" from Annie! When not performing, Sophie has taught at a number of stage schools such as: House of Jack Studios; Stagecoach; Simon Says Dance; Razzamatazz; most recently she was the Junior School Coordinator at MGA, as she loves working with kids and passing on all of her knowledge to the next generation of superstars. 
  </p>
<p class='font-bold inline border-b-4 border-blue-500'>// MURDOCH ARTISTS:</p>
<p>Tel - 07789486093</p>
<p>Email - stuart@murdochartists.com</p>
  </span>

  </div>
  </div>
   
  </div>
</div>
</div>


  );
};



export default Aboutme;