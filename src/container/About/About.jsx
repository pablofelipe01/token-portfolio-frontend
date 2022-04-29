import React, { useState, useEffect} from 'react'
import { motion } from 'framer-motion'
import './About.scss'

const abouts = [
  { title: 'Software Developer', description: 'I am a Grate developer', imgUrl: ''},
  { title: 'Blockchain Developer', description: 'I am a Grate developer', imgUrl: ''},
  { title: 'Tokenization Consultant', description: 'I am a Grate developer', imgUrl: ''},
  { title: 'Smart Contracts', description: 'I am a Grate developer', imgUrl: ''},
]

const About = () => {
  return (
    <>
    <h2 className="head-text">
      I know That
      <span>Good Design</span>
      <br />
      Means 
      <span>Good Business</span>

    </h2>

    <div className="app__profiles">
      {abouts.map((about, index) => (
        <motion.div
          whileInView={{ opacity: 1 }}
          whileInHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, type: 'tween' }}
          className='app__profile-item'
          key={about.title + index}
        
        
        >
          <img src={about.imgUrl}  alt={about.title} />
          <h2 className='bold-text' style={{ marginTop: 20 }}>{about.title} </h2>
          <p className='p-text' style={{ marginTop: 10 }}>{about.description} </p>

        </motion.div>
      ))}


    </div>
    
    
    
    
    </>
  )
}

export default About