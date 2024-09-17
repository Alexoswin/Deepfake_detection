
import DropBox from './Components/Dropbox.js';
import NavBar from './Components/navbar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div id ="body">
      <NavBar />
      
      <DropBox />
      <button type="button" id ="btn"  className="btn btn-primary">Check</button>
      
      
    </div>
  );
}

export default App;
