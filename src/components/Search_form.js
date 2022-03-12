import React from 'react';
import SearchIcon from '@mui/icons-material/Search';


function SearchForm(props) {
    return (
        <form className="search">
            <label htmlFor="search">
                <SearchIcon/>
            </label>
            <input type="text" placeholder="Rechercher ou démarrer une nouvelle discussion"/>
        </form>
    );
}

export default SearchForm;