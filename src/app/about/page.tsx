"use client"

import React from 'react'
import Image from 'next/image';
import Link from 'next/link';


type Props = {}

function About(props: Props) {
  return (
    <main className='mt-5'>
      <div className='flex justify-center w-screen'>
        <section className='grid grid-flow-row xl:grid-flow-col'>
          <div className='p-8'><Image
            src="https://res.cloudinary.com/dte85mpkw/image/upload/v1689700678/dule/IMG_3137_byrnxk.jpg"
            alt="Dusan Solomun standing next to a camera, the city of Sarajevo in the background"
            height={400}
            width={500} /></div>

          <div className='p-8 text-justify lg:text-lg'>
            <div> Dušan Solomun is a Berlin-based director, cinematographer and photographer. He graduated from FH Dortmund with a major in film and television camera and documentary filmmaking. During his studies at the FH Dortmund Solomun spent one year at the Bezalel Arts Academy in Jerusalem, where he realized his first documentary <Link className='text-purple-600' href='/lod-on-the-map'>LOD ON THE MAP!</Link> about two musicians from a small town in the heart of Israel, dreaming about a career. The film premiered at the Israel Film Festival Berlin in 2012.</div>

            <div className='mt-5'> Back in Berlin Solomun developed several film and theater workshops for refugees together with Syrian director Rafat Alzakout.
              In 2019 Solomun finalized his docufiction <Link className='text-purple-600' href='/children-of-spring'>CHILDREN OF SPRING</Link>, with refugees reenacting the most dangerous situation of their journey to Europe: The crossing of the Mediterranean Sea. Children of Spring screened at various international film festivals including Beldocs, FilmFestival Cottbus, Buffalo IFF and won the mid-length feature film main prize at Salto Independent Film Festival and at the Conception Independent Film Awards.</div>

            <div className='mt-5'>Solomuns first feature film <Link className='text-purple-600' href='number-my-wanderings'>NUMBER MY WANDERINGS</Link> (in Collaboration with Cinematographer <a href='https://www.tilohauke.de/' >TILO HAUKE</a>) premiered in spring 2023 at the Achtung Berlin Film Festival.</div>

          </div>

        </section>
        {/* <section className='grid text-justify grid-flow-row xl:grid-flow-col max-w-max'>
          

         
        </section> */}
      </div>
    </main>

  )
}

export default About