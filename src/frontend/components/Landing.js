import React from 'react'
import car1 from "./car1.jpg"
import CarCard from './Card';
import { Button } from '@mui/material';
import Why from './Why';
function Landing() {
     const myStyle={
        backgroundImage:
 "url('https://wallpaperaccess.com/full/33110.jpg')",
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
        <div className='absolute z-10 left-2 drop-shadow-lg shadow-black pb-10  top-20 px-12 text-stone-900 text-7xl font-extrabold '>
           <div>
            Get
           </div>
           <div>
           Your
           </div>
           <div div className='text-white'>
            Dream Car
           </div>
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
      <div className="flex justify-center gap-10 mb-20 ">
      <div className='bg-white drop-shadow-lg shadow-black w-[250px] flex flex-col p-3 rounded-lg  hover:bg-blue-200 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'>
        <div className='flex items-center justify-center' >
        <img className='' src='https://cdn.bigboytoyz.com/new-version/products/product/2016-ford-mustang-gt-black-6312.jpg '/>
        </div>
        <div className='font-bold text-lg my-2 '>
           Ford Mustang Gt limited Edition
        </div>
        <div className='flex justify-between'>
          <div>
    <Button
    className='bg-blue-700 text-white'
    variant="contained"
    size="small"

    >
    Buy 
    </Button>
        </div>
        <div className='bg-green-600 text-white p-1 rounded-md '>
        7.5 
        
         ETH
        </div>
        </div>
    </div>
     <div className='bg-white drop-shadow-lg shadow-black w-[250px] flex flex-col p-3 rounded-lg  hover:bg-blue-200 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'>
        <div className='flex items-center justify-center' >
        <img className='' src='https://cdn.bigboytoyz.com/new-version/products/product/2016-ford-mustang-gt-black-6312.jpg '/>
        </div>
        <div className='font-bold text-lg my-2 '>
           Ford Mustang Gt limited Edition
        </div>
        <div className='flex justify-between'>
          <div>
    <Button
    className='bg-blue-700 text-white'
    variant="contained"
    size="small"

    >
    Buy 
    </Button>
        </div>
        <div className='bg-green-600 text-white p-1 rounded-md '>
        7.5 
        
         ETH
        </div>
        </div>
    </div>
     <div className='bg-white drop-shadow-lg shadow-black w-[250px] flex flex-col p-3 rounded-lg  hover:bg-blue-200 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'>
        <div className='flex items-center justify-center' >
        <img className='' src='https://cdn.bigboytoyz.com/new-version/products/product/2016-ford-mustang-gt-black-6312.jpg '/>
        </div>
        <div className='font-bold text-lg my-2 '>
           Ford Mustang Gt limited Edition
        </div>
        <div className='flex justify-between'>
          <div>
    <Button
    className='bg-blue-700 text-white'
    variant="contained"
    size="small"

    >
    Buy 
    </Button>
        </div>
        <div className='bg-green-600 text-white p-1 rounded-md '>
        7.5 
        
         ETH
        </div>
        </div>
    </div>
     <div className='bg-white drop-shadow-lg shadow-black w-[250px] flex flex-col p-3 rounded-lg  hover:bg-blue-200 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'>
        <div className='flex items-center justify-center' >
        <img className='' src='https://cdn.bigboytoyz.com/new-version/products/product/2016-ford-mustang-gt-black-6312.jpg '/>
        </div>
        <div className='font-bold text-lg my-2 '>
           Ford Mustang Gt limited Edition
        </div>
        <div className='flex justify-between'>
          <div>
    <Button
    className='bg-blue-700 text-white'
    variant="contained"
    size="small"

    >
    Buy 
    </Button>
        </div>
        <div className='bg-green-600 text-white p-1 rounded-md '>
        7.5 
        
         ETH
        </div>
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
    </div>
  )
}

export default Landing