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
      {/* <div className="p-4 font-bold h-4/5 w-3/4 bg-slate-700"> */}

      {/* <div className="relative w-full h-full"> */}

      {/* <button onClick={closeModal} className="absolute top-5 right-5 z-10 flex items-center justify-center bg-white h-8 w-8 rounded-full p-2">X</button> */}
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