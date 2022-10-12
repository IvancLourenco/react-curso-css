import { useState } from 'react';
import './App.css';
import MyComponent from './components/MyComponent';
import Title from './components/Title';

function App() {
  const n = 14
  const [name] = useState("Ivan")
  const redTitle = true
  
  return (
    <div className="App">
      {/*Css Global*/}
      <h1>React com CSS</h1>
      {/*Css Component*/}
      <MyComponent/>
      <p>Este e um paragrafo do app.js</p>
      {/*Css inline */}
      <p style= {{
        color: "blue",
        padding: "25px",
        borderTop:"2px solid red",
      }}>Este e um paragrafo inline</p>

      {/*Css inline  dinâmico*/}
      <h2 style={n < 10 ? ({color: "green"}) : ({color:"purple"})}>Css Dinâmico</h2>
      <h2 style={n < 15 ? ({color: "green"}) : ({color:"purple"})}>Css Dinâmico</h2>
      <h2 style={name === "Ivan" ? ({color: "green", background:"#000"}) : null }>Css Dinâmico</h2>

      {/*Css classe  dinâmico*/}

      <h2 className={redTitle ? "red-title" : "title"}>Este título é dinâmico</h2>

      {/*Css Modules */}
      <Title/>
      <h2 className='my-title'> testando</h2>

    </div>
  );
}

export default App;
