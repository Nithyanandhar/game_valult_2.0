import './App.css'
import Signup from './page/signup.jsx'
import { Route , Routes } from 'react-router-dom';
import Home from './page/Home.jsx';


function App() {
 
  return (
    <Routes>
        <Route path='/home' element={<Home />}/>
        <Route path='/signup' element={<Signup/>}/>
    </Routes>
  )
}

export default App;