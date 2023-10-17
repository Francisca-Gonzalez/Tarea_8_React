// import React, { useState } from 'react';
// import NavBar from '../components/nav_bar';
// import Container from '@mui/material/Container';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
// import { StaticDatePicker } from '@mui/x-date-pickers';

// const CalendarPage = () => {
//   const [selectedDate, setSelectedDate] = useState(null);

//   const handleDateChange = (newDate) => {
//     setSelectedDate(newDate);
//   };

//   return (
//     <Container>
//       <NavBar />
//       <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '120px' }}>
//         <div>
//           <LocalizationProvider dateAdapter={AdapterDayjs}>
//             <StaticDatePicker
//               onChange={handleDateChange} />
//             {/* <DateCalendar
//               showDaysOutsideCurrentMonth
//               fixedWeekNumber={4}
//               onChange={handleDateChange}
//             /> */}
//           </LocalizationProvider>
//         </div>
//         <div>
//           <h2>A</h2>
//           {selectedDate ? (
//             // <p>{selectedDate.toString()}</p>
//             <p>Fideos con Salsa</p>
//           ) : (
//             <p></p>
//           )}
//         </div>
//       </div>
//     </Container>
//   );
// }

// export default CalendarPage;

import React, { useState } from 'react';
import NavBar from '../components/nav_bar';
import Container from '@mui/material/Container';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import comidasData from '../bd/comidas.json';


const CalendarPage = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
  };

  // const getRandomOption = (array) => {
  //   const randomIndex = Math.floor(Math.random() * array.length);
  //   return array[randomIndex];
  // };
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
    <Container>
      <NavBar />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '120px' }}>
        <div>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <StaticDatePicker onChange={handleDateChange} />
          </LocalizationProvider>
        </div>
        <div>
          {/* <h2>Comida del día</h2>
          {selectedDate ? (
            <div>
              <p>{selectedDate.toString()}</p>
              <p>{getRandomOption(Desayuno)}</p>
              <p>{getRandomOption(Almuerzo)}</p>
              <p>{getRandomOption(Cena)}</p>
            </div>
          ) : (
            <p></p>
          )} */}
          <h2>Comida del día</h2>
          {selectedDate ? (
            <div>
              <p>{selectedDate.toString()}</p>
              <p>{getDesayuno(selectedDate, comidasData)}</p>
              <p>{getAlmuerzo(selectedDate, comidasData)}</p>
              <p>{getCena(selectedDate, comidasData)}</p>
            </div>
          ) : (
            <p>Seleccione una fecha en el calendario</p>
          )}
        </div>
      </div>
    </Container>
  );
}

export default CalendarPage;
