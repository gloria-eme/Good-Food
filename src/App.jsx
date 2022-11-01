import { NavLink, Outlet } from 'react-router-dom';
import './App.css';


const App = () => {
  return (
    <div className="App">
      <header className='header'>
        <NavLink className= "nav" to="">Home</NavLink>
        <NavLink className= "nav" to="/platos">Platos</NavLink>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default App;
