import React from 'react'
import Footer from './Footer'
import NavBar from './NavBar'
import SecondContent from './SecondContent'
import TopContent from './TopContent'
import ("../styles/ContainerLanding.css")

function ContainerLanding() {


  return (
    <div id='container' >
      <NavBar/>
      <div >
      <TopContent/>
      <SecondContent/>
      
      </div>
     <Footer/> 
    </div>
  )
}

export default ContainerLanding