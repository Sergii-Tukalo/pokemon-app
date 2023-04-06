import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import { About } from './components/About';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { PokemonDetails } from './components/PokemonDetails';
import { PokemonPage } from './components/PokemonPage';

export function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/pokemon"
            element={<PokemonPage />}
          />
          <Route
            path="/pokemon/:id"
            element={<PokemonDetails />}
          />
          <Route
            path="/about"
            element={<About />}
          />
        </Routes>
      </Container>
    </div>
  );
}
