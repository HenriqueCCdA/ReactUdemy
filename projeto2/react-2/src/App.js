import logo from './logo.svg';
import './App.css';

import MeuComponenete from './components/MeuComponentes';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MeuComponenete titulo='Olá mundo'/>
      </header>
    </div>
  );
}

export default App;
