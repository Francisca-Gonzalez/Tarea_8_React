import React from 'react'

import NavBar from '../components/nav_bar'
import Container from '@mui/material/Container';

export const HomePage = () => {
  return (
    <Container>
      <NavBar />
      <Container sx={"display: flex; margin-top: 150px"}>
        <div>
          <h1>Hola uwu</h1>
        </div>
      </Container>
    </Container>
  )
}

export default HomePage
