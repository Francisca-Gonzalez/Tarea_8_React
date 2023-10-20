import React, { useState, useEffect } from 'react'

import HashLoader from "react-spinners/HashLoader";
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { Container } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';

import NavBar from '../components/nav_bar'





export const RecetaPages = () => {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }, [])

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
  };

  const url = "https://i.blogs.es/927bbe/salsa-pasta/840_560.jpg"
  const getRandomOption = (array) => {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  };
  const [value, setValue] = React.useState(2);
  const Momento = ["Desayuno", "Almuerzo", "Cena"]
  const Desayuno = ["Avena", "Yogur con frutas y nueces", "Tostadas integrales con PALTA y huevo", "Batido de proteínas", "Tofu revuelto con verduras"]
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
          <Container sx={"display: flex; margin-top: 150px"}>
            <div>
              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginBottom: '20px'}}>
                <img src={url} style={{borderRadius: '20px', marginBottom: '18px'}}/>
                <h1>{getRandomOption(Desayuno)} / {getRandomOption(Momento)}</h1>
              </div>
              <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
                {/* <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <button
                    style={{
                      fontSize: '50px',
                      padding: '0 20.3px 0 20.3px',
                      margin: 0,
                      backgroundColor: 'lightblue',
                      borderRadius: '50%',
                      border: 0,
                    }}>+
                  </button>
                </div> */}
                <div>
                  <Button variant="outlined" onClick={handleClickOpen} sx={{borderRadius: '50%', padding: '0 7px 0 7px', fontSize: '40px', color: 'black', border: 'none', backgroundColor: '#A8FF40'}}>
                    +
                  </Button>
                  <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                  >
                    <DialogTitle id="alert-dialog-title">
                      {"Use Google's location service?"}
                    </DialogTitle>
                    <DialogContent>
                    <div style={{marginRight: '30px'}}>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <StaticDatePicker onChange={handleDateChange} localeText={{toolbarTitle: ''}} closeOnSelect='true' sx={{borderRadius: '15px', padding: '10px'}}/>
                      </LocalizationProvider>
                    </div>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleClose}>Disagree</Button>
                      <Button onClick={handleClose} autoFocus>
                        Agree
                      </Button>
                    </DialogActions>
                  </Dialog>
                </div>
                <Box
                  sx={{
                    '& > legend': { mt: 2 },
                  }}
                >
                  <Rating
                    name="simple-controlled"
                    size="large"
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                  />
                </Box>
              </div>
              
              
              <h2>Ingredientes:</h2>

              <p>{getRandomOption(Ingredientes)}</p>
              <p>{getRandomOption(Ingredientes)}</p>
              <p>{getRandomOption(Ingredientes)}</p>
              <p>{getRandomOption(Ingredientes)}</p>
              <p>{getRandomOption(Ingredientes)}</p>
              <p>{getRandomOption(Ingredientes)}</p>
              <h2>Preparación:</h2>
              <p>Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Fusce posuere risus sed justo ornare,
                aliquam accumsan mauris venenatis. Etiam nec nunc odio. Nullam elementum rutrum
                tellus quis elementum. Integer in elit in est iaculis facilisis sit amet at nisi.
                Etiam metus magna, suscipit at mi eu, varius mollis lorem. Sed faucibus risus vel
                ullamcorper auctor. Nulla fringilla augue justo, ut imperdiet metus aliquam sed. Aenean
                consectetur, elit a ultrices vulputate, nulla urna feugiat est, non elementum quam magna commodo lorem.
                Donec est dolor, fringilla vitae ultrices eu, congue et ipsum. Nam blandit, diam at cursus gravida,
                elit sem lacinia tellus, quis blandit purus arcu eget justo. Nam vel vehicula lorem.
                Proin tempor vel mi quis porttitor. Maecenas vulputate facilisis ipsum vel faucibus.
                Nunc volutpat est at mauris laoreet eleifend.</p>
            </div>
          </Container>
        </Container>
      }
    </div>
    

  )
}
export default RecetaPages

