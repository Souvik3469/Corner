import React, { useEffect } from 'react'
import car1 from "./car1.jpg"
import CarCard from './Card';
import { Button, Typography } from '@mui/material';
import Why from './Why';
import axios from 'axios';
import News from './News';
import "./App.css"
function Landing() {
  const [car , setCar] = React.useState([])
  const options = {
    method: 'GET',
    url: 'https://crypto-news16.p.rapidapi.com/news/top/5',
    headers: {
      'X-RapidAPI-Key': 'e5d18a5de9msh6ad77ce245bd0ecp14eac2jsnef482c55cf85',
      'X-RapidAPI-Host': 'crypto-news16.p.rapidapi.com'
    }
  };
// const options = {
//   method: 'GET',
//   url: 'https://car-api2.p.rapidapi.com/api/vin/KNDJ23AU4N7154467',
//   headers: {
//     'X-RapidAPI-Key': 'e5d18a5de9msh6ad77ce245bd0ecp14eac2jsnef482c55cf85',
//     'X-RapidAPI-Host': 'car-api2.p.rapidapi.com'
//   }
// };

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }
const getCarNews = async () => {
  try {
    const response = await axios.request(options);
    console.log(response.data);
    setCar(response.data);
  } catch (error) {
    console.error(error);
  }
};


useEffect(() => {
  getCarNews();
}, [])
     const myStyle={
        backgroundImage:
 "url('https://cdn.wallpapersafari.com/99/98/G10at9.jpg')",

        height:'66vh',
        width:'100%',
        backgroundSize:'cover',
        backgroundPosition:'center',
        backgroundRepeat:'no-repeat',
      
        justifyContent:'center',
        alignItems:'center',
        fontSize:'4rem',
        color:'white',
    };
    
  return (
    <div className='bg-stone-200'>
      <div className='flex justify-center'>
        <div className='absolute z-10 left-2 drop-shadow-lg shadow-black pb-10  top-24 px-12 text-white text-7xl font-extrabold '>
           <h1 className="type">
              Welcome to <br/> Corner
            </h1>
        </div>
        {/* <div className='absolute h-[100px] bg-white z-10 center-10 drop-shadow-lg shadow-black pb-10  top-72 px-12  text-4xl font-extrabold '>
          get your dream car
        </div> */}
        <div style={myStyle} className='relative' >
           
        </div>
      
    </div>
    <div>
      <div className='font-bold text-4xl m-10'>Featured Cars</div>
    </div>
      <div className="flex justify-center gap-10 mb-20  ">
      <div className='bg-white drop-shadow-lg shadow-black w-[300px] flex flex-col p-3 rounded-lg  hover:bg-gray-400 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'>
        <div className='flex items-center justify-center' >
        <img className='' src='https://images.hindustantimes.com/auto/img/2022/04/13/600x338/WhatsApp_Image_2020-08-23_at_1.35.56_PM_1598176416634_1649833606277.jpeg '/>
        </div>
        <div className='font-bold text-lg my-2 '>
           Ford Mustang Gt 
        </div>
       
    </div>
     <div className='bg-white drop-shadow-lg shadow-black w-[300px] flex flex-col p-3 rounded-lg  hover:bg-gray-200 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'>
        <div className='flex items-center justify-center' >
        <img className='' src='https://imgd.aeplcdn.com/600x337/n/cw/ec/42355/xuv700-exterior-right-front-three-quarter.jpeg?isig=0&q=75'/>
        </div>
        <div className='font-bold text-lg my-2 '>
           Ford Mustang Gt 
        </div>
       
    </div>
     <div className='bg-white drop-shadow-lg shadow-black w-[300px] flex flex-col p-3 rounded-lg  hover:bg-gray-200 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'>
        <div className='flex items-center justify-center' >
        <img className='' src='https://images.news18.com/ibnlive/uploads/2021/07/1627184144_1617191884_volkswagen-taigun-suv-1.png'/>
        </div>
        <div className='font-bold text-lg my-2 '>
           Ford Mustang Gt 
        </div>
       
    </div>
     <div className='bg-white drop-shadow-lg shadow-black w-[300px] flex flex-col p-3 rounded-lg  hover:bg-gray-200 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'>
        <div className='flex items-center justify-center' >
        <img className='' src='https://imgd-ct.aeplcdn.com/664x415/n/cw/ec/144681/virtus-exterior-right-front-three-quarter.jpeg?isig=0&q=75'/>
        </div>
        <div className='font-bold text-lg my-2 '>
           Ford Mustang Gt 
        </div>
        
    </div>
      </div>
      
      <div className='bg-white p-10 flex'>
        <div className=''>
        <img width={800} className='bg-stone-300 '  src="https://imgd.aeplcdn.com/0X0/n/cw/ec/47051/compass-exterior-right-front-three-quarter-73.jpeg?isig=0&q=75"/>
        </div>
     <div className='flex flex-col'>
     <div className=' h-1/2 mt-1 text-4xl flex items-center font-bold m-2 p-1 drop-shadow-lg'>
        Get the Best Car , Escpecially 
        
        <br>
        </br>
        Handpicked for You 
        </div>

        <div className='w-[700px] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eros dui, vulputate sed suscipit at, sollicitudin non tellus. Pellentesque et libero volutpat, dapibus tortor ut, vehicula enim. Fusce ut vulputate magna. Nullam elementum lorem ut ullamcorper tincidunt. Vestibulum et sollicitudin ex. Vivamus pretium tempor sapien, vitae laoreet risus vulputate id. Maecenas iaculis nec nulla in facilisis. Nunc felis sapien, condimentum id malesuada sit amet, ullamcorper sit amet ipsum. Etiam sollicitudin convallis turpis, ut euismod ante fermentum non. Proin ultrices nisi id libero commodo, ac elementum est posuere.</div>
     </div>
      </div>
      <Why/>
      <div className='bg-stone-200 p-16 text-5xl font-bold'>
         Recent Updates</div>

<div className='bg-stone-200 p-16  flex'>
  <div className='grid grid-cols-4 gap-3 '>
    
    {car?.map((res, index) => {
      const gridColumn = index % 2 === 0 ? 'span 2' : 'span 1'; // Example logic to set different column spans for alternating news items

      return (
        
          res.description.length > 0 && (
              <News 
              key={index}
              gridColumn={gridColumn}
              title={res.title}
              description={res.description}
              image={res.image}

              
              />
          )
        
      );
    })}
  </div>
</div>

      
      <div className='flex items-center '>
        <div className=' flex flex-col items-center justify-center text-white font-extrabold bg-zinc-900 text-lg  w-[100%] h-[30vh]'>
        <p>&copy; 2023 Corner. All rights reserved.</p>
    <p>Explore our wide range of cars for sale.</p>
    <p>Contact us at info@carsell.com</p>
        </div>
     </div>
     
    </div>
  )
}

export default Landing