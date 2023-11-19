import React from 'react'

function About({image, text}) {
  return (
    <div>
      <aside>
        <img src={image} alt='blog blog' />
        <p>{text}</p>
      </aside>
    </div>
  )
}

export default About