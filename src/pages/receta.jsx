import React, { useState, useEffect } from 'react'

import HashLoader from "react-spinners/HashLoader";
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { Container } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Alert, AlertTitle, Collapse, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close"

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

// import comidasData from '../bd/menus.json';
import NavBar from '../components/nav_bar'





export const RecetaPages = () => {

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }, [])

  const [open, setOpen] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseOpenAlert = () => {
    setOpen(false);
    setOpenAlert(true);
  }

  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
    console.log(selectedDate);
  };

  const url = "https://i.blogs.es/927bbe/salsa-pasta/840_560.jpg"
  // const getRandomOption = (array) => {
  //   const randomIndex = Math.floor(Math.random() * array.length);
  //   return array[randomIndex];
  // };
  const [value, setValue] = React.useState(2);
  const Ingredientes = [
    "500 gramos de fideos",
    "5 tomates",
    "5 hojas de albahaca fresca",
    "2 cebollas",
    "1 diente de ajo",
    "1 cucharada de aceite de oliva",
    "Sal y pimienta al gusto",
    "Queso rallado a gusto",
  ];
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
            <Container sx={"display: flex; margin-top: 150px"}>
              <div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                  <h1 style={{ fontSize: '50px' }}>Fideos con salsa / Almuerzo</h1>
                  <img src={url} style={{ borderRadius: '20px', marginBottom: '18px' }} />
                </div>
                <Box sx={{ '& > legend': { mt: 2 } }}>
                  <Collapse in={openAlert}>
                    <Alert variant="outlined" action={<IconButton onClick={() => { setOpenAlert(false) }}><CloseIcon></CloseIcon></IconButton>} sx={{ fontSize: '20px' }}>
                      <AlertTitle sx={{ fontSize: '30px' }}><strong>Enhorabuena</strong></AlertTitle>
                      Se añadió la comida correctamente.
                      <a href="/caIendario" className="search-button" type="button" sx={"background-color: #D0FFA4; color: #000000"}>   Ver calendario</a>
                    </Alert>
                  </Collapse>
                </Box>
                <br></br>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                  <div>
                    <Button onClick={handleClickOpen} sx={{ borderRadius: '50%', padding: '0 7px 0 7px', fontSize: '40px', color: 'black', border: 'none', backgroundColor: '#A8FF40' }}>
                      +
                    </Button>
                    <Dialog
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="alert-dialog-title"
                      aria-describedby="alert-dialog-description"
                    >
                      <DialogTitle id="alert-dialog-title">
                        {"Elige el día"}
                      </DialogTitle>
                      <DialogContent>
                        <div style={{ marginRight: '30px' }}>
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            {/* <StaticDatePicker onChange={handleDateChange} localeText={{toolbarTitle: ''}} closeOnSelect='true' sx={{borderRadius: '15px', padding: '10px'}}/> */}
                            <DateCalendar views={['day']} disablePast='true' onChange={handleDateChange} />
                          </LocalizationProvider>
                        </div>
                      </DialogContent>
                      <DialogActions>
                        <Button onClick={handleClose}>
                          Disagree
                        </Button>
                        <Button onClick={handleCloseOpenAlert} autoFocus>
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
                <ul>
                  <li>{Ingredientes[0]}</li>
                  <li>{Ingredientes[1]}</li>
                  <li>{Ingredientes[2]}</li>
                  <li>{Ingredientes[3]}</li>
                  <li>{Ingredientes[4]}</li>
                  <li>{Ingredientes[5]}</li>
                  <li>{Ingredientes[6]}</li>
                  <li>{Ingredientes[7]}</li>
                </ul>
                <h2>Preparación:</h2>
                <ol>
                  <li>Comienza hirviendo abundante agua con sal en una olla. Cuando empiece a hervir, agrega los fideos y cocinalos al dente.</li>
                  <p></p>
                  <li>Por otro lado, corta la cebolla y el tomate en cubitos, y pica el ajo y la albahaca finamente.</li>
                  <p></p>
                  <li>Ahora, en una sartén con aceite de oliva, saltea el ajo con la cebolla hasta que estén transparentes. Luego, suma el tomate y la albahaca, y cocina hasta que reduzca.</li>
                  <p></p>
                  <li>Retira del fuego, agrega sal y pimienta a gusto y procesalo en caliente.</li>
                  <p></p>
                  <li>Por último, sirve la pasta junto con la salsa y queso rallado a elección.</li>
                </ol>
              </div>
            </Container>
          </Container>
      }
    </div>


  )
}
export default RecetaPages

