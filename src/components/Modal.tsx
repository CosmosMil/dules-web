import React from 'react';
import Image from "next/legacy/image"

type Pic = {
  name: string;
  url: string;
  height: number;
  width: number;
}


type Props = {
  src: string | null;
  selectedImage: number | null;
  pics: Pic[];
  closeModal: () => void;
  goToNext: () => void;
  goToPrevious: () => void;

}

const Modal: React.FC<Props> = ({ src, closeModal, goToNext, goToPrevious, selectedImage, pics }) => {
  if (!src) return null;

  const stopPropagation = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (

    <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex justify-center items-center z-50' onClick={closeModal}>
      {selectedImage && selectedImage > 0 && (<button className='text-white text-3xl w-8 h-8 md:w-16 md:h-16'
        onClick={(e) => { goToPrevious(); stopPropagation(e); }}>
        &#8592;</button>)}

      <div style={{ height: '90vh', width: '100%', position: 'relative' }}>
        <Image
          layout='fill'
          src={src}
          alt=''
          loading='eager'
          onClick={closeModal}
          objectFit="contain"
        />
      </div>
      {selectedImage && selectedImage >= 0 && selectedImage < pics.length - 1 && (<button className=' text-white text-3xl w-8 h-8 md:w-16 md:h-16' onClick={(e) => { goToNext(); stopPropagation(e); }}>
        &#8594;
      </button>)}

    </div>
  )
}

export default React.memo(Modal);