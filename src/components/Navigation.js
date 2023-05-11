import React from 'react'
import { NavLink } from 'react-router-dom'
const Navigation = () => {
  return (
    <div className='listNav'>
    <NavLink to="/" className={('NAVLINK')}>
      HOME
    </NavLink>
    <h1 className='titreNavbar'>SHONEN HOLYDAYS</h1>
    <NavLink to="/AboutUs"className={('NAVLINK')}>
      ABOUT US
    </NavLink>
</div>
  )
}

export default Navigation