import axios from "axios"
import { useState, useEffect } from "react";

const CountryInfo = ({display}) => {    
    const [weather, setWeather] = useState([])

    useEffect(() => {
        const lat = display[0].latlng[0]
        const long = display[0].latlng[1]
        const API_KEY = "1395947b9dcf3630939e7a264c6b4d65";

        axios
        .get(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${long}&appid=${API_KEY}`)
        .then((response) => {setWeather(response.data)})
    }, [display])

    return (
        display.map((country) => (
            <div key={country.ccn3}>
                <h2>{country.name.common}</h2>
                <p>Captial: {country.capital}</p>
                <p>Area: {country.area}</p>
                <p>Timezone: {country.timezones}</p>
                <p>Population: {country.population}</p> 

                <h2>Languages</h2>
                <ul>
                    {Object.values(country.languages).map((language, i) => (
                        <li key={i}>{language}</li>
                    ))}
                </ul>
                <img src={country.flags.png} alt="flag" />

                {/* <h2>Weather</h2>
                <p>Wind: {weather.main.temp}</p> */}
            </div>
        ))
    )
}

export default CountryInfo