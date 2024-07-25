import React from 'react'
import { NavLink } from 'react-router-dom'
import { ModeToggle } from '../ModeToggle'

const Navbar = () => {
    const Linksdata=[
        {
            title:'Home',
            link:'/'
        },
        {
            title:'Login',
            link:'/login'
        },
        {
            title:'Register',
            link:'/register'
        }
        
    ]
  return (
    <div className='w-full h-[8vh] flex flex-row justify-center items-center bg-blue-500 border-b-4 border-primary font-mono '>
    <div className='h-full w-1/4 flex flex-row justify-center items-center font-thin text-2xl '>
        SKYSCRAPER
      </div>
    <div className='h-full w-3/4 flex flex-row justify-center items-center gap-20 font-bold'>
      {
        Linksdata.map((data,index)=>(
            <li key={index} className='list-none'>
                <NavLink to={data.link}>

                    {data.title}
                </NavLink>

            </li>
        ))
      }
      <ModeToggle/>

      </div>
    </div>
  )
}

export default Navbar

