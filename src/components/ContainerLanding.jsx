import React from 'react'
import { useMediaQuery } from 'react-responsive'
import Footer from './Footer'
import NavBar from './NavBar'
import SecondContent from './SecondContent'
import TopContent from './TopContent'
import ("../styles/ContainerLanding.css")

function ContainerLanding() {

  // const isMobile = useMediaQuery({ query: "(max-width: 900px)" });
  // class={!isMobile&&"mx-5 px-5"}
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