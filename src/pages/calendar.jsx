// import React from 'react'

// import NavBar from '../components/nav_bar'
// import Container from '@mui/material/Container';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

// export const CalendarPage = () => {
//   const calendarContainerStyle = {
//     display: 'flex',
//     marginTop: '150px',
//     justifyContent: 'flex-start',  // Alinea los elementos hacia la izquierda
//   };

//   return (
//     <Container>
//       <NavBar />
//       <Container sx={calendarContainerStyle}>
//         <LocalizationProvider dateAdapter={AdapterDayjs}>
//           <DateCalendar showDaysOutsideCurrentMonth fixedWeekNumber={4} />
//         </LocalizationProvider>
//       </Container>
//     </Container>
//   )
// }

// export default CalendarPage

import React, { useState } from 'react';
import NavBar from '../components/nav_bar';
import Container from '@mui/material/Container';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

const CalendarPage = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
  };

  return (
    <Container>
      <NavBar />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '150px' }}>
        <div>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar
              showDaysOutsideCurrentMonth
              fixedWeekNumber={4}
              onChange={handleDateChange}
            />
          </LocalizationProvider>
        </div>
        <div>
          <h2>Fecha Seleccionada</h2>
          {selectedDate ? (
            <p>{selectedDate.toString()}</p>
          ) : (
            <p>Seleccione una fecha en el calendario</p>
          )}
        </div>
      </div>
    </Container>
  );
}

export default CalendarPage;

