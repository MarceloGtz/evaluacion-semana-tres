import React, { useState } from 'react';
import axios from 'axios';

const SearchBox = ({ setLocation }) => {
    // En search se guardará lo que se escribe en el input
    const [search, setSearch] = useState('')

    // setLocation solo cambia el id que peticiona el usuario
    const searchLocation = () => {
        axios.get(`https://rickandmortyapi.com/api/location/${search}`)
            .then((res) => setLocation(res.data));
    }

    // El input cambia el valor de search al dado por el usuario
    // El boton corre la funcion que cambia el valor del url
    return (
        <div className='SearchBox'>
            <input 
            type="text" 
            onChange={e => setSearch(e.target.value)} 
            value={search}
            placeholder="Type a location id" 
            />

            <button onClick={searchLocation}>
                Search
            </button>
        </div>
    );
};

export default SearchBox;