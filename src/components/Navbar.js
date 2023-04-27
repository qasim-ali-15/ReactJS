import React from 'react'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className='navbar__text'>
            <div className='logo'><br/><br/><br/><br/><br/><br/><br/><img src='/img/logo192.png' alt='logo' /></div>
            <ul className='navbar__ul'>
                <li><a href='./Header.js'>Home</a></li>
                <li><a href='./Courses.js'>Courses</a></li>
                <li><a href='./About.js'>About</a></li>
                <li><a href=''>Contacts</a></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar