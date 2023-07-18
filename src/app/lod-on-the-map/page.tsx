/* eslint-disable react/no-unescaped-entities */
"use client"

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";




const LOD = () => {

  const crewMembers = [
    { role: 'DIRECTOR & CAMERA', name: 'DUŠAN SOLOMUN' },
    // { role: 'DIRECTOR OF PHOTOGRAPHY', name: 'DUŠAN SOLOMUN' },
    { role: 'SOUND', name: 'OSCAR STIEBITZ' },
    { role: 'EDITOR', name: 'DUŠAN SOLOMUN / KATHRIEN DIEZEL / BRANKA PAVLOVIĆ' },

  ];



  return (
    <main className='mt-5'>
      <h1 className='p-6 text-xl md:text-2xl lg:text-3xl text-center text-purple-600 italic'>LOD ON THE MAP!</h1>
      <Carousel autoPlay showStatus={false}>
        <div>
          <img src="https://res.cloudinary.com/dte85mpkw/image/upload/v1689703892/dule/movie-pics/LOD_2.jpg"
          />
        </div>
        <div>
          <img src=
            "https://res.cloudinary.com/dte85mpkw/image/upload/v1689707756/LOD_9.jpg"
          />
        </div>
        <div>
          <img src="https://res.cloudinary.com/dte85mpkw/image/upload/v1689704004/dule/movie-pics/LOD_3.jpg" />
        </div>
        <div>
          <img src="https://res.cloudinary.com/dte85mpkw/image/upload/v1689707754/LOD_10.jpg" />
        </div>
        <div>
          <img src="https://res.cloudinary.com/dte85mpkw/image/upload/v1689703262/dule/movie-pics/LOD_5.jpg" />
        </div>
        <div>
          <img src="https://res.cloudinary.com/dte85mpkw/image/upload/v1689701714/dule/movie-pics/LOD_7.png" />
        </div>
        <div>
          <img src="https://res.cloudinary.com/dte85mpkw/image/upload/v1689701730/dule/movie-pics/LOD_6.png" />
        </div>
        <div>
          <img src="https://res.cloudinary.com/dte85mpkw/image/upload/v1689701686/dule/movie-pics/LOD_8.png" />
        </div>
      </Carousel>
      <div className='flex flex-col p-3'>
        <p className='text-m md:text-xl text-left p-3 italic'>A portrait of four young musicians, coming from Lod, a small city right in the heart of Israel. In the center of the movie are the attempts of each protagonist to accomplish a successful music career. It's a daily fight against poverty and miserable reality. Four young musicians on their quest for happiness, fame and acknowledgment in an unstable neighborhood full of conflicts.</p>
        <div className='flex justify-center p-5'>
          <table className='table-auto text-left p-5 leading-5'>
            <tbody className='text-sm md:text-base lg:text-xl'>
              {crewMembers.map((member) => (
                <tr key={member.role}>
                  <td className='pr-12 p-1 '>{member.role}</td>
                  <td className='p-1 '>{member.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className='flex flex-col text-center p-3'>
          <p className='text-sm md:text-base lg:text-xl p-3'>CAST</p>
          <p className='text-sm md:text-base lg:text-xl font-bold'> Liron Zohar | Mohhamad Avari | Nethanel Geta | Moshe Sapiashvilly</p>
          <p className='flex justify-center text-xs md:text-base p-8 whitespace-pre'>DOCUMENTARY            |            DE 2012            |            61 min            </p>
        </div>




      </div>

    </main>
  );
}

export default LOD;