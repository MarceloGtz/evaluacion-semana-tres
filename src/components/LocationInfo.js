import React from 'react';

const LocationInfo = ({location}) => {
    return (
        <div className='LocationInfo'>
            <h1 className='LocationInfo__Name'>{location.name}</h1>
            <h3>Type: {location.type}</h3>
            <h3>Dimension: {location.dimension}</h3>
            <h3>Population: {location.residents?.length}</h3>
        </div>
    );
};

export default LocationInfo;