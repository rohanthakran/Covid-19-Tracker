import React,{useState,useEffect} from "react";
import {MenuItem,FormControl,Select,Card} from "@material-ui/core/"
import InfoBox from "./InfoBox"
import Map from "./Map"
import './App.css';


function App() {

  const [counteries, setCounteries] = useState([]);
  const [country, setCountry] = useState('worldwide');
  const [countryInfo, setCountryInfo] = useState({});

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all")
      .then(response => response.json())
      .then(data => {
        setCountryInfo(data);
    })
  },[])
  useEffect(() => {
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries").then((response) => response.json())
        .then((data) => {
          const countreis = data.map((country) => (
         
            {
              name: country.country,
              value: country.countryInfo.iso2,
            
            }
          ));
          setCounteries(countreis);
      })
    }
    getCountriesData();
  },[])

  const onCountryChange = async (event) => {
    const countrycode = event.target.value;
    
    const url = countrycode === 'worldwide' ? "https://disease.sh/v3/covid-19/all" : `https://disease.sh/v3/covid-19/countries/${countrycode}`
    
    await fetch(url)
      .then(response => response.json())
      .then(data => {
        setCountry(countrycode);
          setCountryInfo(data);
       
      });

  }
  console.log("this is country info",countryInfo);

  //useEffect = Run a pieace of coe based on given condition
  return (
    <div className="App">
      <div className="app__left">
        
      <div className="app__header">
      
      <h1>this is covid tracker</h1>
        <FormControl className="app__dropdown">

        <Select variant="outlined" onChange={onCountryChange} value ={country}>
          <MenuItem value ="worldwide">Worldwide</MenuItem>
            {
              counteries.map((country) => {
              return(
                <MenuItem value={country.value}>{country.name}</MenuItem>
              )
              })
          }
        </Select>
      </FormControl>
        </div>
    
   
      <div className="app__stats">
        
        <InfoBox title="CoronaVirus Cases" cases={countryInfo.todayCases} total={countryInfo.cases}/>
        <InfoBox title="Recovered" cases={countryInfo.todayRecovered} total={countryInfo.recovered} />
          <InfoBox title="Today Deaths" cases={countryInfo.todayDeaths} total={countryInfo.deaths} />
    
          

        
      </div>
   <Map></Map>
      </div>
      
      <Card className="app_right">
        
        <h1>App Right</h1>
      </Card>

      
     



    </div>
  );
}

export default App;
