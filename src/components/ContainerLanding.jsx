import React from 'react'
import { useMediaQuery } from 'react-responsive'
import Footer from './Footer'
import NavBar from './NavBar'
import SecondContent from './SecondContent'
import TopContent from './TopContent'

function ContainerLanding() {

  const isMobile = useMediaQuery({ query: "(max-width: 900px)" });
  return (
    <div id='container' class="">
      <NavBar/>
      <div class={!isMobile&&"mx-5 px-5"}>
      <TopContent/>
      <SecondContent/>
      
      </div>
     <Footer/> 
    </div>
  )
}

export default ContainerLanding