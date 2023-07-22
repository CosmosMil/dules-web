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
        <p className='text-purple-500 text-lg sm:text-2xl lg:text-2xl'>D U Š A N</p><p className='text-purple-600 text-xl sm:text-2xl lg:text-3xl'>S O L O M U N</p>
        {hoverName ? (<div className=' text-white text-sm sm:text-xl lg:text-2xl italic'>A B O U T</div>) : (<div className='h-6'></div>)}

      </Link>

      <Link
        className='mt-3'
        href='/'
        onMouseEnter={() => setHoverFilm(true)}
        onMouseLeave={() => setHoverFilm(false)}>
        <p className='text-black text-lg sm:text-2xl lg:text-3xl'>F I L M</p>
        <p className='text-black text-sm sm:text-xl lg:text-2xl'>M A K E R</p>
        {hoverFilm ? (<div className=' text-white text-sm sm:text-xl lg:text-2xl italic'>H O M E</div>) : (<div className='h-8'></div>)}
      </Link>

      <Link
        className='mr-10 mt-3'
        href='/photo-gallery'
        onMouseEnter={() => setHoverPhoto(true)}
        onMouseLeave={() => setHoverPhoto(false)}>
        <p className='text-black text-lg sm:text-2xl lg:text-3xl'>P H O T O</p>
        <p className='text-black text-sm sm:text-xl lg:text-2xl'>G R A P H E R</p>
        {hoverPhoto ? (<div className=' text-white text-sm sm:text-xl lg:text-2xl italic'>G A L L E R Y</div>) : (<div className='h-8'></div>)}
      </Link>


    </div>




  )
}

export default Navbar