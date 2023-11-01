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
      <img
        src={src}
        alt=''

        onClick={closeModal}
        style={{ cursor: 'pointer', maxWidth: '100%', maxHeight: '85vh' }}
      />




    </div>




  )
}

export default React.memo(Modal);