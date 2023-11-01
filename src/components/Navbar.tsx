"use client"

import React, { useState } from 'react'
import Link from 'next/link'

type Props = {}

const Navbar = (props: Props) => {
  const [hoverName, setHoverName] = useState(false);
  const [hoverFilm, setHoverFilm] = useState(false);
  const [hoverPhoto, setHoverPhoto] = useState(false)


  return (
    <div className='flex justify-between'>
      <Link
        className='ml-10 mt-3'
        href='/about'
        onMouseEnter={() => setHoverName(true)}
        onMouseLeave={() => setHoverName(false)}>
        <p className='text-purple-500 text-base sm:text-2xl lg:text-2xl'>DUŠAN</p><p className='text-purple-600 font-bold text-base sm:text-2xl lg:text-3xl'>SOLOMUN</p>
        {hoverName ? (<div className=' text-white text-sm sm:text-xl lg:text-2xl italic'>ABOUT</div>) : (<div className='h-6'></div>)}

      </Link>

      <Link
        className='mt-3'
        href='/'
        onMouseEnter={() => setHoverFilm(true)}
        onMouseLeave={() => setHoverFilm(false)}>
        <p className='text-black text-lg sm:text-xl lg:text-3xl font-bold'>FILM</p>
        <p className='text-black text-sm sm:text-xl lg:text-2xl'>MAKER</p>
        {hoverFilm ? (<div className=' text-white text-sm sm:text-xl lg:text-2xl italic'>HOME</div>) : (<div className='h-8'></div>)}
      </Link>

      <Link
        className='mr-10 mt-3'
        href='/photo-gallery'
        onMouseEnter={() => setHoverPhoto(true)}
        onMouseLeave={() => setHoverPhoto(false)}>
        <p className='text-black text-lg sm:text-xl lg:text-3xl font-bold'>PHOTO</p>
        <p className='text-black text-sm sm:text-xl lg:text-2xl'>GRAPHER</p>
        {hoverPhoto ? (<div className=' text-white text-sm sm:text-xl lg:text-2xl italic'>GALLERY</div>) : (<div className='h-8'></div>)}
      </Link>


    </div>




  )
}

export default Navbar