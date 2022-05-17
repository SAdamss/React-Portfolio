import React from 'react'

export const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-gray-300 flex justify-center items-center p-100'>
    <form method='POST' action="mailto:sophiedouglasperformer@gmail.com" className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
            <p className='text-3xl font-bold inline border-b-4 border-blue-500 text-black'>Contact</p>
            <p className='text-black py-4'>// Submit enquiry below</p>
        </div>
        <input className='bg-white' type="text" placeholder='Name' name='name' />
        <input className='my-4 p-2 bg-white' type="email" placeholder='Email' name='email' />
        <textarea className='bg-white p-2' name="message" rows="10" placeholder='Message'></textarea>
        <button className='text-black border-2 hover:bg-blue-500 hover:border-blue-500 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
    </form>
</div>
  )
}


export default Contact;