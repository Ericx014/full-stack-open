const SearchBar = ({ handleInput }) => {
    return (
        <p>Search for: <input onChange={handleInput} /></p>
    )
}

export default SearchBar