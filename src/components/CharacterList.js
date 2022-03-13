import React from 'react';
import CharactersInfo from './CharactersInfo';

const CharacterList = ({characters}) => {
    return (
        // Creo el padre
        <div className='CharacterList'>
            {   
                // Recorro los personajes con map y cada uno lo mando al componente CharactersInfo 
                // Con la prop de url la cual es la que se itera y el key es esa misma url de cada personaje
                characters?.map(character => (
                    <CharactersInfo characterUrl={character} key={character}/>
                ))
            }
        </div>
    );
};

export default CharacterList;