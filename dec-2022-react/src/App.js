


// TASK #1
// 1. Описати всю сім'ю сімпсонів (5 персонажів)
//
// 2. Створити компонент який описує персонажа (властивості id,name,status,species,gender,image) з цього апі
// https://rickandmortyapi.com/
// https://rickandmortyapi.com/api/character
// Створити 6 персонажів

import './App.css';
import SimpsonsPeople from "./Components/SimpsonsPeople/SimpsonsPeople";
import Heroes from "./Components/Heroes/Heroes";


function App() {
  return (
      <div>
          <div className="app-main">
              <SimpsonsPeople/>
              <hr/>
              <Heroes/>
          </div>
      </div>
  );
}

export default App;
