import React from 'react'

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import NavBar from '../components/nav_bar'
import Container from '@mui/material/Container';

import menusData from '../bd/menus.json';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export const HomePage = () => {
  const fechaHoy = new Date();
  const dia = fechaHoy.getDate();
  const dia2 = fechaHoy.toString().substring(0, 3)
  const mes = fechaHoy.getMonth() + 1; // Los meses empiezan en 0, así que sumamos 1
  const mes2 = fechaHoy.toString().substring(4, 7)
  const año = fechaHoy.getFullYear();

  const getDesayuno = (selectedDate, menusData) => {
    const matchingEntry = menusData.find((entry) => entry.fecha === selectedDate.toString());
    console.log(matchingEntry)
    return matchingEntry ? matchingEntry.desayuno : 'No hay información para esta fecha';
  };

  const getAlmuerzo = (selectedDate, menusData) => {
    const matchingEntry = menusData.find((entry) => entry.fecha === selectedDate.toString());
    console.log(matchingEntry)
    return matchingEntry ? matchingEntry.almuerzo : 'No hay información para esta fecha';
  };

  const getCena = (selectedDate, menusData) => {
    const matchingEntry = menusData.find((entry) => entry.fecha === selectedDate.toString());
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
      <p style={{marginTop: '140px'}}></p>
      <h2>{fechaFormateada}</h2>
      <h1>Hola! Esta es tu planificación de hoy:</h1>
      <Container sx={"display: flex; margin-top: 30px"}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Item  sx={{borderRadius: '15px', height: '350px'}}>
                <h2>Desayuno</h2>
                <h2>{getDesayuno(buscaJson, menusData)}</h2>
                <div>
                  <img src='https://th.bing.com/th/id/R.778541a24f677078b3d4c62e52c0ebc2?rik=fhFb2WKLVf%2f77Q&pid=ImgRaw&r=0' style={{width: '220px', height: '120px', marginBottom: '30px'}}/>
                </div>
                <div style={{marginBottom: '30px'}}>
                  <a href="/receta" class="btn btn-info" role="button" style={{backgroundColor: '#D0FFA4', padding: '10px', borderRadius: '12px', textDecoration: 'none', color: 'black'}}>VER RECETA</a>
                </div>
              </Item>
            </Grid>
            <Grid item xs={4}>
            <Item  sx={{borderRadius: '15px', height: '350px'}}>
                <h2>Almuerzo</h2>
                <h2>{getAlmuerzo(buscaJson, menusData)}</h2>
                <div>
                  <img src='https://th.bing.com/th/id/R.345b3282a3a49e8463b28f0f40ee726d?rik=%2bgtA0Tf6UVWdOw&pid=ImgRaw&r=0' style={{width: '220px', height: '120px', marginBottom: '30px'}}/>
                </div>
                <div style={{marginBottom: '30px'}}>
                  <a href="/receta" class="btn btn-info" role="button" style={{backgroundColor: '#D0FFA4', padding: '10px', borderRadius: '12px', textDecoration: 'none', color: 'black'}}>VER RECETA</a>
                </div>
              </Item>
            </Grid>
            <Grid item xs={4}>
              <Item  sx={{borderRadius: '15px', height: '350px'}}>
                <h2>Cena</h2>
                <h2>{getCena(buscaJson, menusData)}</h2>
                <div>
                  <img src='https://th.bing.com/th/id/R.4b3e92888837c958c85dcb3d82d42c95?rik=XO4D2I6LHn%2bm4g&pid=ImgRaw&r=0' style={{width: '220px', height: '120px', marginBottom: '30px'}}/>
                </div>
                <div style={{marginBottom: '30px'}}>
                  <a href="/receta" class="btn btn-info" role="button" style={{backgroundColor: '#D0FFA4', padding: '10px', borderRadius: '12px', textDecoration: 'none', color: 'black'}}>VER RECETA</a>
                </div>
                
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Container sx={{display: 'flex', marginTop: '40px', alignItems: 'center', justifyContent: 'center'}}>
        <h1>Lista de compras</h1>
      </Container>
      <Container sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
        <h3>1/2 kilo de carne de cerdo</h3>
        <h3>500 gramos de mantequilla</h3>
        <h3>2 latas de maíz</h3>
        <h3>8 papas</h3>
        <h3>1 kilo de harina</h3>
        <h3>4 limones</h3>
      </Container>
    </Container>
  )
}

export default HomePage
