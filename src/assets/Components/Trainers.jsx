import React, { useRef } from 'react';

import ChloeTing from '../Images/ChloeTing.jpg';
import GuruMann from '../Images/GuruMann.jpg';
import JeetSelal from '../Images/JeetSelal.png';
import JeffNippard from '../Images/JeffNippard.jpeg';
import KrishGathin from '../Images/KrishGathin.jpg';
import NamrataPurohit from '../Images/NamrataPurohit.jpeg';
import YasminKarachiwala from '../Images/YasminKarachiwala.jpg';

const data = [
  {
    id: 1,
    name: 'Kris Gethin',
    img: KrishGathin,
    about: 'Kris is the co-founder of Unmatched Supplements, the Kris Gethin Gyms franchise, and Kris Gethin Coaching.',
  },
  {
    id: 2,
    name: 'Yasmin Karachiwala',
    img: YasminKarachiwala,
    about: 'With 26 years of experience in the fitness industry, she is a sought-after name among some popular Bollywood stars.',
  },
  {
    id: 3,
    name: 'Guru Mann',
    img: GuruMann,
    about: 'Guru Mann is a Health & Fitness professional and an inspiring Social Media personality.',
  },
  {
    id: 4,
    name: 'Jeet Selal',
    img: JeetSelal,
    about: 'Founder of Jeet Selal Aesthetics and Himalayan Stallion brand, he is a fitness entrepreneur.',
  },
  {
    id: 5,
    name: 'Jeff Nippard',
    img: JeffNippard,
    about: 'As a powerlifter, Jeff has claimed a 502 lb squat, 336 lb bench press, and a 518 lb deadlift with an all-time best Wilks score of 446.',
  },
  {
    id: 6,
    name: 'Chloe Ting',
    img: ChloeTing,
    about: 'Chloe is a leading fitness creator on YouTube with over 24M subscribers. Her goal is to make health and fitness accessible to all.',
  },

  {
    id: 7,
    name: 'Namrata Purohit',
    img: NamrataPurohit,
    about: 'Namrata Purohit is an award winning entrepreneur, a sought after fitness instructor, author and personality based in Mumbai.',
  },

];

const Trainers = ({ currentTrainerIndex }) => {
  const scrollContainerRef = useRef(null);

  return (
    <div

      ref={scrollContainerRef}
      className='flex flex-row h-full ml-1 overflow-x-auto scrollbar-hide space-x-4'
    >
      {data.map((trainer) => (
        <div key={trainer.id} className='md:w-[211px] w-[190px] flex-shrink-0 bg-slate-900 rounded-lg shadow-lg'>
          <div className='mb-2'>
            <img className='w-full h-48 object-cover rounded-t-lg' src={trainer.img} alt={trainer.name} />
          </div>
          <div className='p-2 text-center'>
            <p className='font-bold text-lg text-white'>{trainer.name}</p>
            <p className='text-[10px] text-white'>{trainer.about}</p>
          </div>
        </div>
      ))}



    </div>
  );
};

export default Trainers;
