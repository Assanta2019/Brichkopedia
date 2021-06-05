import React from 'react';
import './CarItem.css';

function CarItem(car: any) {

    console.log(car.car.name);

    return (
        <div className="CarItem">
            <h3>{car.car.name}</h3>
            <img src={car.car.img} alt="" />
            <span>Год: {car.car.year}</span>
            <p>Стоимость: {car.car.cost}руб</p>
        </div>
    )
}

export default CarItem;