import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import DiamondIcon from '@mui/icons-material/Diamond';
function Why() {
  return (
   <div className='bg-white m-10 p-16'>
    <div className='text-5xl font-bold font-mono p-2 '>WHAT WE SERVE YOU ?</div>
     <div className='flex justify-around p-10' >
     <div class="drop-shadow-lg  bg-gray-100 shadow-black  w-[350px] flex flex-col  justify-center rounded-lg  hover:bg-blue-200 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">

  <div>
  <FavoriteIcon 
    color='warning'
    />
  </div>
 
  <div class="text-stone-800 font-bold text-lg text-center">
    Authenticity and Ownership 
  </div>
</div>
<div class="drop-shadow-lg bg-gray-100 shadow-black w-[350px] flex flex-col p-3 rounded-lg  hover:bg-blue-200 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">

    <div>
        <AccountBalanceWalletIcon
        color='success'
        />
    </div>
  
  <span class="text-stone-800 font-bold text-lg text-center">
Enthusiast Community of Car Lovers
  </span>
</div>
<div class="drop-shadow-lg bg-gray-100 shadow-black w-[350px] flex flex-col p-3 rounded-lg  hover:bg-blue-200 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
 <div>
 <DiamondIcon 
 color='error'
 />
 </div>
  <span class="text-stone-800 font-bold text-lg text-center">
  Rarity and Scarcity
  </span>
</div>
    </div>
   </div>
  )
}

export default Why