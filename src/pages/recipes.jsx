import React from 'react'
import { Button, Container } from '@mui/material'
import { FaSearch } from "react-icons/fa";

import SearchBar from "../components/search_bar";
import NavBar from '../components/nav_bar'
import LogoUSM from '../assets/usm.png'

export const RecipesPage = () => {
  const url = "https://i.blogs.es/927bbe/salsa-pasta/840_560.jpg"
  return (
    <Container>
      <NavBar />
      <SearchBar />
      <h1>Busca por recetas, ingredientes o momentos del día</h1>
      <div style={{display: 'flex', flexDirection: 'row', backgroundColor: '#E3FFC8', padding: '25px', borderRadius: '15px', alignItems: 'flex-start'}}>
        <img src={url} style={{width: '150px', height: '150px', marginRight: '25px', borderRadius: '15px'}}/>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <a href="/receta" class="btn btn-info" role="button" style={{textDecoration: 'none'}}>FIDEOS CON SALSA BOLOÑESA</a>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        
      </div>
      
    </Container>

  )
}

export default RecipesPage
