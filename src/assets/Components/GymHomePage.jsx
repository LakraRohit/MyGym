import React, { useState } from 'react';
import { FaApple, FaArrowCircleLeft, FaArrowCircleRight, FaFacebook, FaInstagram, FaLongArrowAltRight, FaPause, FaPlay, FaRegCheckCircle, FaTwitter } from "react-icons/fa";
import { FaImage, FaVideo } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
import { IoLogoAndroid } from "react-icons/io";
import { TiThMenu } from "react-icons/ti";
import { TypeAnimation } from 'react-type-animation';
import Logo from '../Images/JymLogo.png';
import Background from '../Images/homeBg1.jpg';
import MyPrograms from './MyPrograms';
import RegistrationPage from './RegistrationPage';
import Trainers from './Trainers';




const GymHomePage = () => {

    const [isPlaying, setIsPlaying] = useState(false);
    const [isVideo, setIsPhoto] = useState(false)

    const handleToggle = () => {
        setIsPlaying(!isPlaying);
    }

    const handleImageVideo = () => {
        setIsPhoto(!isVideo)
    }
    



      const [currentIndex, setCurrentIndex] = useState(0);
      const totalItems = 6; // The number of items/images
    
      const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
        
      };
    
      const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
        console.log(totalItems)
      };

      // Triner arrow 
      const [currentTrainerIndex, setCurrentTrainerIndex] = useState(0);

      // const arrowPrev = () => {
      //   setCurrentTrainerIndex((prevIndex) =>
      //     prevIndex === 0 ? data.length - 1 : prevIndex - 1
      //   );
      // };
    
      // const arrowNext = () => {
      //   setCurrentTrainerIndex((prevIndex) =>
      //     prevIndex === data.length - 1 ? 0 : prevIndex + 1
      //   );
      // };


      const [menuOpen, setMenuOpen] = useState(false);
      const [registrationOpen, setRegistrationOpen] = useState(false);

      const toggleMenu = () => {
        setMenuOpen(!menuOpen);
      };

      const toggleRegistration = () => {
        setRegistrationOpen(!registrationOpen);
      };
 





  return (
    <div className='overflow-auto flex flex-col items-center'>

      {/* Background Section */}

      <div id='home' className='w-full h-screen bg-cover bg-center shadow-2xl' style={{ backgroundImage: `url(${Background})` }}>
        
        {/* Navigation Bar */}
        <div className='z-10 w-full h-12  md:h-20 bg-black/40 backdrop-blur-sm flex flex-row justify-between items-center shadow-2xl fixed top-0 left-0'>
          <div className='flex items-center text-white ml-4'>
            <img className='w-16 md:w-20' src={Logo} alt="" />
            <div className='font-semibold text-lg md:text-2xl'>cult.fit</div>
          </div>
          <ul className='hidden md:flex gap-4 md:gap-10 text-sm md:text-xl text-white font-semibold mr-4'>
            <li className='hover:cursor-pointer hover:scale-105 hover:text-red-600'> <a href='#home'>Home</a></li>
            <li className='hover:cursor-pointer hover:scale-105 hover:text-red-600'> <a href='#aboutUs'>About Us</a></li>
            <li className='hover:cursor-pointer hover:scale-105 hover:text-red-600'> <a href='#programs'>Programs</a></li>
            <li className='hover:cursor-pointer hover:scale-105 hover:text-red-600'><a href="#trainer">Trainer</a></li>
            <li className='hover:cursor-pointer hover:scale-105 hover:text-red-600'><a href='#pricing'> Pricing</a></li>
          </ul>


          <div>
                            {/* Menu for small screens */}
      <ul
        className={`fixed space-y-5 text-2xl top-0 left-0 w-3/4 h-screen bg-red-600 text-white z-50 flex flex-col items-center justify-center md:hidden transition-transform transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <li className='hover:cursor-pointer hover:scale-105 hover:text-red-300'>
          <a href='#home' onClick={toggleMenu}>Home</a>
        </li>
        <li className='hover:cursor-pointer hover:scale-105 hover:text-red-300'>
          <a href='#aboutUs' onClick={toggleMenu}>About Us</a>
        </li>
        <li className='hover:cursor-pointer hover:scale-105 hover:text-red-300'>
          <a href='#programs' onClick={toggleMenu}>Programs</a>
        </li>
        <li className='hover:cursor-pointer hover:scale-105 hover:text-red-300'>
          <a href='#trainer' onClick={toggleMenu}>Trainer</a>
        </li>
        <li className='hover:cursor-pointer hover:scale-105 hover:text-red-300'>
          <a href='#pricing' onClick={toggleMenu}>Pricing</a>
        </li>
        <li className='hover:cursor-pointer hover:scale-105 hover:text-red-300'>
          <a  onClick={toggleRegistration}>Join Us</a>
        </li>
      </ul>
        </div>






          <div className='mr-4 md:mr-6 w-16 md:w-20 h-8 md:h-10 hover:bg-red-500 hover:scale-105 bg-red-600 flex justify-center items-center rounded-lg hover:cursor-pointer shadow-2xl'>
            <div className='block md:hidden'>
            <button
                className='text-white text-sm md:text-xl font-semibold md:hidden'
                onClick={toggleMenu}>
                {menuOpen ? <ImCross /> : <TiThMenu />}
             </button>
            </div>
            <div className='hidden md:block'>
            <button className='text-white text-sm md:text-xl font-semibold' onClick={toggleRegistration}>
              Join Us</button>
            </div>
          </div>
        </div>


              {/* Conditional Rendering for Registration Page */}
      {registrationOpen && (
        <div className='  overflow-y-auto fixed top-0  left-0 w-screen h-full z-50  mt-10  bg-opacity-75 flex items-center justify-center'>
          <div className='bg-white  w-11/12 h-4/5  p-8 rounded-lg shadow-lg relative'>
            <button 
              className='absolute top-2 right-2 text-gray-600 hover:text-gray-900'
              onClick={toggleRegistration}
            >
              <ImCross size={24} />
            </button>
            <RegistrationPage />
          </div>
        </div>
      )}

        







        {/* Type Animation and Text Section */}
        <div className='w-5/6 h-[15em] md:h-96 mt-[400px] pl-3 font-bold text-3xl bg-black/60 rounded-3xl md:text-6xl  md:mt-72 ml-6 md:ml-14 text-yellow-300'
          style={{ fontFamily: "Bungee Shade" }}>
        <div style={{ height: '3em' }}>
          <TypeAnimation
            sequence={[
            'What`s Stopping you ?',
            3000,
            'What`s your Excuse..!',
            3000,
            'Break your comfort chains.',
            3000,
            'Feed the Beast inside you.',
            3000,
            'Go Limitless..!!',
            3000
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: '1.5em', md: { fontSize: '3em' }, display: 'inline-block' }}
            repeat={Infinity}
          />
        </div>

          
          <div className='text-white mt-8  font-mono text-xl md:text-3xl'>
            Sweat, sacrifice, success.<br />
            Embracing the burn, redefine your limits.<br />
            And we are here to assist you, to achieve that.
          </div>

          <div className='w-full mt-5  flex items-center justify-between '>
          <div className=' w-28 md:w-36 h-8 md:h-10 hover:bg-red-500 hover:scale-105 bg-red-600 flex justify-center items-center rounded-lg hover:cursor-pointer shadow-2xl'>
            <button className='text-white font-sans text-sm md:text-xl font-semibold'>
                Join Us Now
            </button>
          </div>
          <div className='font-mono text-lg text-yellow-300 space-x-3 flex flex-row mr-4'>
            <div onClick={handleToggle} className='flex flex-row cursor-pointer hover:scale-110'>
            {isPlaying ?<FaPlay />:<FaPause />}
            </div>
            <div onClick={handleImageVideo} className='flex flex-row cursor-pointer hover:scale-110'>
            {isVideo ?<FaImage />:<FaVideo />}
            </div>
          </div>
          </div>

        </div>
      </div>






      {/* About Us Section */}
      <div id='aboutUs' className='mt-10 md:mt-20  w-full  h-screen flex flex-col md:flex-row'>
        <div className='w-full md:w-3/5 h-1/2 md:h-full  flex justify-center items-center'>
          <div className='relative w-11/12 h-3/4 text-white overflow-hidden rounded-xl shadow-2xl flex justify-center items-center'>
            {/* Background Video */}
            <iframe
              className='absolute top-0 left-0 w-full h-full z-0'
              src="https://www.youtube.com/embed/57s23OsoYXY?si=uCdh0WpZ2jYCwpV5&autoplay=1&loop=1&playlist=57s23OsoYXY&mute=1&controls=0&showinfo=0&modestbranding=1&rel=0"
              title="YouTube video background"
              frameBorder="0"
              allow="autoplay; loop; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className='w-full  md:w-2/5 h-1/2 md:h-full flex flex-col justify-center px-4 md:px-10 items-center md:items-start'>
          <h2 className='offside-regular text-3xl md:text-5xl text-red-500 text-center md:text-left'>About Us</h2>
          <p className='text-black text-sm md:text-xl font-sans font-normal mt-5 text-center md:text-left'>
            Cult.fit is a fitness company that offers a variety of services to make fitness fun and easy.
            Founded in 2016 by Mukesh Bansal and Ankit Nagori, Cult.fit offers both online and offline fitness services.
          </p>
          <p className='mt-2 text-black text-sm md:text-xl font-sans text-center md:text-left'>
            At cult.fit, we make group workouts fun, daily food healthy & tasty, mental fitness easy with yoga & meditation, Medical & lifestyle care hassle-free.<br />
            <span className='font-semibold'>#BeBetterEveryDay</span>
          </p>
          <div onClick={() => window.open('https://support.cure.fit/support/solutions/folders/25000027595') }
            className='mt-3 w-24 md:w-32 h-8 md:h-10 hover:bg-red-500 hover:scale-105 bg-red-600 flex justify-center items-center rounded-lg hover:cursor-pointer shadow-2xl  '>
            <button className='text-white text-sm md:text-xl font-semibold shadow-2xl'>Learn More</button>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className='w-full bg-slate-900 h-auto flex flex-col md:flex-row shadow-2xl text-center md:text-left'>
        <div className='w-full md:w-3/5 px-4 md:px-20 py-10'>
          <h2 className='offside-regular text-3xl md:text-5xl text-red-600'>Why Choose us?</h2>
          <p className='mt-5 text-white text-lg md:text-2xl font-sans'>Consult with the Experts:</p>
          <p className='text-white text-sm md:text-lg mt-2'>
            We have the biggest and best collection of experts from around the world, along with an ever-growing, strong community, equipped with the finest and latest equipment.
          </p>
          <p className='mt-2 text-white text-lg md:text-2xl font-sans'>Round the clock Client Support:</p>
          <p className='text-white text-sm md:text-lg mt-2'>
            Connect with us anytime through our app and keep track of your progress. Clear your doubts and queries anytime, anywhere.
          </p>
          <p className='text-white text-xl md:text-2xl font-sans font-semibold mt-2'>#JoinTheCult</p>
        </div>
        <div className='w-full md:flex-grow h-96 md:h-auto flex justify-center items-center'>
          <iframe className='w-11/12 h-full md:w-3/4 md:h-3/4 rounded-xl shadow-2xl pb-2'
            src="https://www.youtube.com/embed/NocywQy2n5w?si=mxOJdz3QrC48v3Mm&autoplay=1&loop=1&playlist=NocywQy2n5w&mute=1&controls=0&showinfo=0&modestbranding=1&rel=0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>




      <div id='programs'></div>
      {/* Programs Section */}
      <div  className='w-full h-[550px]  flex flex-col items-center  mt-20'>
        <div className='h-10 offside-regular  text-3xl md:text-5xl text-red-600'>
            Programs
        </div>
        <div className='mt-5 pr-4 md:pr-0 w-10/12 h-5/6 bg-slate-200 rounded-2xl shadow-2xl'>
        {/* <Programs/> */}
        <MyPrograms  currentIndex= {currentIndex}/>
        </div>
          <div className='w-9/12 h-auto flex justify-between items-center'>
              <div onClick={() => window.open('https://www.cult.fit/live/fitness/goal-based-programs/FIT_SERIES_43/s') }
              className='mt-2 w-24 md:w-32 h-8 md:h-10 hover:bg-red-500 hover:scale-105 bg-red-600 flex justify-center items-center rounded-lg hover:cursor-pointer shadow-2xl  '>
              <button className='text-white text-sm md:text-xl font-semibold shadow-2xl'>Show More</button>
              </div>
              <div>
                <div className='w-20  flex flex-row space-x-5'>
                <FaArrowCircleLeft onClick={handlePrev} className=' text-3xl hover:cursor-pointer hover:scale-110 hover:text-red-600' />
                <FaArrowCircleRight onClick={handleNext} className=' text-3xl hover:cursor-pointer hover:scale-110 hover:text-red-600' />
                </div>
              </div>
          </div>
        
      </div>





      <div id='trainer'></div>
      {/* Trainee  */}
      <div className='w-full h-[550px] mt-28 flex flex-col items-center'>
      <div className='h-10 offside-regular text-3xl md:text-5xl text-red-600 mt-2'>
        Trainer
      </div>
      <div className='mt-2 text-black'>
        We have the best Trainers from around the world
      </div>
      <div className='md:w-10/12 w-10/12 h-4/6 mt-4 flex items-center'>

        {/* <div className='w-5 h-full flex justify-center items-center'>
          <IoIosArrowBack onClick={arrowPrev} className='cursor-pointer hover:scale-150' />
        </div> */}

        <div className='w-full h-full'>
          <Trainers currentTrainerIndex={currentTrainerIndex} />
        </div>
{/* 
        <div className='w-5 h-full flex justify-center items-center'>
          <IoIosArrowForward onClick={arrowNext} className='cursor-pointer hover:scale-150' />
        </div> */}

      </div>
      <div
        onClick={() => window.open('https://www.cult.fit/live/fitness/workout-by-trainer/FIT_SERIES_36/s') }
        className='mt-5 w-24 md:w-32 h-8 md:h-10 hover:bg-red-500 hover:scale-105 bg-red-600 flex justify-center items-center rounded-lg hover:cursor-pointer shadow-2xl'
      >
        <button className='text-white text-sm md:text-xl font-semibold shadow-2xl'>
          Show More
        </button>
      </div>
    </div>






      <div id='pricing'></div>
      {/*Pricing */}
      <div  className='w-full h-[550px] mt-20 bg-slate-900 flex flex-col md:flex-row'>
        <div className=' h-1/2 md:h-full md:w-1/2 bg-slate-700 flex justify-center space-x-6 items-center'>
            <div className='text-white h-4/6 w-2/6 bg-slate-900 flex flex-col justify-center rounded-xl items-center'>
              <span className='md:font-bold md:text-lg font-semibold'>Day Pass</span>
              <span className='' >Rs. <spanclas className='md:text-6xl text-2xl' >300</spanclas></span>
              <span className='text-sm' >/Day</span>
              <div>
              <span className="flex items-center text-sm md:mt-5"><FaRegCheckCircle className="mr-2 text-green-500" />Joining fees</span>
              <span className="flex items-center text-sm md:mt-5"><FaRegCheckCircle className="mr-2 text-green-500" />No Contract</span>
              <span className="flex items-center text-sm md:mt-5"><FaRegCheckCircle className="mr-2 text-green-500" />Free Gym Access</span>
            </div>
              <button className='md:mt-5 w-24 mt-2 md:w-32 md:h-12 bg-green-500 rounded-2xl hover:scale-110' >Get Started</button>
            </div>
            <div className=' h-52 md:h-5/6 md:w-3/6  bg-white flex flex-col justify-center rounded-2xl items-center'>
              <span className='md:font-bold md:text-lg font-semibold' >Monthly PLan</span> 
              <span className='' >Rs. <spanclas className='md:text-6xl text-2xl' >4000</spanclas></span>
              <span className='text-sm' >/Month</span>
              <div>
              <span className="flex items-center text-sm md:mt-5"><FaRegCheckCircle className="mr-2 text-green-500" />Joining fees</span>
              <span className="flex items-center text-sm md:mt-5"><FaRegCheckCircle className="mr-2 text-green-500" />No Contract</span>
              <span className="flex items-center text-sm md:mt-5"><FaRegCheckCircle className="mr-2 text-green-500" />Free Gym Access</span>
              <span className="flex items-center text-sm md:mt-5"><FaRegCheckCircle className="mr-2 text-green-500" />1 Group Class Included</span>
              <span className="flex items-center text-sm md:mt-5"><FaRegCheckCircle className="mr-2 text-green-500" />24 Hour Access</span>
              </div>
              <button className='md:mt-5 w-56 h-12 bg-green-500 rounded-2xl hover:scale-110' >Get Started</button>
            </div>
        </div>
        <div className=' text-white h-1/2 w-full md:h-full md:w-1/2  flex flex-col justify-center items-center'>
              <div className='ml-7 mr-2'>
              <span className='text-lg font-semibold md:font-bold'>From Punch Pass to Monthly or Annual</span>
                  <div className='md:mt-5'>
                  <span className='mr-5 text-[12px] md:text-lg'>At Gym Base we offer a wide range of membership with options to suit
                    every budget. Everything from One Day Pass, Punch Pass to Monthly or annual prepaid membership. What's More
                    important is that we want to tie you to a long term contract giving you greater flexiblity.
                  </span>
                  </div>
              </div>
            <div className='md:mt-9'>
            <span className='text-lg font-semibold md:fomt-bold' >Each plan included</span>
            <span className="flex items-center text-[12px] md:text-lg md:mt-5"><FaLongArrowAltRight className="mr-2 text-green-500" />The best equiped global branches</span>
            <span className="flex items-center text-[12px] md:text-lg md:mt-5"><FaLongArrowAltRight className="mr-2 text-green-500" />The Gym is open 24 hours a Day, 7 day a week</span>
            <span className="flex items-center text-[12px] md:text-lg md:mt-5"><FaLongArrowAltRight className="mr-2 text-green-500" />Two safe payment methods</span>
            <span className="flex items-center text-[12px] md:text-lg md:mt-5"><FaLongArrowAltRight className="mr-2 text-green-500" />Group fitness classes in the price of the subscription</span>
            <span className="flex items-center text-[12px] md:text-lg md:mt-5"><FaLongArrowAltRight className="mr-2 text-green-500" />No long term contract period</span>
            </div>


        </div>
      </div>



        {/*Footer */}
      <div className='w-full h-[500px] mt-28 bg-slate-900 flex flex-col md:flex-row'>
          <div className='md:w-1/2 w-full   md:h-full h-1/2 text-white'>
            <img className='w-20 md:w-48' src={Logo} alt="" />
            <div className='ml-10'>
            <span className='md:text-lg  text-sm font-bold '>At cult.fit, we make group workouts fun, daily food healthy & tasty, mental fitness easy with yoga & meditation, Medical & lifestyle care hassle-free.#BeBetterEveryDay</span>
            </div>
            <div className='ml-10 mt-3 flex flex-row space-x-5 md:text-4xl text-lg '> 
            <span><FaFacebook onClick={() => window.open('https://www.facebook.com/wearecultofficial/') } 
            className='hover:scale-110'/></span>
             <span><FaInstagram onClick={() => window.open('https://www.instagram.com/wearecult/?hl=en') }  
             className='hover:scale-110' /></span> 
             <span><FaTwitter  onClick={() => window.open('https://twitter.com/cultfitOfficial') } 
             className='hover:scale-110' /></span>
             </div>
          </div>

          <div className=' md:w-1/2 w-full md:h-full h-1/2 flex flex-row'>

          <div className='w-1/3 h-full flex  justify-center items-center'>
          <div className='text-white md:text-lg text-sm ml-4 md:ml-0 space-y-6'>
          <div>cult.fit for business</div>
          <div>cult.fit franchise</div>
          <div>corporate partnerships</div>
          <div>cult pass network</div>
          <div>t&c for business</div>
          </div>
          </div >

          <div className='w-1/3 h-full flex  justify-center items-center'>
          <div className='text-white md:text-lg text-sm space-y-6'>
          <div>partner.fit</div>
          <div>blogs</div>
          <div>security</div>
          <div>cult pass network</div>
          <div>careers</div>
          </div>
          </div>

          <div className='w-1/3 h-full flex  justify-center items-center'>
          <div className='text-white md:text-lg text-sm space-y-4'>
          <div>contact us</div>
          <div>privacy policy</div>
          <div>security</div>
          <div>cult bmi calculator</div>
          <div>terms & conditions</div>
          <div className='mt-3 flex flex-row space-x-5 text-2xl'> 
            <span><IoLogoAndroid  className='hover:scale-110'/></span>
             <span><FaApple className='hover:scale-110' /></span> 

             </div>
          
          </div>
          </div>
        </div>
        </div>


      {/*CopyRight */}
      <div className='w-full h-[30px] flex  justify-center items-center text-sm'>
            All  Copy rights reserved to the developer of this Project @Rohit
      </div>

      


























    </div>
  )
}

export default GymHomePage;
