import { Box, Button, Modal, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 750,
  height: 550,
  bgcolor: 'background.paper',
  
  boxShadow: 32,
  p: 4,
};

function Carop({
  carName,
  carImage,
  carPrice,
  marketplace,
  nft,
  item,
  f,
  desc
}) {
  const buyMarketItem = async (item) => {
    await (
      await marketplace.purchaseItem(item.itemId, { value: item.totalPrice })
    ).wait();
    f();
    
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className='drop-shadow-lg bg-gray-300 shadow-black w-[350px] flex flex-col p-3 rounded-lg  hover:bg-blue-200 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'>
        <div className='flex items-center justify-center' >
        <img className='w-[300px] h-[210px]' src={carImage}/>
        </div>
        <div className='font-bold text-lg my-2 '>
        {carName}
        </div>
        <div>
          <div className='flex justify-between'>
    <Button
    className='bg-blue-700 text-white'
    variant="contained"
    size="medium"
    onClick={()=>{buyMarketItem(item)}}
    >
    Buy {carPrice} ETH
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
            <div className='font-extrabold text-4xl my-1 '>
            {carName}
      
          </div>
             <div className=' '>
              <img className='w-[450px] h-[300px]' src={carImage} />
            </div>
          <div className=' flex items-center py-1'>
            <div className='flex flex-col items-center'>
          <div className='font-bold text-md my-1 '>
         
            </div>   
             <div className='font-bold text-md my-1 '>
     {desc}
            </div>
             <div className='font-bold text-md my-1 '>
       {carPrice} ETH
            </div>                   
            </div>
         
            </div>
            <div className='mt-1'>
               <Button
    className='bg-blue-700 text-white'
    variant="contained"
    size="medium"
   onClick={()=>{buyMarketItem(item)}}
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

export default Carop