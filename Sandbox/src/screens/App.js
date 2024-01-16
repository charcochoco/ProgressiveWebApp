import { useState } from 'react';
import './App.css';
import Footer from '../components/Footer.js';

import {useNavigate, Outlet} from 'react-router-dom'

// //import Button from '../components/Button.js';
// //import {Footer, FooterBis} from '../components/Footer.js';
// import Agenda from '../screens/Agenda.js';
// import Counter from '../screens/Counter.js';
// import Home from '../screens/Home.js';
// import Typer from '../screens/Typer.js';
// import Weather from '../screens/Weather.js';

// const HOME_TAB = 'Home'
// const AGENDA_TAB = 'Agenda'
// const COUNTER_TAB = 'Counter'
// const TYPER_TAB = 'Typer'
// const WEATHER_TAB = 'Weather'

function App() {
const navigate = useNavigate()

  //const [currentTab, setCurrentTab] = useState('Home')

  //let renderedTab;

  // switch(currentTab){
  //   case HOME_TAB:
  //     renderedTab = <Home />
  //     break;
  //   case AGENDA_TAB:
  //     renderedTab = <Agenda day="lundi" />
  //     break;
  //   case COUNTER_TAB:
  //     renderedTab = <Counter />
  //     break;
  //   case TYPER_TAB:
  //       renderedTab = <Typer />
  //       break;
  //   case WEATHER_TAB:
  //     renderedTab = <Weather />
  //     break;
  //   default:
  //     renderedTab = <div>ERROR</div>  
  //     break;
  // }

  // // return (
  // //   <div className="App m-3">
      
  // //     {/* <Home />

  // //     <br />
  // //     <Agenda day="lundi" />

  // //     <br />
  // //     <Counter /> */}

  // //     <Footer />
  // //   </div>
  // // );
  return (
    <div className="App m-3">
      <ul className="nav">
        <li className="nav-item">
          <a 
            //className={"nav-link " + (currentTab === HOME_TAB && 'active')}
            className="nav-link"
            href="#"
            //onClick={() => setCurrentTab(HOME_TAB)}
            onClick={() => navigate('/home')}
          >
            Accueil
          </a>
        </li>
        <li className="nav-item">
          <a 
            //className={"nav-link " + (currentTab === AGENDA_TAB && 'active')}
            className="nav-link"
            href="#"
            //onClick={() => setCurrentTab(AGENDA_TAB)}
            onClick={() => navigate('/agenda')}
          >
            Agenda
          </a>
        </li>
        <li className="nav-item">
          <a
            //className={"nav-link " + (currentTab === COUNTER_TAB && 'active')}
            className="nav-link"
            href="#"
            //onClick={() => setCurrentTab(COUNTER_TAB)}
            onClick={() => navigate('/counter')}
          >
            Counter
          </a>
        </li>
        <li className="nav-item">
          <a
            //className={"nav-link " + (currentTab === TYPER_TAB && 'active')}
            className="nav-link"
            href="#"
            //onClick={() => setCurrentTab(TYPER_TAB)}
            onClick={() => navigate('/typer')}
          >
            Typer
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            //className={"nav-link " + (currentTab === WEATHER_TAB && 'active')}
            href="#"
            //onClick={() => setCurrentTab(WEATHER_TAB)}
            onClick={() => navigate('/weather')}
          >
            Weather
          </a>
        </li>
      </ul>

      <Outlet/>
      
      {/* {renderedTab} */}
      
      <Footer />
    </div>
      );
}

export default App;
