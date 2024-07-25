import React from 'react'
import '../../assets/css/Home.css'
import Landing from '../../assets/img/land.avif'

const Home = () => {
  return (
   <>
   <div className='image-container '>
    <div className='text-overlay' >
      
    <img src={Landing} alt='Login' className='w-screen ' />
    REPRESENTING THE WORLD'S FINEST REAL ESTATE
    
    </div>
   </div>
   </>
  )
}

export default Home
