import React, { useState, useEffect } from 'react'
import { Container } from '@mui/material'
import HashLoader from "react-spinners/HashLoader";
import Box from '@mui/material/Box';

import SearchBar from "../components/search_bar";
import NavBar from '../components/nav_bar'

export const RecipesPage = () => {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }, [])

  const url = "https://i.blogs.es/927bbe/salsa-pasta/840_560.jpg"
  const url2 = "https://tofuu.getjusto.com/orioneat-local/resized2/zRZZx7uobtDFtm69o-1200-1200.webp"
  const url3 = "https://cdn0.recetasgratis.net/es/posts/6/2/7/avena_con_leche_73726_600_square.jpg"
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
            <SearchBar />
            <div style={{ textAlign: 'center' }}>
              <h1>Recetas recomendadas</h1>
            </div>

            <div style={{ display: 'flex', flexDirection: 'row', backgroundColor: '#E3FFC8', padding: '25px', marginBottom: '35px', borderRadius: '15px', alignItems: 'flex-start' }}>
              <img src={url} style={{ width: '150px', height: '150px', marginRight: '25px', borderRadius: '15px' }} />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <a href="/receta" class="btn btn-info" role="button" style={{ textDecoration: 'none', fontSize: '25px' }}>Fideos con Salsa</a>
                <p>Deliciosos fideos al dente acompañados de una salsa casera, hecha con tomates frescos y hierbas aromáticas. Una combinación perfecta de suavidad y sabor que te hará disfrutar cada bocado.</p>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', backgroundColor: '#E3FFC8', padding: '25px', marginBottom: '35px', borderRadius: '15px', alignItems: 'flex-start' }}>
              <img src={url2} style={{ width: '150px', height: '150px', marginRight: '25px', borderRadius: '15px' }} />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <a href="/receta" class="btn btn-info" role="button" style={{ textDecoration: 'none', fontSize: '25px' }}>Pollo con Papas</a>
                <p>El pollo asado a la perfección, con su piel crujiente y su jugosidad inigualable, se combina con papas tiernas y doradas, cocidas a la perfección. Un plato reconfortante que te ofrece la calidez de los sabores caseros en cada bocado.</p>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', backgroundColor: '#E3FFC8', padding: '25px', marginBottom: '35px', borderRadius: '15px', alignItems: 'flex-start' }}>
              <img src={url3} style={{ width: '150px', height: '150px', marginRight: '25px', borderRadius: '15px' }} />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <a href="/receta" class="btn btn-info" role="button" style={{ textDecoration: 'none', fontSize: '25px' }}>Avena</a>
                <p>Una avena suculenta y reconfortante, cocinada a la perfección y adornada con tus frutas favoritas, nueces crujientes y un toque de miel dorada. Un abrazo cálido para tu día, listo para despertar tus sentidos con su dulzura reconfortante.</p>
              </div>
            </div>
          </Container>
      }
    </div>
  )
}

export default RecipesPage
