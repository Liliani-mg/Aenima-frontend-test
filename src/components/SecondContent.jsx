import React from 'react'
import BlogCards from './BlogCards'
import Tendencias from './Tendencias'
import ("../styles/Content.css")

function SecondContent() {
  return (
    <div id="container-second-content" class="d-flex flex-column">
      <Tendencias/>
      <BlogCards/>
    </div>
  )
}

export default SecondContent