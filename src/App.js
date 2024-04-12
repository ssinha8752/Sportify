
import './App.css';
import { Footer } from './components/Layout/Footer';
import { Header } from './components/Layout/Header';
import { Allroutes } from './routes/Allroutes';

function App() {
  return (
    <div className='App'>
      <Header/>
      <Allroutes/>
      <Footer/>
    </div>
  );
}

export default App;
