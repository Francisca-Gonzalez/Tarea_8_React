import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from '../pages/home'
import RecipesPage from '../pages/recipes'
import CalendarPage from '../pages/calendar'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/recetas' element={<RecipesPage />} />
        <Route path='/calendario' element={<CalendarPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
