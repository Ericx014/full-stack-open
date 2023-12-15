const Countries = ({display, setDisplay}) => {
    return (    
        <div>
            {display.map((country) =>
                <li key={country.ccn3}>
                    {country.name.common} 
                    <button onClick={(event) => {
                        event.preventDefault()
                        setDisplay([country])
                    }}>More info</button> 
                </li>
            )}
        </div>
    )
}

export default Countries