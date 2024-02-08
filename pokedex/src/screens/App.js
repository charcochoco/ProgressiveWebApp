import './App.css';
import {useNavigate, Outlet} from 'react-router-dom'

function App() {
  const navigate = useNavigate()

  return (
    <div className='text-center'>
        {/* <h3>Pokedex avec React</h3> */}
        <a 
          href=""
          onClick={() => navigate(`/`)}
        >
          Pokedex avec React
        </a>
        <Outlet />

        <div className='fixed-bottom text-center mb-3'>Créé par Romain Charcosset</div>
    </div>
  );
}

export default App;
