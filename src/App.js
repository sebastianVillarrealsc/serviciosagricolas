import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PaginaUno from './components/pages/PaginaUno';
import PaginaDos from './components/pages/PaginaDos';
import PaginaTres from './components/pages/PaginaTres';
import PaginaCuatro from './components/pages/PaginaCuatro';

function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/paginaUno">Página Uno</Link>
                        </li>
                        <li>
                            <Link to="/paginaDos">Página Dos</Link>
                        </li>
                        <li>
                            <Link to="/paginaTres">Página Tres</Link>
                        </li>
                        <li>
                            <Link to="/paginaCuatro">Página Cuatro</Link>
                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Route path="/paginaUno">
                        <PaginaUno />
                    </Route>
                    <Route path="/paginaDos">
                        <PaginaDos />
                    </Route>
                    <Route path="/paginaTres">
                        <PaginaTres />
                    </Route>
                    <Route path="/paginaCuatro">
                        <PaginaCuatro />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;


