
import './App.css';
import NavBar from './Componrnts/nav';
import DropBox from './Componrnts/DropBoxcard';
import Login from './Componrnts/Login';
import { 
  BrowserRouter as Router, 
  Route, 
  Routes,
 } from 'react-router-dom';


function App() {
  return (
   <>
   <Router>
   <div className="App">
    <NavBar />
     <Routes>
      <Route path="/" Component={DropBox} />
      <Route path='/Login' Component={Login} />
     </Routes>
    </div>
   </Router>
   </>
  );
}

export default App;
