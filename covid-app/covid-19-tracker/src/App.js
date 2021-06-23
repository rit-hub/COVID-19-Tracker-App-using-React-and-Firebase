import React, {useState, useEffect} from 'react'
import{MenuItem, FormControl, Select} from "@material-ui/core";
import './App.css';

function App() {
  const [countries,setCountries] = useState([]);
  const [country, setCountry] = useState('worldwide');
  useEffect(() => {
    const getCountriesData = async ()=> {
      await fetch("https://disease.sh/v3/covid-19/countries").then((response)=> response.json()).then((data) => {
        const countries = data.map((country) =>(
          {
            name: country.country, // United Kingdom, United States,India
            value: country.countryInfo.iso2, // UK,USA, IN
          }
        ));
        setCountries(countries);
      });
    };
    getCountriesData();
  }, []);

  const onCountryChange = (event) => {
    const countryCode = event.target.value;
    // console.log(countryCode);
    setCountry(countryCode);
  }
  return (
    //BEM naming convention
    <div className="app"> 
      <div className="app__header">
        <h1>Covid-19 Tracker</h1>
        <FormControl className="app__dropdown">
          <Select variant="outlined" value = {country} onChange={onCountryChange}>
            <MenuItem value="worldwide">Worldwide</MenuItem>
            {
              countries.map((country) => (
                <MenuItem value={country.value}>{country.name}</MenuItem>
              ))
            }
          </Select>
        </FormControl>
      </div>
      
      {/*Header Component*/}
      {/*Title + Select input Dropdown component*/}
      {/*Infoboxes Component*/}
      {/*Infoboxes Component*/}
      {/*Infoboxes Component*/}

       {/*Table Component*/}
        {/*graph Component*/}
      
       {/*Map Component*/}

      
    </div>
  );
}

export default App;
