
import './App.css';
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Nevbar from './Components/Nevbar/Nevbar'
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";


function App() {
  return (
    <div className="App">
     <Router>
    <Nevbar/>
    <Switch>
    
      <Route path="/About" component={About} />
      <Route path="/Contact" component={Contact} />


    </Switch>
    </Router>
    </div>
  );
}

export default App;
