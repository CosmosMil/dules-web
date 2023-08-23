"use client"

import { url } from 'inspector'
import React from 'react'
import Image from 'next/image'


type Props = {}

const animalPics = [
  { name: 'nap', url: 'https://res.cloudinary.com/dte85mpkw/image/upload/v1692612088/dule/gallery/nap.jpg' },
  { name: 'beach life', url: 'https://res.cloudinary.com/dte85mpkw/image/upload/v1692612273/dule/gallery/beach-dogs.jpg' },
  { name: 'the sky is theirs', url: 'https://res.cloudinary.com/dte85mpkw/image/upload/v1692612328/dule/gallery/the-sky-is-theirs.jpg' },
  { name: 'sunday stroll', url: 'https://res.cloudinary.com/dte85mpkw/image/upload/v1692611838/dule/gallery/sunday-stroll.jpg' },
  { name: 'bird watch', url: 'https://res.cloudinary.com/dte85mpkw/image/upload/v1692611579/dule/gallery/bird%20watch.jpg' },
  { name: 'whats next', url: 'https://res.cloudinary.com/dte85mpkw/image/upload/v1692611927/dule/gallery/whats-next.jpg' }
]

function PhotoGallery(props: Props) {
  return (
    <main className='mt-10 ml-5'>
      <div className="flex flex-wrap justify-center ">
        {animalPics.map((animal) => (
          <Image
            height={300}
            width={450}
            style={{ padding: 8 }}
            key={animal.name}
            src={animal.url}
            alt='' >
          </Image>

        ))}

      </div>
    </main>
  )
}

export default PhotoGallery