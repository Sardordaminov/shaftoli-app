import Navbar from './components/navbar-main/navbar'
import Footer from './components/footer/footer'
import { Routes } from './routes'

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
