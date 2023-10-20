import React, { useState, useEffect } from 'react'

import HashLoader from "react-spinners/HashLoader";
import Box from '@mui/material/Box';

import NavBar from '../components/nav_bar'
import Container from '@mui/material/Container';

export const ShopListPage = () => {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }, [])
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
    <div>
      {
        loading ?
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '150px'}}>
          <HashLoader
            color={'#000000'}
            loading={loading}
            size={150}
          />
        </Box>

        :
        
        <Container>
          <NavBar />
          <Container sx={"display: flex; margin-top: 150px; flex-direction: column; justify-content: center; align-items: center"}>
              <div>
                <h1>Lista de compras</h1>
              </div>
              <div>
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
      }
    </div>
    
  )
}

export default ShopListPage
