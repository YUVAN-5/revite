import React from 'react'
import '../../assets/css/Home.css'
import Landing from '../../assets/img/metal.avif'

const Home = () => {
  return (
   <>
    <div className="home-container">
      <div className="image-container">
        <img src={Landing} alt="Description of image" className="background-image" />
        <div className="centered-text">REPRSENTING THE WORLD'S FINEST REAL ESTATE</div>
      </div>
    </div>

   </>
  )
}

export default Home
