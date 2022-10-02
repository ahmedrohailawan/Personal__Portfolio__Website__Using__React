import React from 'react'
import './ContactBox.css'

import { useEffect } from 'react'
import Aos from "aos"
import 'aos/dist/aos.css'

function ContactBox(props) {
  useEffect(() =>{
    Aos.init({
      duration : 2000
    })
  },[])
  return (
    <>
      <div className="box" data-aos = {props.animation}>
          <div className="center">
              <a className='center' href={props.link} target="_blank" rel="noopener noreferrer"><i className={props.class}></i></a>
          </div>
          <div className="center">
              <p className='center'>{props.name}</p>
          </div>
      </div>
    </>
  )
}

export default ContactBox
