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

const CalendarPage = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const Desayuno = ["Avena", "Yogur con frutas y nueces", "Tostadas integrales con PALTA y huevo", "Batido de proteínas", "Tofu revuelto con verduras"]
  const Almuerzo = ["Ensalada de pollo con verduras frescas", "Salmón a la parrilla con espárragos y quinua", "Tacos de pavo con guacamole y POROTOS negros", "Pasta integral con brócoli y salsa de tomate casera", "Bowl de arroz integral con tofu, PALTA y vegetales asados"]
  const Cena = ["Salmón al horno con espárragos y quinua", "Ensalada de atún con PALTA y vegetales frescos", "Pollo a la parrilla con brócoli y PAPAS al horno", "Sopa de lentejas con espinacas y pan integral", "Tacos de pavo con lechuga y salsa de PALTA"]
  const Ingredientes = []

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
  };

  const getRandomOption = (array) => {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
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
          <h2>Comida del día</h2>
          {selectedDate ? (
            <div>
              <p>{selectedDate.toString()}</p>
              <p>{getRandomOption(Desayuno)}</p>
              <p>{getRandomOption(Almuerzo)}</p>
              <p>{getRandomOption(Cena)}</p>
            </div>
          ) : (
            <p></p>
          )}
        </div>
      </div>
    </Container>
  );
}

export default CalendarPage;
