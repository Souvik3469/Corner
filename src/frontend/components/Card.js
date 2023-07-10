import { Box, Button, Modal, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  height: 550,
  bgcolor: 'background.paper',
  
  boxShadow: 32,
  p: 4,
};

function CarCard() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className='drop-shadow-lg shadow-black w-[350px] flex flex-col p-3 rounded-lg  hover:bg-blue-200 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'>
        <div className='flex items-center justify-center' >
        <img className='' src='https://cdn.bigboytoyz.com/new-version/products/product/2016-ford-mustang-gt-black-6312.jpg '/>
        </div>
        <div className='font-bold text-lg my-2 '>
           Ford Mustang Gt limited Edition
        </div>
        <div>
          <div className='flex justify-between'>
    <Button
    className='bg-blue-700 text-white'
    variant="contained"
    size="medium"

    >
    Buy for 7.5 ETH
    </Button>
      <Button    className='bg-blue-700 text-white'
    variant="contained"
    size="medium" onClick={handleOpen}>Car Details</Button>
        </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className='flex flex-col items-center ' >
            <div className='font-extrabold text-lg my-1 '>
       
            Ford Mustang Gt limited Edition
      
          </div>
             <div className=' '>
              <img className='' src='https://imgd.aeplcdn.com/0x0/n/cw/ec/51378/s5-sportback-exterior-right-front-three-quarter-5.jpeg ' height={400} width={500}/>
            </div>
          <div className=' flex items-center py-1'>
            <div className='flex flex-col items-center'>
          <div className='font-bold text-md my-1 '>
          Mileage:25000km    
            </div>   
             <div className='font-bold text-md my-1 '>
          Color:Blue   
            </div>
             <div className='font-bold text-md my-1 '>
         Body:Hatchback    
            </div>
             <div className='font-bold text-md my-1 '>
        Transmision:Manual    
            </div>                   
            </div>
         
            </div>
            <div className='mt-1'>
               <Button
    className='bg-blue-700 text-white'
    variant="contained"
    size="medium"

    >
    Buy for 7.5 ETH
    </Button>

              </div>
          </div>
        </Box>
      </Modal>
   
        </div>
    </div>
  )
}

export default CarCard