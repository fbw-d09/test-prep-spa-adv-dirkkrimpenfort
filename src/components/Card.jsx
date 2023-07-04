// components/Card.jsx
import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

const Card = ({ country }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`Card ${theme}`}>
      <h2>{country.name}</h2>
      <img src={country.img} alt={country.name} />
      <p>Capital: {country.capital}</p>
      <p>Largest City: {country.largestCity}</p>
      <p>Population: {country.population}</p>
      <p>Currency: {country.currency}</p>
      <p>Official Languages: {country.officialLanguages.join(', ')}</p>
      <p>Neighbouring Countries: {country.neighbouringCountries.join(', ')}</p>
      <button onClick={toggleTheme}>Change Theme</button>
    </div>
  );
}

export default Card;
