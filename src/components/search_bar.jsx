import React from "react";
import { FaSearch } from "react-icons/fa";
import Button from '@mui/material/Button';

import comidasData from '../bd/comidas.json';

import "../stylesheets/search-bar/search_bar.scss";

export const SearchBar = () => {
  const [input, setInput] = React.useState("");

  const fetchData = (value, comidasData) => {
    const matchingEntry = comidasData.find((entry) => entry.nombre === value);
    console.log(matchingEntry)
    return matchingEntry ? matchingEntry : 'No hay información para esta fecha';
  };

  const handleChange = (value) => {
    setInput(value);
    
  };

  return (
    <div className="input-wrapper">
       <FaSearch id="search-icon" color="#B5B5B5"/>
      <input
        placeholder=" Type to search..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
      <Button className="search-button" type="button" sx={"background-color: #D0FFA4; color: #000000"} onClick={fetchData(input, comidasData)}>Buscar</Button>
    </div>
  )
}

export default SearchBar