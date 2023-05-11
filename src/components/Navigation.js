import React from 'react'
import { NavLink } from 'react-router-dom'
const Navigation = () => {
  return (
    <div>
    <ul className='listeNav'>
    <NavLink to="/" className={('NAVLINK')}>
      HOME
    </NavLink>
    <h1 className='titreNavbar'>SHONEN HOLYDAYS</h1>
    <NavLink to="/AboutUs"className={('NAVLINK')}>
      ABOUT US
    </NavLink>
  </ul>
</div>
  )
}

export default Navigation