import React from 'react'

function News({
    title,
    description,
    url,
    date

}) {
  return (
    <div className='bg-white rounded-lg h-fit w-[100%] p-4 hover:bg-blue-200 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-20 ' >
        <div className='text-xl font-extrabold p-1 text-orange-600 m-3 p-1 '>{title}</div>
        <div className='text-xl font-bold p-1 '>{description}</div>
        <div className='text-xl font-bold p-1 '>{url}</div>
        <div className='text-xl font-bold p-1 '>{date}</div>
    </div>
  )
}

export default News