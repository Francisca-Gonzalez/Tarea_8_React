import React from 'react'
import { NavLink } from 'react-router-dom'
import LogoMenu from '../assets/menu_familiar.png'

export const NavBar = () => {
  return (
    <nav className='nav-bar'>
      <img src={LogoMenu} height={100} alt='logo usm' /><br />
      <NavLink
        className={({ isActive }) => `nav-bar__link ${isActive ? 'nav-bar__link--active' : ''}`}
        to='/'
      >
        Página de inicio
      </NavLink>
      <NavLink
        className={({ isActive }) => `nav-bar__link ${isActive ? 'nav-bar__link--active' : ''}`}
        to='/internal'
      >
        Página Interna
      </NavLink>
    </nav>
  )
}

export default NavBar
