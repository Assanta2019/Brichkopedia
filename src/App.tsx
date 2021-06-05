import './App.css';

import CarsList from './components/CarsList/CarsList';

function App() {
  let cars = [
    {name: 'Nissan Skyline GTR', year: 1990, cost: 2000000},
    {name: 'Ferrary', year: 1989, cost: 1000000},
    {name: 'VAZ2107', year: 1999, cost: 40000}
  ];

  return (
    <div className="App">
      <div className="header">
        <h1 className="title">Бричкопедия</h1>
        <p className="subtitle">Узнай все о своей бричке</p>
        <div className="nav">
          <a href="/all">Все брички</a>
          <a href="????">Сравнение</a>
        </div>
      </div>

      <div className="cars">
        <CarsList {...cars} />
      </div>
    </div>
  );
}

export default App;
