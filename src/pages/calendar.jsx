import React, { useState, useEffect } from 'react'
import NavBar from '../components/nav_bar';
import Container from '@mui/material/Container';
import HashLoader from "react-spinners/HashLoader";
import Box from '@mui/material/Box';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { MdBreakfastDining, MdLunchDining, MdDinnerDining } from 'react-icons/md'

import comidasData from '../bd/menus.json';


const CalendarPage = () => {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }, [])

  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
    console.log(newDate);
  };

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
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '140px' }}>
              <div style={{ marginRight: '30px' }}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <StaticDatePicker onChange={handleDateChange} disablePast='true' localeText={{ toolbarTitle: '' }} sx={{ borderRadius: '15px', padding: '10px' }} />
                </LocalizationProvider>
              </div>
              <div style={{ marginLeft: '30px', backgroundColor: 'white', borderRadius: '15px', padding: '10px 40px 10px 40px' }}>
                <h1 style={{ display: 'flex', justifyContent: 'center', marginBottom: '0' }} >Menú del día</h1>
                {selectedDate ? (
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div>
                      <h2>Desayuno</h2>
                      <p>{getDesayuno(selectedDate, comidasData)}</p>
                    </div>

                    <div>
                      <h2>Almuerzo</h2>
                      <p>{getAlmuerzo(selectedDate, comidasData)}</p>
                    </div>

                    <div>
                      <h2>Cena</h2>
                      <p>{getCena(selectedDate, comidasData)}</p>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                      <a href="/lista_compras" class="btn btn-info" role="button" style={{ backgroundColor: '#D0FFA4', padding: '10px', borderRadius: '12px', textDecoration: 'none' }}>Ver lista de compras</a>
                    </div>

                  </div>

                ) : (
                  <p>Seleccione una fecha en el calendario</p>
                )}
              </div>
            </div>
          </Container>
      }
    </div>

  );
}

export default CalendarPage;
