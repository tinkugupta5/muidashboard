import './App.css';
import Sidenav from './components/Sidenav';
import {Routes,Route,BrowserRouter} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Settings from './pages/Settings';
import Analytics from './pages/Analytics';
import Products from './pages/Products';

function App() {
  return (
    <>
    {/* <Sidenav/> */}

    <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<Home/>}/>
      <Route path='/about' exact element={<About/>}/>
      <Route path='/settings' exact element={<Settings/>}/>
      <Route path='/Analytics' exact element={<Analytics/>}/>
      <Route path='/products' exact element={<Products/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
