/* eslint-disable react/no-unescaped-entities */
"use client"

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Link from 'next/link';




const COS = () => {

  const crewMembers = [
    { role: 'DIRECTOR & SCREENWRITER', name: 'DUŠAN SOLOMUN' },
    { role: 'DIRECTOR OF PHOTOGRAPHY', name: 'TILO HAUKE' },
    { role: 'SOUND', name: 'OSCAR STIEBITZ' },
    { role: 'EDITOR', name: 'JAN BIHL' },
    { role: 'MUSIC', name: 'EMRE TÜRKER' },
  ];



  return (
    <main className='mt-5'>
      <h1 className='p-6 text-xl md:text-2xl lg:text-3xl text-center text-purple-600 italic font-bold'>CHILDREN OF SPRING</h1>

      <Carousel autoPlay={true} interval={3000} showStatus={false} showThumbs={false} showArrows={false} infiniteLoop={true}>
        <div>
          <img src="https://res.cloudinary.com/dte85mpkw/image/upload/v1689667250/dule/movie-pics/COS_1.jpg" />
        </div>
        <div>
          <img src="https://res.cloudinary.com/dte85mpkw/image/upload/v1689667242/dule/movie-pics/COS_7.jpg" />
        </div>
        <div>
          <img src="https://res.cloudinary.com/dte85mpkw/image/upload/v1689667248/dule/movie-pics/COS_3.jpg" />
        </div>
        <div>
          <img src="https://res.cloudinary.com/dte85mpkw/image/upload/v1689667243/dule/movie-pics/COS_4.jpg" />
        </div>
        <div>
          <img src="https://res.cloudinary.com/dte85mpkw/image/upload/v1689667242/dule/movie-pics/COS_5.jpg" />
        </div>
        <div>
          <img src="https://res.cloudinary.com/dte85mpkw/image/upload/v1689667242/dule/movie-pics/COS_6.jpg" />
        </div>
        <div>
          <img src="https://res.cloudinary.com/dte85mpkw/image/upload/v1689667249/dule/movie-pics/COS_2.jpg" />
        </div>
        <div>
          <img src="https://res.cloudinary.com/dte85mpkw/image/upload/v1689667240/dule/movie-pics/COS_8.jpg" />
        </div>
      </Carousel>



      <div className='flex flex-col p-3'>
        <p className='text-m md:text-xl text-left p-3 italic'>A group of Syrian refugees are walking up the stairs of a high-rise building in Berlin.
          Arriving on the rooftop, they begin to reenact the most dramatic situation they have encountered: crossing the Mediterranean between Turkey and Greece.<Link className='text-sm md:text-base lg:text-xl  text-purple-600' href='https://vimeo.com/manage/videos/325527416' target='_blank'> WATCH TRAILER</Link></p>
        <div className='flex justify-center p-8'>
          <table className='table-auto text-left p-5 leading-5'>
            <tbody className='text-sm md:text-base lg:text-xl'>
              {crewMembers.map((member) => (
                <tr key={member.role}>
                  <td className='pr-12 p-1 '>{member.role}</td>
                  <td className='p-1 font-bold'>{member.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className='flex flex-col text-center p-3'>
          <p className='text-sm md:text-base lg:text-xl p-3'>CAST</p>
          <p className='text-sm md:text-base lg:text-xl font-bold'>Ahmad Alkurdi | Yazan Melhem | Dellair Youssef | Myriam Belhaj | Ahmed Roubied | Usama Salama | Zia Alamir Daghstani | Basher Torkmani | Ovice Torkmani | Mohammad Alhussain | Lamia Baddour | Rafika Ajlani | Isra Ajlani | Samar Ajlani | Omar Ajlani | Ghaze Nakash | Radwan Zarka | Milan Radeta | Simon Meyer | Ludwig Hülk | Matjaz Juren | Bilge Redzep | Majid Albuni | Samar Albuni | Ali Erkan Özdemir | Ali Awada</p>
          <p className='flex justify-center text-xs md:text-base p-10 whitespace-pre'>DOCUFICTION            |            DE 2019            |            43 min            </p>
        </div>




      </div>

    </main>
  );
}

export default COS;