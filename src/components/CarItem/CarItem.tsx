import React from 'react';
import './CarItem.css';

function CarItem(car: any) {

    console.log(car.car.name);

    return (
        <div className="CarItem">
            <h2>{car.car.name}</h2>
            <img src={car.car.img} alt="" />
            <p>Год: {car.car.year}</p>
            <p>Стоимость: {car.car.cost}руб</p>
        </div>
    )
}

export default CarItem;