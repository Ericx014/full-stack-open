import { useState, useEffect } from "react";
import axios from "axios";
import Countries from "./components/Countries";
import CountryInfo from "./components/CountryInfo";
import SearchBar from "./components/SearchBar";

const App = () => {
    const [countries, setCountries] = useState([])
    const [filter, setFilter] = useState('')
    const [display, setDisplay] = useState([])

    useEffect(() => {
        axios
        .get("https://studies.cs.helsinki.fi/restcountries/api/all")
        .then((response) => setCountries(response.data))
    }, [])

    useEffect(() => {
        console.log(display);
    }, [display])

    const handleInput = (event) => {
        const input = event.target.value
        setFilter(input)
        const filteredCountries = countries.filter((country) =>  
            country.name.common.toLowerCase().includes(filter.toLowerCase())
        )
        setDisplay(filteredCountries)
    }

    return(
        <div>
            <form>
                <SearchBar handleInput={handleInput}/>
                <ul className="countrylist">
                    {display.length > 10 ? (<p>Too many matches, specify another filter</p>)
                    : display.length === 1 ? 
                       <CountryInfo display={display}/>
                    : <Countries display={display} setDisplay={setDisplay}/>
                    }
                </ul>
            </form>
        </div>
    )
}

export default App