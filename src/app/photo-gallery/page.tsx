"use client"

import { url } from 'inspector'
import React, { useState } from 'react'
import Image from 'next/image'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import Modal from '../../components/Modal'


type Props = {}

const animalPics = [
  { name: 'nap', url: 'https://res.cloudinary.com/dte85mpkw/image/upload/v1692612088/dule/gallery/nap.jpg', height: 350, width: 500 },
  { name: 'sunday stroll', url: 'https://res.cloudinary.com/dte85mpkw/image/upload/v1692611838/dule/gallery/sunday-stroll.jpg', height: 450, width: 350 },

  { name: 'beach life', url: 'https://res.cloudinary.com/dte85mpkw/image/upload/v1692612273/dule/gallery/beach-dogs.jpg', height: 350, width: 500 },
  { name: 'the sky is theirs', url: 'https://res.cloudinary.com/dte85mpkw/image/upload/v1692612328/dule/gallery/the-sky-is-theirs.jpg', height: 350, width: 500 },
  { name: 'whats next', url: 'https://res.cloudinary.com/dte85mpkw/image/upload/v1692611927/dule/gallery/whats-next.jpg', height: 450, width: 350 },

  { name: 'bird watch', url: 'https://res.cloudinary.com/dte85mpkw/image/upload/v1692611579/dule/gallery/bird%20watch.jpg', height: 450, width: 350 },

]

function PhotoGallery(props: Props) {

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <main className='mt-10 bg-slate-700'>
      {modalOpen && <Modal src={selectedImage} closeModal={() => setModalOpen(false)} />}
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry>
          {animalPics.map((animal) => (
            <div key={animal.name} className='flex justify-center p-2'>

              <Image
                height={animal.height}
                width={animal.width}
                src={animal.url}
                alt=''
                onClick={() => {
                  setSelectedImage(animal.url);
                  setModalOpen(true)
                }}
              />
            </div>

          ))}

        </Masonry>
      </ResponsiveMasonry>



    </main >
  )
}

export default PhotoGallery