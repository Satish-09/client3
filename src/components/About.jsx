import React from 'react'
import {Link , Outlet} from 'react-router-dom' ;

const About = () => {
  return (
    <>
    <div>About page</div>
    <nav>
    <Link to='Address'>Address</Link> 
    <Link to='Profile'>Profile</Link>
    </nav>
    <Outlet />
    </>
  )
}

export default About