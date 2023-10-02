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

  { name: 'foggy alex', url: 'https://res.cloudinary.com/dte85mpkw/image/upload/v1696236567/dule/gallery/alex%20im%20nebel.jpg', height: 450, width: 350 },


  { name: 'sheep', url: 'https://res.cloudinary.com/dte85mpkw/image/upload/v1696193053/dule/gallery/sheep.jpg', height: 500, width: 1000 },

  { name: 'blue socks', url: 'https://res.cloudinary.com/dte85mpkw/image/upload/v1696235762/dule/gallery/blue-socks.jpg', height: 450, width: 350 },

  { name: 'fragments3', url: 'https://res.cloudinary.com/dte85mpkw/image/upload/v1696227655/dule/gallery/fragments3.jpg', height: 450, width: 350 },

  { name: 'playing', url: 'https://res.cloudinary.com/dte85mpkw/image/upload/v1692959652/dule/gallery/playing-with-the-world.jpg', height: 350, width: 500 },

  { name: 'which way', url: 'https://res.cloudinary.com/dte85mpkw/image/upload/v1696228338/dule/gallery/which-way.jpg', height: 450, width: 350 },

  { name: 'when I grow up', url: 'https://res.cloudinary.com/dte85mpkw/image/upload/v1696251427/dule/gallery/when-I-grow-up.jpg', height: 350, width: 500 },

  { name: 'kids tell', url: 'https://res.cloudinary.com/dte85mpkw/image/upload/v1692959536/dule/gallery/kids-tell.jpg', height: 350, width: 500 },

  { name: 'fallsucht', url: 'https://res.cloudinary.com/dte85mpkw/image/upload/v1696253802/dule/gallery/fallsucht.jpg', height: 350, width: 500 },



  { name: 'a drop', url: 'https://res.cloudinary.com/dte85mpkw/image/upload/v1692959405/dule/gallery/a-drop.jpg', height: 350, width: 500 },

  { name: 'mars', url: 'https://res.cloudinary.com/dte85mpkw/image/upload/v1692975311/dule/gallery/mars.jpg', height: 450, width: 350 },

  { name: 'police was here', url: 'https://res.cloudinary.com/dte85mpkw/image/upload/v1696253513/dule/gallery/police-was-here.jpg', height: 350, width: 500 },

  { name: 'bird watch', url: 'https://res.cloudinary.com/dte85mpkw/image/upload/v1696250392/dule/gallery/bird-watch.jpg', height: 450, width: 350 },

  { name: 'ship', url: 'https://res.cloudinary.com/dte85mpkw/image/upload/v1692960867/dule/gallery/somewhere-in-the-ocean.jpg', height: 450, width: 350 },

  { name: 'stairs to past', url: 'https://res.cloudinary.com/dte85mpkw/image/upload/v1696232038/dule/gallery/stairs-to-past.jpg', height: 450, width: 350 },

  { name: 'whats next', url: 'https://res.cloudinary.com/dte85mpkw/image/upload/v1692975350/dule/gallery/whats-next.jpg', height: 450, width: 350 },

  { name: 'moon is in place', url: 'https://res.cloudinary.com/dte85mpkw/image/upload/v1696252243/dule/gallery/moon-is-in-place.jpg', height: 450, width: 350 },

  { name: 'weary', url: 'https://res.cloudinary.com/dte85mpkw/image/upload/v1692960029/dule/gallery/weary.jpg', height: 350, width: 500 },

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
            <div key={pic.name} className='flex justify-center p-4'>

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