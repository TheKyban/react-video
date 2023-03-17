import { Route, BrowserRouter as Router, Routes, } from 'react-router-dom';

import Header from './components/Headers';
import Home from './components/Home'
import Footer from './components/Footer';
import Videos from './components/Videos';
import Upload from './components/Upload';
import Signup from './components/Signup';
import Login from './components/Login';
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/videos' element={<Videos />} />
        <Route path='/upload' element={<Upload />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
