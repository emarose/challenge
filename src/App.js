import Navigation from './Components/Navigation/Navigation';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Contacto from './Components/Contacto/Contacto';
import Promociones from './Components/Promociones/Promociones';
import Descuentos from './Components/Descuentos/Descuentos';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route path="/contacto"><Navigation/><Contacto/><Footer/></Route>
        <Route path="/promocionesydescuentos"><Navigation/><Descuentos/><Promociones/><Footer/></Route>
        <Route path="/" exact><Home /></Route> 

      </Switch>
    </Router>
    </>
  );
}

export default App;
