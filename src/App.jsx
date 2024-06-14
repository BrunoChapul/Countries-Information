import './styles/globalStyles.css'
import { useEffect, useState } from 'react';
import { AppStyled } from './styles/styledApp'
import Country from "./components/Country/Country";
import Search from './components/Search/Search';

function App() {
  const [country, setCountry] = useState('USA');
  const [countrySelected, setCountrySelected] = useState();

  function handleCountry (newCountry) {
    setCountry(newCountry);
  }

  useEffect(function () {
    const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.com/v3.1/alpha/${country}`);
    request.send();

    request.addEventListener('load', function () {
      const [data] = JSON.parse(this.responseText);
      document.title = `Country: ${data.name.common}`;
      console.log(data);
      setCountrySelected(data);
    })
  }, [country]);

  return (
    <>
      <Search country={country} setCountry={setCountry} onHandleCountry={handleCountry} />
      <AppStyled>
          <Country countrySelected={countrySelected} />
      </AppStyled>
    </>
  )
}

export default App;