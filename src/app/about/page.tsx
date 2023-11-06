"use client"

import React from 'react'
import Image from 'next/image';
import Link from 'next/link';


type Props = {}

function About(props: Props) {
  return (
    <main className='mt-5'>
      <div className='flex justify-center w-screen'>
        <section className='grid grid-flow-row lg:grid-flow-col'>
          <div className='p-8'><Image
            src="https://res.cloudinary.com/dte85mpkw/image/upload/v1689700678/dule/IMG_3137_byrnxk.jpg"
            alt="Dusan Solomun standing next to a camera, the city of Sarajevo in the background"
            height={400}
            width={500} />
            <div className=' mt-5'>
              <h1 className='text-lg xl:text-xl text-purple-500'>CONTACT</h1>
              <h2 className='text-base xl:text-lg'>info@dusansolomun.de</h2>
              <h2 className='text-base xl:text-lg'>+49 157 74885135</h2>
            </div></div>

          <div className='p-8 mr-8 text-justify lg:text-lg break-words hyphens-auto' lang="eng">
            <div> Dušan Solomun is a Berlin-based director, cinematographer and photographer. He graduated from FH Dortmund with a major in film and television camera and documentary filmmaking. During his studies Solomun spent a year at the Bezalel Arts Academy in Jerusalem. There, he produced his debut full length documentary <Link className='text-purple-600' href='/lod-on-the-map'>LOD ON THE MAP!</Link> about four musicians from a small town in the heart of Israel, dreaming of a career. The film premiered at the Israel Film Festival Berlin in 2012.</div>

            <div className='mt-5'> Upon returning to Berlin, Solomun created several film and theater workshops for refugees.
              In 2019 Solomun completed his docufiction <Link className='text-purple-600' href='/children-of-spring'>CHILDREN OF SPRING</Link>. The movie features refugees reenacting the most dangerous part of their journey to Europe: The crossing of the Mediterranean Sea. Children of Spring screened at various international film festivals including Beldocs, FilmFestival Cottbus and Buffalo IFF. It won the mid-length feature film main prize at both the Salto Independent Film Festival and the Conception Independent Film Awards.</div>

            <div className='mt-5'>Solomun&apos;s first feature film <Link className='text-purple-600' href='number-my-wanderings'>NUMBER MY WANDERINGS</Link>,in collaboration with Cinematographer <Link className='text-purple-600' href='https://www.tilohauke.de/' target='_blank' >TILO HAUKE</Link>, premiered in spring 2023 at the <Link className='text-purple-600' href='https://achtungberlin.de/zaehle-die-wege-meiner-flucht/' target='_blank'>ACHTUNG BERLIN FILM FESTIVAL.</Link></div>

          </div>



        </section>

      </div>
    </main>

  )
}

export default About