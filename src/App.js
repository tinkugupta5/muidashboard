import './App.css';
import Sidenav from './Sidenav';
import {Routes,Route,BrowserRouter} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Settings from './pages/Settings';

function App() {
  return (
    <>
    {/* <Sidenav/> */}

    <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<Home/>}/>
      <Route path='/about' exact element={<About/>}/>
      <Route path='/settings' exact element={<Settings/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
