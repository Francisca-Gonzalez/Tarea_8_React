import React from 'react'
import { Button, Container } from '@mui/material'
import { FaSearch } from "react-icons/fa";

import SearchBar from "../components/search_bar";
import NavBar from '../components/nav_bar'
import LogoUSM from '../assets/usm.png'





export const RecipesPage = () => {
  return (
    <Container>
      <NavBar />
      
      <SearchBar />
    </Container>
    
  )
}

/*export const RecipesPage = () => {
  return (
    <div className='page'>
      <h1 className='page__title'>Frontend Sample App</h1>
      <NavBar />
      <h2>Página Interna</h2>
      <img src={LogoUSM} height={100} alt='logo usm' /><br />
      <Button variant='contained'>Material UI Button</Button>
      <SearchBar />
    </div>
  )
}*/

export default RecipesPage
