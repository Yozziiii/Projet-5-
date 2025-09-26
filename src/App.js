import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router';
import FicheLogement from './pages/FicheLogement';
import About from './pages/About';
import Error from './pages/Error';
import Home from './pages/Home';
import Header from './components/Header'
import Footer from './components/Footer'


function App() {
  return (
    <div className="App">
      {<Header/>}
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/FicheLogement/:id' element={<FicheLogement/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/*' element={<Error/>}/>
     </Routes>
      {<Footer/>}
    </div>
  );
}

export default App;
