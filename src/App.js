import './App.css';
import { BrowserRouter,Routes, Route, Link } from 'react-router-dom';

import Home from './components/Home';
import Todolist from './components/Todolist';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <Link to='/'>Home</Link>{' '}
          <Link to='/todolist'>Todolist</Link>{' '}
        </nav>  
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path='todolist' element={<Todolist />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
