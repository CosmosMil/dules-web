/* eslint-disable react/no-unescaped-entities */
"use client"
import React, { useState } from 'react';
import Image from "next/image"
import { useRouter } from "next/navigation"

const Homepage = () => {

  const router = useRouter();

  const [hoveredPoster1, setHoveredPoster1] = useState(false);
  const [hoveredPoster2, setHoveredPoster2] = useState(false);
  const [hoveredPoster3, setHoveredPoster3] = useState(false);

  const poster1 = {
    width: '400px',
    height: '580px',
    backgroundImage: 'url("https://res.cloudinary.com/dte85mpkw/image/upload/v1689448740/dule/ZMW.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    margin: '0 1.5rem 1.5rem 0'

  };

  const poster2 = {
    width: '400px',
    height: '580px',
    backgroundImage: 'url("https://res.cloudinary.com/dte85mpkw/image/upload/v1689497450/dule/COS.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    margin: '0 1.5rem 1.5rem 0'
  };

  const poster3 = {
    width: '400px',
    height: '580px',
    backgroundImage: 'url(https://res.cloudinary.com/dte85mpkw/image/upload/v1692823637/dule/LOD.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    margin: '0 1.5rem 1.5rem 0'
  }

  const clickPoster1 = () => {
    router.push('/number-my-wanderings')
  }

  const clickPoster2 = () => {
    router.push('children-of-spring')
  }

  const clickPoster3 = () => {
    router.push('lod-on-the-map')
  }


  return (
    <main className='mt-10'>
      <div className="flex flex-wrap justify-center ">
        <div
          onMouseEnter={() => setHoveredPoster1(true)}
          onMouseLeave={() => setHoveredPoster1(false)}
          style={{ ...poster1, cursor: 'pointer' }}
          onClick={clickPoster1} >
          {hoveredPoster1 && <div
            className='flex flex-col items-center justify-center w-full h-full backdrop-brightness-50 text-white text-2xl italic'>
            <p>Feature</p>
            <p>72'</p>
            <p>2023</p>
          </div>}</div>

        <div
          onMouseEnter={() => setHoveredPoster2(true)}
          onMouseLeave={() => setHoveredPoster2(false)}
          style={{ ...poster2, cursor: 'pointer' }}
          onClick={clickPoster2}>
          {hoveredPoster2 && <div
            // eslint-disable-next-line react/jsx-no-comment-textnodes
            className='flex flex-col items-center justify-center w-full h-full backdrop-brightness-50 text-white text-2xl italic'><p>Docufiction</p>

            <p>43'</p>
            <p>2019</p>
          </div>}</div>


        <div
          onMouseEnter={() => setHoveredPoster3(true)}
          onMouseLeave={() => setHoveredPoster3(false)}
          style={{ ...poster3, cursor: 'pointer' }}
          onClick={clickPoster3}>
          {hoveredPoster3 && <div
            // eslint-disable-next-line react/jsx-no-comment-textnodes
            className='flex flex-col items-center justify-center w-full h-full backdrop-brightness-50 text-white text-2xl italic'><p>Documentary</p>

            <p>61'</p>
            <p>2012</p>
          </div>}</div>
      </div>



    </main >




  )
}

export default Homepage
