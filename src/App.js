
import './App.css';
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Nevbar from './Components/Nevbar/Nevbar'
import Event from './Components/Event/Event'
import Cause from "./Components/Cause/Cause"
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";


function App() {
  return (
    <div className="App">
     <Router>
    <Nevbar/>
    <Switch>
    <Route path="/Cause" component={Cause} />
      <Route path="/About" component={About} />
      <Route path="/Contact" component={Contact} />
      <Route path="/Event" component={Event}/>
      <Route path="/" component={Home} />
      


    </Switch>
    </Router>
    </div>
  );
}

export default App;
