import React from 'react';
import Image from 'next/image'


type Props = {
  src: string | null;

  closeModal: () => void;
}

const Modal: React.FC<Props> = ({ src, closeModal }) => {
  if (!src) return null;

  return (

    <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex justify-center items-center' onClick={closeModal}>
      <div style={{ height: '90vh', width: '100%', position: 'relative' }}>
        <Image
          fill
          src={src}
          alt=''
          loading='eager'
          onClick={closeModal}
          objectFit="contain"
        />
      </div>
    </div>
  )
}

export default React.memo(Modal);