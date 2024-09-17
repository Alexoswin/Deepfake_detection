
import './App.css';
import NavBar from './Componrnts/nav';
import DropBox from './Componrnts/DropBoxcard';
import { Button } from 'bootstrap';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <DropBox/>
      <button  id = "submit" onClick> Submit   </button>
    </div>
  );
}

export default App;
