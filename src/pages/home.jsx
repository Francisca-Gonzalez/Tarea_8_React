import React from 'react'

import NavBar from '../components/nav_bar'
import Container from '@mui/material/Container';

export const HomePage = () => {
  const fechaHoy = new Date();
  const dia = fechaHoy.getDate();
  const mes = fechaHoy.getMonth() + 1; // Los meses empiezan en 0, así que sumamos 1
  const año = fechaHoy.getFullYear();

// Formatear la fecha como una cadena
  const fechaFormateada = `${dia}/${mes}/${año}`;
  return (
    <Container>
      <NavBar />
      <Container sx={"display: flex; margin-top: 150px"}>
        <div>
          <h1>Hola! esta es tu planificación de hoy: </h1>
          <h2>Desayuno: fideos con salsa</h2>
          <h2>Almuerzo: fideos con salsa</h2>
          <h2>Once: fideos con salsa</h2>
          <h2>Cena: fideos con salsa</h2>
          console.log(fechaFormateada)
        </div>
      </Container>
    </Container>
  )
}

export default HomePage
