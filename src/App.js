import logo from './Mundo Fiesta - Logo 2021.jpg';
import './App.css';

function App() {
  return (
    <header className='navbar'>
      <h1><img src={logo} alt="logo" /></h1>
      <ul className='BtnCenter'>
          <button> Nosotros</button>
          <button> Productos</button>
          <button> Contacto</button>
      </ul>
      <div className='BtnRight'>

      
      <button>Login</button>
      </div> 
        
    </header>
  );
}

export default App;
