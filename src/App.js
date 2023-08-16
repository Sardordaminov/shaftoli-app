import Navbar from './components/navbar-main/navbar'
import Footer from './components/footer/Footer'
import { Routes } from 'react-router-dom';

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
