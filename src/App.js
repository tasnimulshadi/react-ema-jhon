import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div>
      <nav className='navigation'>
        <div className='container height100'>
          <Header></Header>
        </div>
      </nav>

      <div className='container'>
        <Shop></Shop>
      </div>

    </div>
  );
}

export default App;
