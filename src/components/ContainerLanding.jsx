import React from 'react'
import Footer from './Footer'
import NavBar from './NavBar'
import SecondContent from './SecondContent'
import TopContent from './TopContent'

function ContainerLanding() {
  return (
    <div id='container' class="">
      <NavBar/>
      <TopContent/>
      <SecondContent/>
      <Footer/>
    </div>
  )
}

export default ContainerLanding