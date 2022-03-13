import axios from 'axios';
import React, { useEffect, useState } from 'react';

const CharactersInfo = ({ characterUrl }) => {
    // En character guardara el res.data de cada personaje iterado anteriormente
    const [character, setCharacter] = useState('')

    // En el get va a estar el characterUrl el cual nos dara la info del personaje
    // Y la url va a cambiar cada que tengamos otro personaje para que pueda actualizar
    useEffect(() => {
        axios.get(characterUrl)
            .then(res => setCharacter(res.data))
    }, [characterUrl])

    console.log("character", character)
    return (
        // Creo la card para cada personaje con sus datos
        <div className='CharacterInfo'>
            <img src={character.image} alt="Character" />
            <h3>{character.name}</h3>
            <hr />
            <div>
                <p>Status: {character.status} - {character.species}</p>
                <p>Origin: {character.origin?.name}</p>
                <p>Episodes Where Appear: {character.episode?.length}</p>
            </div>
        </div>
    );
};

export default CharactersInfo;