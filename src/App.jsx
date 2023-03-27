import logo from './logo.svg';
import './App.css';
import ButtonComponent from "./components/ButtonComponent";
import ImageComponent from './components/ImageComponent';
import spider from './spider-man.webp';

function App() {
  return (
    <div>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <ButtonComponent btn='CLICCARE' />
          <ImageComponent url='https://www.smartworld.it/wp-content/uploads/2021/07/spider-man.jpg' alt='immagine'/>
        </header>
      </div>
    </div>
  );
}

export default App;
