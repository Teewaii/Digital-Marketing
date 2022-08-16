import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import TopNav from './components/TopNav/TopNav';

function App() {
  return (
    <BrowserRouter>
      <TopNav />
    </BrowserRouter>

  );
}

export default App;
