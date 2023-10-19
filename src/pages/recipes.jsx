import React from 'react'
import { Button, Container } from '@mui/material'
import { FaSearch } from "react-icons/fa";

import SearchBar from "../components/search_bar";
import NavBar from '../components/nav_bar'
import LogoUSM from '../assets/usm.png'

export const RecipesPage = () => {
  const url = "https://i.blogs.es/927bbe/salsa-pasta/840_560.jpg"
  const url2 = "https://tofuu.getjusto.com/orioneat-local/resized2/zRZZx7uobtDFtm69o-1200-1200.webp"
  const url3="https://cdn0.recetasgratis.net/es/posts/6/2/7/avena_con_leche_73726_600_square.jpg"
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
      <div style={{display: 'flex', flexDirection: 'row', backgroundColor: '#E3FFC8', padding: '25px', borderRadius: '15px', alignItems: 'flex-start'}}>
        <img src={url2} style={{width: '150px', height: '150px', marginRight: '25px', borderRadius: '15px'}}/>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <a href="/receta" class="btn btn-info" role="button" style={{textDecoration: 'none'}}>POLLO CON PAPAS</a>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        
        
      </div>
      <div style={{display: 'flex', flexDirection: 'row', backgroundColor: '#E3FFC8', padding: '25px', borderRadius: '15px', alignItems: 'flex-start'}}>
        <img src={url3} style={{width: '150px', height: '150px', marginRight: '25px', borderRadius: '15px'}}/>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <a href="/receta" class="btn btn-info" role="button" style={{textDecoration: 'none'}}>AVENA</a>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        
        
      </div>
      
    </Container>

  )
}

export default RecipesPage
