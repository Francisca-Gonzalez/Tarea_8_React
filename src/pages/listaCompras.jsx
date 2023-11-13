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
  // const Ingredientes = [
  //   "200 gramos de harina",
  //   "100 gramos de azúcar",
  //   "2 huevos",
  //   "1 taza de leche",
  //   "2 cucharadas de aceite de oliva",
  //   "1 cucharadita de sal",
  //   "Pimienta al gusto",
  //   "3 tomates",
  //   "1 cebolla",
  //   "2 dientes de ajo",
  //   "2 zanahorias",
  //   "4 papas",
  //   "500 gramos de pollo",
  //   "300 gramos de pescado",
  //   "Un manojo de cilantro",
  //   "2 limones",
  //   "50 gramos de mantequilla",
  //   "100 gramos de queso",
  //   "1 lata de maíz",
  //   "1 taza de arroz",
  // ];
  const Ingredientes1 = [
    "1 litro de Yogur",
    "250 gramos de Avena",
    "200 gramos de frutillas",
    "200 gramos de arandanos",
    "100 gramos de nueces tostadas",
    "3 cucharadas de miel",
    "500 gramos de fideos",
    "7 tomates",
    "5 hojas de albahaca fresca",
    "3 cebollas",
    "1 diente de ajo",
  ];
  const Ingredientes2 = [
    "1 cucharada de aceite de oliva",
    "Sal",
    "Pimienta",
    "Queso rallado",
    "8 Tortillas de maiz",
    "500 gramos de pavo picado",
    "1 taza de frijoles negros",
    "3 paltas",
    "Cilantro",
    "Salsa picante",
  ];
  const getRandomOption = (array) => {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  };
  return (
    <div>
      {
        loading ?
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '150px' }}>
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
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div>
                  <ul>
                    {Ingredientes1.map((ingrediente, index) => (
                      <li key={index} style={{ marginBottom: '10px', flex: '1' }}>{ingrediente}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <ul>
                    {Ingredientes2.map((ingrediente, index) => (
                      <li key={index} style={{ marginBottom: '10px', flex: '1' }}>{ingrediente}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Container>
          </Container>
      }
    </div>

  )
}

export default ShopListPage
