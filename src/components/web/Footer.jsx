import { Facebook, Linkedin, Twitter } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <div className='w-full h-[8vh] flex flex-row justify-center items-center bg-blue-500 border-b-4 border-primary '>
    <div className='h-full w-3/4 flex flex-row  items-center '>
       ©️ skyscraper.io 2024
      </div>
    <div className='h-full w-1/4 flex flex-row justify-center items-center gap-10'>
       <a href='google.com' target='_blank'>
            <Facebook />
       </a>
       <a href='google.com' target='_blank'>
            <Twitter />
       </a>
       {/* <a href='google.com' target='_blank'>
            <Linkedin />
       </a> */}
      </div>
      
    </div>
  )
}

export default Footer
