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
      <h1>Busca por recetas, ingredientes o momentos del día</h1>
      <a href="/RecetaPages" class="btn btn-info" role="button">Link Button</a>
    </Container>

  )
}

export default RecipesPage
