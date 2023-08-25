"use client"

import { url } from 'inspector'
import React, { useState } from 'react'
import Image from 'next/image'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import Modal from '../../components/Modal'


type Props = {}

const pics = [
  { name: 'seek and hide', url: 'https://res.cloudinary.com/dte85mpkw/image/upload/v1692971132/dule/gallery/seek-and-hide.jpg', height: 350, width: 500 },

  { name: 'eggs and phone', url: 'https://res.cloudinary.com/dte85mpkw/image/upload/v1692972574/dule/gallery/eggs_and_phone.jpg', height: 450, width: 350 },

  { name: 'a taste of berlin', url: 'https://res.cloudinary.com/dte85mpkw/image/upload/v1692972370/dule/gallery/a_taste_of_berlin.jpg', height: 450, width: 350 },

  { name: 'total damage', url: 'https://res.cloudinary.com/dte85mpkw/image/upload/v1692972894/dule/gallery/total_damage.jpg', height: 450, width: 350 },

  { name: 'take a pic', url: 'https://res.cloudinary.com/dte85mpkw/image/upload/v1692973209/dule/gallery/take_a_pic.jpg', height: 350, width: 500 },

  { name: 'sunday stroll', url: 'https://res.cloudinary.com/dte85mpkw/image/upload/v1692973543/dule/gallery/sunday_stroll.jpg', height: 450, width: 350 },

  { name: 'fragments', url: 'https://res.cloudinary.com/dte85mpkw/image/upload/v1692973898/dule/gallery/fragments.jpg', height: 450, width: 350 },

  { name: 'nap', url: 'https://res.cloudinary.com/dte85mpkw/image/upload/v1692974177/dule/gallery/nap.jpg', height: 350, width: 500 },

  { name: 'jump to the future', url: 'https://res.cloudinary.com/dte85mpkw/image/upload/v1692612176/dule/gallery/jump-to-the-future.jpg', height: 350, width: 500 },

  { name: 'the sky is theirs', url: 'https://res.cloudinary.com/dte85mpkw/image/upload/v1692612328/dule/gallery/the-sky-is-theirs.jpg', height: 350, width: 500 },

  { name: 'fragments2', url: 'https://res.cloudinary.com/dte85mpkw/image/upload/v1692974394/dule/gallery/fragments2.jpg', height: 450, width: 350 },

  { name: 'bird watch', url: 'https://res.cloudinary.com/dte85mpkw/image/upload/v1692974549/dule/gallery/bird-watch.jpg', height: 450, width: 350 },

]

function PhotoGallery(props: Props) {

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <main className='mt-10 bg-slate-700'>
      {modalOpen && <Modal src={selectedImage} closeModal={() => setModalOpen(false)} />}
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry>
          {pics.map((pic) => (
            <div key={pic.name} className='flex justify-center p-2'>

              <Image
                height={pic.height}
                width={pic.width}
                src={pic.url}
                alt=''
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  setSelectedImage(pic.url);
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