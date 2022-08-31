import React from 'react'
import requests from '../utils/requests'
import { useRouter } from 'next/router'
import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon } from '@heroicons/react/outline'

const Navbar = () => {
 const router = useRouter();

  const slideLeft = () => {
  var slider = document.getElementById('slider');
  slider.scrollLeft = slider.scrollLeft - 500;}

   const slideRight = () => {
  var slider = document.getElementById('slider');
  slider.scrollLeft = slider.scrollLeft + 500;}

  return (
    <nav  className='relative group '>
      <ChevronDoubleLeftIcon onClick={slideLeft} className='h-7  group-hover:opacity-50 group-hover:animate-ping  absolute left-2 top-5 opacity-0 transparent cursor-pointer'  />
     <div id='slider' className='flex px-10 sm:px-20 scroll-smooth  text-2xl whitespace-nowrap space-x-10 sm:space-x-20 scrollbar-hide overflow-x-scroll relative  '>
      {Object.entries(requests).map( ([ key, {title,url} ])  => (
       <h2 onClick={() => router.push(`/?genre=${key}`)}
       className='cursor-pointer  transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500 last:pr-24' 
       key={key}>{title}</h2>
      ))}
     </div>
     <ChevronDoubleRightIcon onClick={slideRight} className=' absolute group-hover:opacity-50 right-5  group-hover:animate-ping h-7 opacity-0 transparent cursor-pointer'  />

     <div className='absolute top-0 right-0 bg-gradient-to-l from-[#06202a] h-10 w-1/12 ' />
    </nav>
  )
}

export default Navbar