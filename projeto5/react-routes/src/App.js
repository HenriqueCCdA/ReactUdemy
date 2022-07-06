import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom';

import Usuarios from './components/Usuarios/Usuarios';
import AdicionarUsuario from './components/AdicionarUsuario/AdicionarUsuario';
import Home from './components/Home/Home';
import DetalhesUsuario from './components/DetalhesUsuario/DetalhesUsuario';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink to="/" exact>Início</NavLink>
              </li>
              <li>
                <NavLink to="/usuarios">Usuários Cadastrados</NavLink>
              </li>
              <li>
                <NavLink to="/adicionar">Adicionar Usuários</NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/usuarios/:id">
              <DetalhesUsuario/>
            </Route>
            <Route path="/usuarios">
              <Usuarios />
            </Route>
            <Route path="/adicionar">
              <AdicionarUsuario />
            </Route>

            <Route  path="*">
              <h1>404</h1>
              <p>Página não encontrada!</p>
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
