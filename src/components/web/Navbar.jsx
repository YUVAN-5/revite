import React from 'react'
import { NavLink } from 'react-router-dom'
import { ModeToggle } from '../ModeToggle'

const Navbar = () => {
    const Linksdata=[
        {
            title:'HOME',
            link:'/'
        },
        {
            title:'LOGIN',
            link:'/login'
        },
        {
            title:'REGISTER',
            link:'/register'
        }
        
    ]
  return (
    <div className='w-full h-[8vh] flex flex-row justify-center items-center bg-blue-500 border-b-4 border-primary letter-spacing '>
    <div className='h-full w-1/4 flex flex-row justify-center items-center text-2xl '>
        SKYSCRAPER
      </div>
    <div className='h-full w-3/4 flex flex-row justify-center items-center gap-20 '>
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

