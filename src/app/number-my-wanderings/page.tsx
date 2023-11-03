/* eslint-disable react/no-unescaped-entities */
"use client"

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Link from 'next/link';




const NMW = () => {

  const crewMembers = [
    { role: 'DIRECTOR & SCREENWRITER', name: 'DUŠAN SOLOMUN' },
    { role: 'DIRECTOR OF PHOTOGRAPHY', name: 'TILO HAUKE' },
    { role: 'SOUND', name: 'OSCAR STIEBITZ' },
    { role: 'EDITORS', name: 'JANN ANDEREGG / JAN BIHL' },
    { role: 'MUSIC', name: 'EMRE TÜRKER' },
  ];



  return (
    <main className='mt-5'>
      <h1 className='p-6 text-xl md:text-2xl lg:text-3xl text-center text-purple-600 italic font-bold'>NUMBER MY WANDERINGS</h1>
      <Carousel autoPlay={true} interval={3000} showStatus={false} showThumbs={false} showArrows={false} infiniteLoop={true} showIndicators={false}>
        <div>
          <img src="https://res.cloudinary.com/dte85mpkw/image/upload/v1689581267/dule/movie-pics/ZDWMF_03.jpg" />
        </div>
        <div>
          <img src="https://res.cloudinary.com/dte85mpkw/image/upload/v1689581288/dule/movie-pics/ZDWMF_06.jpg" />
        </div>
        <div>
          <img src="https://res.cloudinary.com/dte85mpkw/image/upload/v1689581312/dule/movie-pics/ZDWMF_09.jpg" />
        </div>
        <div>
          <img src="https://res.cloudinary.com/dte85mpkw/image/upload/v1689581283/dule/movie-pics/ZDWMF_05.jpg" />
        </div>
        <div>
          <img src="https://res.cloudinary.com/dte85mpkw/image/upload/v1689581258/dule/movie-pics/ZDWMF_02.jpg" />
        </div>
        <div>
          <img src="https://res.cloudinary.com/dte85mpkw/image/upload/v1689581334/dule/movie-pics/ZDWMF_14.jpg" />
        </div>
        <div>
          <img src="https://res.cloudinary.com/dte85mpkw/image/upload/v1689581295/dule/movie-pics/ZDWMF_07.jpg" />
        </div>
        <div>
          <img src="https://res.cloudinary.com/dte85mpkw/image/upload/v1689581275/dule/movie-pics/ZDWMF_04.jpg" />
        </div>
      </Carousel>
      <div className='flex flex-col p-3'>
        <p className='text-m md:text-xl text-left p-3 italic'>In a church, a priest receives a group of refugees. In a bizarre and exaggerated way, the refugees are confronted with the bureaucracy that german institutions operate. The church serves as a hodgepodge of the most diverse institutions. Finally, the workers in this institutional mechanism turn out to be victims of the apparatus.<Link className='text-sm md:text-base lg:text-xl  text-purple-600' href='https://vimeo.com/manage/videos/591160328' target='_blank'> WATCH TRAILER</Link></p>




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
          <p className='text-sm md:text-base lg:text-xl font-bold'>Selin Kavak | Johannes Völkel | Florian Denk | Vera Maria Kremers | Jelena Bosanac | Yazan Melhem | Omar Crow | Cem Sultan Ungan
            Vera Streicher | Loay Alhamedi | Gizem Akman | Rabi Hanani | Khaled Rezek | Ilker Abay | Volkan Türeli | Matjaz Zaza Juren</p>



        </div>




      </div>

    </main>
  );
}

export default NMW;