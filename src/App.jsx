import React, { useState } from 'react';
import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';
import { ThemeContext } from './ThemeContext';
import './App.css'

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme => theme === 'light' ? 'dark' : 'light');
  }

  const country = {
    name: "South Africa",
    img: "public/banner-ge54d5f2f2_1920.png",
    capital: "Pretoria",
    largestCity: "Johannesburg",
    population: 58048332,
    currency: "South African Rand (ZAR)",
    officialLanguages: ["Zulu", 
                        "Xhosa", 
                        "Afrikaans", 
                        "English", 
                        "Sepedi", 
                        "Swazi", 
                        "Sesotho",
                        "Setswana", 
                        "Xitsonga", 
                        "Tshiwenda", 
                        "Ndebele"
                      ],
    neighbouringCountries: ["Namibia", 
                            "Botswana",
                            "Zimbabwe", 
                            "Mozambique", 
                            "Eswatini"
                          ],
  };



  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`App ${theme}`}>
        <Header/>
        <Card country={country}/>
        <Footer/>
      </div>
    </ThemeContext.Provider>
  )
}

export default App
