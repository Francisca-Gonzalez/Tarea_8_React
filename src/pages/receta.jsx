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
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

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
  const getRandomOption = (array) => {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  };
  const [value, setValue] = React.useState(2);
  const Ingredientes = [
    "500 gramos de fideos",
    "1 tarro de salsa de tomate",
    "200 gramos de carne molida",
    "1 cucharadita de sal",
    "Pimienta al gusto",
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
                <h1>Fideos con salsa / Almuerzo</h1>
              </div>
              <Box sx={{'& > legend': { mt: 2 }}}>
                <Collapse in={openAlert}>
                <Alert variant="outlined" action={<IconButton onClick={()=>{setOpenAlert(false)}}><CloseIcon></CloseIcon></IconButton>}>
                    <AlertTitle><strong>Enhorabuena</strong></AlertTitle>
                    Se añadió la comida correctamente.</Alert>
                </Collapse>
              </Box>
              <br></br>
              <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
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
                      {"Elige el día"}
                    </DialogTitle>
                    <DialogContent>
                    <div style={{marginRight: '30px'}}>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        {/* <StaticDatePicker onChange={handleDateChange} localeText={{toolbarTitle: ''}} closeOnSelect='true' sx={{borderRadius: '15px', padding: '10px'}}/> */}
                        <DateCalendar views={['day']} onChange={handleDateChange}/>
                      </LocalizationProvider>
                    </div>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleClose}>Disagree</Button>
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

              <p>{Ingredientes[0]}</p>
              <p>{Ingredientes[1]}</p>
              <p>{Ingredientes[2]}</p>
              <p>{Ingredientes[3]}</p>
              <p>{Ingredientes[4]}</p>
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

