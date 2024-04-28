
import './App.css';
import { Footer } from './components/Layout/Footer';
import { Header } from './components/Layout/Header';
import { Allroutes } from './routes/Allroutes';

function App() {
  document.title="Sportify";
  return (
    <div className='App dark:bg-darkbg'>
      <Header/>
      <Allroutes/>
      <Footer/>
    </div>
  );
}

export default App;
