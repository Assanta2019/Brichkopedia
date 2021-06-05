import React from 'react';

function CarItem(car: any) {
    return (
        <div>
            <p>{car.name}</p>
            <span>{car.year}</span>
            <p>{car.cost}</p>
        </div>
    )
}

export default CarItem;