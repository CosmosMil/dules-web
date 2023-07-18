/* eslint-disable react/no-unescaped-entities */
"use client"

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";




const LOD = () => {

  const crewMembers = [
    { role: 'DIRECTOR & SCREENWRITER', name: 'DUŠAN SOLOMUN' },
    { role: 'DIRECTOR OF PHOTOGRAPHY', name: 'TILO HAUKE' },
    { role: 'SOUND', name: 'OSCAR STIEBITZ' },
    { role: 'EDITOR', name: 'JAN BIHL' },
    { role: 'MUSIC', name: 'EMRE TÜRKER' },
  ];



  return (
    <main className='mt-5'>
      <h1 className='p-6 text-xl md:text-2xl lg:text-3xl text-center text-purple-600 italic'>LOD ON THE MAP!</h1>
      <Carousel autoPlay showStatus={false}>
        <div>
          <img src="https://res.cloudinary.com/dte85mpkw/image/upload/v1689703102/dule/movie-pics/LOD_1.jpg" />
        </div>
        <div>
          <img src="https://res.cloudinary.com/dte85mpkw/image/upload/v1689703892/dule/movie-pics/LOD_2.jpg" />
        </div>
        <div>
          <img src="https://res.cloudinary.com/dte85mpkw/image/upload/v1689704004/dule/movie-pics/LOD_3.jpg" />
        </div>
        <div>
          <img src="https://res.cloudinary.com/dte85mpkw/image/upload/v1689701760/dule/movie-pics/LOD_4.jpg" />
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
        <p className='text-m md:text-xl text-left p-3 italic'>A group of Syrian refugees are walking up the stairs of a high-rise building in Berlin.
          Arriving on the rooftop, they begin to reenact the most dramatic situation they have encountered: crossing the Mediterranean between Turkey and Greece.</p>
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
          <p className='text-sm md:text-base lg:text-xl font-bold'>Ahmad Alkurdi | Yazan Melhem | Dellair Youssef | Myriam Belhaj | Ahmed Roubied </p>
          <p className='flex justify-center text-xs md:text-base p-8 whitespace-pre'>DOCUFICTION            |            D 2019            |            43 min            </p>
        </div>




      </div>

    </main>
  );
}

export default LOD;