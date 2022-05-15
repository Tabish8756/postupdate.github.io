import { BrowserRouter } from 'react-router-dom';
import {Routes, Route} from 'react-router-dom'
import './App.css';
import EditUser from './components/EditUser';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route exact path="/" element={<Home />}/>
      <Route path="/EditUser/:id" element={<EditUser/>}/>
    </Routes>
    </div>
   
  );
}

export default App;
