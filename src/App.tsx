import './App.css';

import CarsList from './components/CarsList/CarsList';

function App() {
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
        <CarsList />
      </div>
    </div>
  );
}

export default App;
