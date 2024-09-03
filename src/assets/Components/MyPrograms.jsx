import React from 'react';

import Pli1 from '../Images/Pli1.jpg';
import Pli2 from '../Images/Pli2.jpg';
import Pli3 from '../Images/Pli3.jpg';
import Pli4 from '../Images/Pli4.jpg';
import Pli5 from '../Images/Pli5.jpg';
import Pli6 from '../Images/Pli6.jpg';

const MyPrograms = ({ currentIndex }) => {

//   const [currentIndex, setCurrentIndex] = useState(0);

    const itemName = [

        {id:1, name:"Strength Training"},
        {id:2, name:"Cardio Training"},
        {id:3, name:"Zumba"},
        {id:4, name:"Meditation"},
        {id:5, name:"Boxing"},
        {id:6, name:"Nutrition"}
    ]

  const items = [

    // Strength Training 
    { id: 1, name: 'Strength training', image: Pli1, description: 
    <div><span className='text-5xl'>#Strength Building</span> <br /><br/> 
    <span className=' text-lg md:text-2xl'>We will train you to makes your muscles work harder than usual</span> <br /><br/>
    <span className='text-lg md:text-2xl'> It can help you build strength, size, and endurance</span> <br /><br/>
    <span className='text-lg md:text-2xl'> It can also improve your  </span> <br /><br/>
    <span className='text-lg md:text-2xl'>flexibility and reduce your</span> <br /><br/>
    <span className='text-lg md:text-2xl'>risk of injury.</span>
    </div>   },
    
    // Running 
    { id: 2, name: 'Running', image: Pli2, description: <div><span className='text-5xl'>..</span> <br /><br />
    <span className='text-sm md:text-2xl'>..</span> <br /><br/>
    {/* <span className='text-sm md:text-2xl'> .. </span> <br /><br/> */}
    <span className='text-lg md:text-2xl'> The best and most affective way to burn calories </span> <br /><br/>
    <span className='text-lg md:text-2xl'> is to make a habit of regular jogging </span> <br /><br/>
    <span className='text-lg md:text-2xl'> Here we do it all together.. </span> <br /><br/>
    <span className='text-5xl'> #Run Like Hell</span> <br /><br/> 
    </div> },

    // Zumba 
    { id: 3, name: 'Zumba', image: Pli3, description: <div> <span className='text-5xl'>#Fun way to Exercise</span> <br /><br />
    <span className=' text-lg md:text-2xl'>The Fun way to Exercise</span> <br /><br/>
    <span className=' text-lg md:text-2xl'>We will not only train you to be fit </span> <br /><br/>
    <span className=' text-lg md:text-2xl'>but you will Tiger Shroff  </span> <br /><br/>
    <span className=' text-lg md:text-2xl'>Groove with us on your fav </span> <br /><br/>
    <span className=' text-lg md:text-2xl'>tracks</span> <br /><br/>
    </div>},

    // Meditation 
    { id: 4, name: 'Yoga', image: Pli4, description: <div> <span className='text-5xl'>#Making mind heathy</span> <br /><br />
    <span className=' text-lg md:text-2xl'>A body is healthy only when the mind is healthy too</span> <br /><br/>
    <span className=' text-lg md:text-2xl'>Learn to focus.. </span> <br /><br/>
    <span className=' text-lg md:text-2xl'> Go closer towards Spirituality </span> <br /><br/>
    <span className=' text-lg md:text-2xl'>meditation, a part of your life</span> <br /><br/>
    </div> },


    // Boxing 
    { id: 5, name: 'Boxing', image: Pli5, description: <div> <span className='text-5xl'>#Core Training</span> <br /><br />
    <span className=' text-lg md:text-2xl'>Fights don't come with a warning</span> <br /><br/>
    <span className=' text-lg md:text-2xl'>Either for offense or Defence</span> <br /><br/>
    <span className=' text-lg md:text-2xl'>or for street pick-up's</span> <br /><br/>
    <span className=' text-lg md:text-2xl'>Make shure your ready</span> <br /><br/>
    <span className=' text-lg md:text-2xl'> any time anywhere</span> <br /><br/>
    </div> },

    // Diet 
    { id: 6, name: 'Nutrition', image: Pli6, description: <div> <span className='text-5xl'>#Eat healthy Stay healthy</span> <br /><br /> 
    <span className=' text-lg md:text-2xl'>What goes in comes out </span> <br /><br/>
    <span className=' text-lg md:text-2xl'>Feed your body the best as it deserves</span> <br /><br/>
    <span className=' text-lg md:text-2xl'>We make your personalised </span> <br /><br/>
    <span className=' text-lg md:text-2xl'>diet plans </span> <br /><br/>
    </div> },




  ];

  const item = items[currentIndex];
  const currentItemName = itemName[currentIndex].name;

  return (
    <div className="w-full h-full relative flex justify-center">
      <div className="h-full w-10/12  relative rounded-3xl shadow-2xl">
        <img className='w-full h-full object-cover rounded-3xl' src={item.image} alt={item.name} />
        <h1  className='text-white font-bold absolute  inset-0 mt-3 ml-3 f'>{item.description}</h1>
        
        <div className="rounded-xl shadow-2xl absolute bottom-28 right-0 h-2/5 w-32  transform translate-x-1/2 translate-y-1/2">
          <img className='w-full h-full object-cover rounded-xl' src={item.image} alt={item.name} />
          <h1  className=' text-left  text-2xl text-white font-bold absolute z-50 inset-0 mt-20 ml-1 '># <br />
            {currentItemName}</h1>
        </div>
      </div>
    </div>
  );
}

export default MyPrograms;
