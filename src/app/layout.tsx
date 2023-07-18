import './globals.css';

import React from 'react';
import Navbar from '@/components/Navbar';


const myFont = {
  fontFamily: 'Roboto',
  src: `url('../fonts/RobotoMono-ExtraLight.ttf')`
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

