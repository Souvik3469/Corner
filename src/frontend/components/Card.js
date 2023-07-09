import { Button } from '@mui/material'
import React from 'react'

function CarCard() {
  return (
    <div className='drop-shadow-lg shadow-black w-[350px] flex flex-col p-3 rounded-lg  hover:bg-blue-200 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'>
        <div className='flex items-center justify-center' >
        <img className='' src='https://cdn.bigboytoyz.com/new-version/products/product/2016-ford-mustang-gt-black-6312.jpg '/>
        </div>
        <div className='font-bold text-lg my-2 '>
           Ford Mustang Gt limited Edition
        </div>
        <div>
    <Button
    className='bg-blue-700 text-white'
    variant="contained"
    size="medium"

    >
    Buy for 7.5 ETH
    </Button>
        </div>
    </div>
  )
}

export default CarCard