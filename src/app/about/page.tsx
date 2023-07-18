"use client"

import React from 'react'
import Image from 'next/image';


type Props = {}

function About(props: Props) {
  return (
    <main className='mt-5'>
      <div className='p-8'>
        <Image
          src="https://res.cloudinary.com/dte85mpkw/image/upload/v1689700678/dule/IMG_3137_byrnxk.jpg"
          alt="Dusan Solomun standing next to a camera, the city of Sarajevo in the background"
          height={400}
          width={500} />
      </div>
    </main>

  )
}

export default About