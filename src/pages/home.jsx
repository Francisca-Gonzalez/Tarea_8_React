import React from 'react'

import NavBar from '../components/nav_bar'
import Container from '@mui/material/Container';

import comidasData from '../bd/comidas.json';

export const HomePage = () => {
  const fechaHoy = new Date();
  console.log(fechaHoy)
  const dia = fechaHoy.getDate();
  const dia2 = fechaHoy.toString().substring(0, 3)
  const mes = fechaHoy.getMonth() + 1; // Los meses empiezan en 0, así que sumamos 1
  const mes2 = fechaHoy.toString().substring(4, 7)
  const año = fechaHoy.getFullYear();

  const getDesayuno = (selectedDate, comidasData) => {
    const matchingEntry = comidasData.find((entry) => entry.fecha === selectedDate.toString());
    console.log(matchingEntry)
    return matchingEntry ? matchingEntry.desayuno : 'No hay información para esta fecha';
  };

  const getAlmuerzo = (selectedDate, comidasData) => {
    const matchingEntry = comidasData.find((entry) => entry.fecha === selectedDate.toString());
    console.log(matchingEntry)
    return matchingEntry ? matchingEntry.almuerzo : 'No hay información para esta fecha';
  };

  const getCena = (selectedDate, comidasData) => {
    const matchingEntry = comidasData.find((entry) => entry.fecha === selectedDate.toString());
    console.log(matchingEntry)
    return matchingEntry ? matchingEntry.cena : 'No hay información para esta fecha';
  };

  // Formatear la fecha como una cadena
  const fechaFormateada = `${dia}/${mes}/${año}`;
  const buscaJson = `${dia2}, ${dia} ${mes2} ${año} 03:00:00 GMT`
  console.log(buscaJson)
  return (
    <Container>
      <NavBar />
      <Container sx={"display: flex; margin-top: 150px"}>
        <div>
          <h1>Hola! Esta es tu planificación de hoy:</h1>
          <h2>Desayuno: {getDesayuno(buscaJson, comidasData)}</h2>
          <h2>Almuerzo: {getAlmuerzo(buscaJson, comidasData)}</h2>
          <h2>Cena: {getCena(buscaJson, comidasData)}</h2>
          <h2>{fechaFormateada}</h2>
          <a href="/ListaCompras" class="btn btn-info" role="button">Lista de compras</a>
        </div>
      </Container>
    </Container>
  )
}

export default HomePage
