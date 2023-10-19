import React from 'react'

import NavBar from '../components/nav_bar'
import Container from '@mui/material/Container';

export const ShopListPage = () => {
  const Ingredientes = [
    "200 gramos de harina",
    "100 gramos de azúcar",
    "2 huevos",
    "1 taza de leche",
    "2 cucharadas de aceite de oliva",
    "1 cucharadita de sal",
    "Pimienta al gusto",
    "3 tomates",
    "1 cebolla",
    "2 dientes de ajo",
    "2 zanahorias",
    "4 papas",
    "500 gramos de pollo",
    "300 gramos de pescado",
    "Un manojo de cilantro",
    "2 limones",
    "50 gramos de mantequilla",
    "100 gramos de queso",
    "1 lata de maíz",
    "1 taza de arroz",
  ];
  const getRandomOption = (array) => {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  };
  return (
    <Container>
      <NavBar />
      <Container sx={"display: flex; margin-top: 150px"}>
        <div>
          <h1>Aquí va tu lista de compras de hoy!</h1>
          <p>{getRandomOption(Ingredientes)}</p>
          <p>{getRandomOption(Ingredientes)}</p>
          <p>{getRandomOption(Ingredientes)}</p>
          <p>{getRandomOption(Ingredientes)}</p>
          <p>{getRandomOption(Ingredientes)}</p>
          <p>{getRandomOption(Ingredientes)}</p>
          <p>{getRandomOption(Ingredientes)}</p>
          <p>{getRandomOption(Ingredientes)}</p>
          <p>{getRandomOption(Ingredientes)}</p>
          <p>{getRandomOption(Ingredientes)}</p>
          </div>
      </Container>
    </Container>
  )
}

export default ShopListPage
