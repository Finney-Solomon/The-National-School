
import './App.css';
import Footer from './Component/Footer';
import Navbar from './Component/Navbar';
import { ScrollBar } from './Component/ScrollBar';
import HomePage from './Pages/HomePage';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <ScrollBar/>
    <HomePage/>
    <Footer/>
    </div>
  );
}

export default App;
