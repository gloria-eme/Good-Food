import { NavLink, Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';


const App = () => {
  return (
    <div className="App">
      <header className='header'>
        <Header/>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default App;
