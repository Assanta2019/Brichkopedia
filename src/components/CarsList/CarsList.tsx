import React from 'react';
import './CarsList.css';
import CarItem from '../CarItem/CarItem';

function CarsList(cars: Array<Object>) {

    return (
        <div className="cars-list">
            <h2>Все машины</h2>
            {
                cars.map((car: Object) => (<CarItem car={car} />))
            }
        </div>
    )
}

export default CarsList;