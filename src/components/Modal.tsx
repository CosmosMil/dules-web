import React from 'react';
import Image from 'next/image'

type Props = {
  src: string | null;

  closeModal: () => void;
}

const Modal: React.FC<Props> = ({ src, closeModal }) => {
  if (!src) return null;

  return (
    <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center'>
      <div className="p-4 font-bold h-4/5 w-3/4">

        <div className="relative w-full h-full">
          <Image src={src} layout='fill' objectFit='contain' alt='' />

          <button onClick={closeModal} className="absolute top-0 right-0 z-10 bg-white p-1">X</button>
        </div>

      </div>
    </div>
  )
}

export default Modal