import React from 'react'

import NavBar from '../components/nav_bar'
import Container from '@mui/material/Container';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

export const CalendarPage = () => {
  return (
    <Container>
      <NavBar />
      <Container sx={"display: flex; margin-top: 150px"}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar showDaysOutsideCurrentMonth fixedWeekNumber={2} />
        </LocalizationProvider>
      </Container>
    </Container>
  )
}

export default CalendarPage