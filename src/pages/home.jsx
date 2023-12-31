import React, { useState, useEffect } from 'react'

import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import NavBar from '../components/nav_bar'
import Container from '@mui/material/Container';
import HashLoader from "react-spinners/HashLoader";
import Box from '@mui/material/Box';

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

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }, [])

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
                    <img src='https://i.blogs.es/927bbe/salsa-pasta/840_560.jpg' style={{width: '220px', height: '120px', marginBottom: '30px'}}/>
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
          <Container sx={"display: flex; margin-top: 50px; margin-bottom: 50px; flex-direction: column; justify-content: center; align-items: center"}>
            <div>
              <h1>Lista de compras</h1>
            </div>
            <div>
              <h3>1/2 kilo de carne de cerdo</h3>
              <h3>500 gramos de mantequilla</h3>
              <h3>2 latas de maíz</h3>
              <h3>8 papas</h3>
              <h3>1 kilo de harina</h3>
              <h3>4 limones</h3>
            </div>
          </Container>
          <h1>Sugerencias en base a tus búsquedas recientes:</h1>
          <Container sx={"display: flex; margin-top: 30px; margin-bottom: 50px"}>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <Item  sx={{borderRadius: '15px', height: '350px'}}>
                    <h2>Desayuno</h2>
                    <h2>Tostadas con huevo revuelto</h2>
                    <div>
                      <img src='https://th.bing.com/th/id/R.137e25a0a8a2d20ce202d89194aca7e4?rik=ggn0LDVQsO8Qhw&pid=ImgRaw&r=0&sres=1&sresct=1' style={{width: '220px', height: '120px', marginBottom: '30px'}}/>
                    </div>
                    <div style={{marginBottom: '30px'}}>
                      <a href="/receta" class="btn btn-info" role="button" style={{backgroundColor: '#D0FFA4', padding: '10px', borderRadius: '12px', textDecoration: 'none', color: 'black'}}>VER RECETA</a>
                    </div>
                  </Item>
                </Grid>
                <Grid item xs={4}>
                <Item  sx={{borderRadius: '15px', height: '350px'}}>
                    <h2>Almuerzo</h2>
                    <h2>Arroz con pollo al jugo</h2>
                    <div>
                      <img src='https://i0.wp.com/www.cronicadigital.cl/imagenes/noticias/2015/03/ArrozPollo.jpg?resize=640%2C480' style={{width: '220px', height: '120px', marginBottom: '30px'}}/>
                    </div>
                    <div style={{marginBottom: '30px'}}>
                      <a href="/receta" class="btn btn-info" role="button" style={{backgroundColor: '#D0FFA4', padding: '10px', borderRadius: '12px', textDecoration: 'none', color: 'black'}}>VER RECETA</a>
                    </div>
                  </Item>
                </Grid>
                <Grid item xs={4}>
                  <Item  sx={{borderRadius: '15px', height: '350px'}}>
                    <h2>Cena</h2>
                    <h2>Crema de choclo</h2>
                    <div>
                      <img src='https://d1uz88p17r663j.cloudfront.net/original/469f92712f3e459fe67712ed3ee61f0d_Crema_de_Choclo.jpg' style={{width: '220px', height: '120px', marginBottom: '30px'}}/>
                    </div>
                    <div style={{marginBottom: '30px'}}>
                      <a href="/receta" class="btn btn-info" role="button" style={{backgroundColor: '#D0FFA4', padding: '10px', borderRadius: '12px', textDecoration: 'none', color: 'black'}}>VER RECETA</a>
                    </div>
                    
                  </Item>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Container>
      }
    </div>
    
  )
}

export default HomePage
