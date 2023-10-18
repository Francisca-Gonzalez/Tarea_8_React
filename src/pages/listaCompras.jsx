import React from 'react'

import NavBar from '../components/nav_bar'
import Container from '@mui/material/Container';

export const ShopListPage = () => {

  return (
    <Container>
      <NavBar />
      <Container sx={"display: flex; margin-top: 150px"}>
        <div>
          <h1>Aquí va tu lista de compras de hoy!</h1>
        </div>
      </Container>
    </Container>
  )
}

export default ShopListPage