import './globals.css';

import React from 'react';
import Navbar from '@/components/Navbar';


const myFont = {
  fontFamily: 'Playfair',
  src: `url('../fonts/SpaceGrotesk.ttf)`
}


export const metadata = {
  title: 'Dusan Solomun',
  description: 'cinematography',
}


const Layout = ({ children }: { children: React.ReactNode }) => {
  return (

    <html>
      <body style={myFont}>
        <Navbar />
        {children}

      </body>


    </html>

  )
}
export default Layout

