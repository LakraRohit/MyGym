import React from 'react';
import { FaTwitter } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Logo from '../Images/JymLogo.png';
import reg from '../Images/reg2.jpg';



const RegistrationPage = () => {
  return (
    <div className="h-screen bg-cover bg-center rounded-2xl" style={{ backgroundImage: `url(${reg})` }}>
        

              {/* Navigation Bar */}
              <div className='z-10 w-full h-12  md:h-20 bg-black/40 backdrop-blur-sm flex flex-row justify-between items-center shadow-2xl fixed top-0 left-0'>
          <div className='flex items-center text-white ml-4'>
            <img className='w-16 md:w-20' src={Logo} alt="" />
            <div className='font-semibold text-lg md:text-2xl'>cult.fit</div>
          </div>
          <ul className='flex gap-4 md:gap-10 text-sm md:text-xl text-white font-semibold mr-4'>
            <li className='hover:cursor-pointer hover:scale-105 hover:text-red-600'>Home</li>
            {/* <li className='hover:cursor-pointer hover:scale-105 hover:text-red-600'>About Us</li>
            <li className='hover:cursor-pointer hover:scale-105 hover:text-red-600'>Programs</li>
            <li className='hover:cursor-pointer hover:scale-105 hover:text-red-600'>Trainer</li>
            <li className='hover:cursor-pointer hover:scale-105 hover:text-red-600'>Pricing</li> */}
          </ul>
          <div className='mr-4 md:mr-6 w-16 md:w-20 h-8 md:h-10 hover:bg-red-500 hover:scale-105 bg-red-600 flex justify-center items-center rounded-lg hover:cursor-pointer shadow-2xl'>
            <button className='text-white text-sm md:text-xl font-semibold'>Log In</button>
          </div>
        </div>




        <div className='w-full h-screen bg-white opacity-80  flex justify-center items-center' >



            <div className=' md:w-1/2 w-full h-screen flex justify-center items-center' >



                <div className=' md:w-11/12 w-full h-5/6  md:mt-12 flex flex-col bg-white rounded-3xl justify-center items-center'>
                    
                <div className='h-10 mb-10  text-3xl md:text-4xl  text-black font-semibold'
                // style={{ fontFamily: "Bungee Shade" }}
                >
                    One Last Step !
                 </div>
                  
                    <div className='w-11/12'>
                        <textarea className=' mb-8 w-full h-10  content-center pl-2 border-0 border-b border-black bg-white/10' 
                        placeholder='Name..' name="" id=""></textarea>
                    </div>
                    <div className='w-11/12'>
                        <textarea className=' mb-8 w-full h-10  content-center pl-2 border-0 border-b border-black bg-white/10' 
                        placeholder='E-maii Id..' name="" id=""></textarea>
                    </div>
                    <div className='w-11/12'>
                        <textarea className=' mb-8 w-full h-10  content-center pl-2 border-0 border-b border-black bg-white/10' 
                        placeholder='Mobile no..' name="" id=""></textarea>
                    </div>

                    <button className='text-white w-24 h-10 bg-blue-600 rounded-lg hover:bg-blue-500 hover:scale-105'> Sign In</button>

                    <div className='text-2xl font-semibold-bold text-black mt-3'>or</div>

                    <button className='mt-3 text-white w-44 h-10 bg-blue-600 rounded-lg hover:bg-blue-500 hover:scale-105 flex items-center justify-center space-x-2'>
                         Sign In <span className='ml-3 text-lg'><FcGoogle /></span> </button>
                    <button className='mt-3 text-white w-44 h-10 bg-blue-600 rounded-lg hover:bg-blue-500 hover:scale-105 flex items-center justify-center space-x-2'>
                         Sign In <span className='ml-3 text-lg'><FaTwitter /></span> </button>
                    

                </div>

            </div>

        </div>


        








    </div>
  )
}

export default RegistrationPage
