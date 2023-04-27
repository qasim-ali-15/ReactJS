//Shortcut -> rafce

import React from 'react'
import Navbar from './Navbar'

const Header = () => {
  return<div className='banner'>
    <Navbar />
    <div className='banner__content'>
        <div className='container'>
            <div className='banner__text'>
            <h3>Welcome To Academia</h3>
            <h1>Best Online Education Expertise</h1>
            <p>Learn About your field</p>
            <div className='banner__btn'>
                <a href='' className='btn btn-smart'>GET STARTED NOW!</a>
                <a href='' className='btn btn-smart2'>VIEW COURSES !</a>
            </div>
            </div>
        </div>
    </div>
  </div>
}

export default Header


