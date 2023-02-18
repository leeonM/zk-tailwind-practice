import './App.css';
import Elegibility from './components/Elegibility';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Info from './components/Info';

function App() {
  return (
    <div className='bg-zk-blue text-white'>
      <Header />
      <Hero />
      <Elegibility />
      <Info />
      <Footer />
    </div>
  );
}

export default App;
