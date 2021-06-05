import React from 'react';
import './CarsList.css';
import CarItem from '../CarItem/CarItem';

function CarsList() {

    const cars = [
        {name: 'Nissan Skyline GTR', year: 1990, cost: 2000000, img: 'https://i.pinimg.com/originals/06/35/ca/0635caa161c09f0c3fc1a68204d8f41d.jpg'},
        {name: 'Ferrary', year: 1989, cost: 1000000, img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Ferrari_F355_Coup%C3%A9.jpg/1200px-Ferrari_F355_Coup%C3%A9.jpg'},
        {name: 'VAZ2107', year: 1999, cost: 40000, img: 'https://autoreview.ru/images/Article/1699/Article_169952_860_575.jpg'}
      ];

    return (
        <div className="cars-list">
            <h2>Все машины</h2>
            <div className="list">
                {
                    cars.map((car) => (<CarItem car={car} />))
                }   
            </div>
        </div>
    )
}

export default CarsList;