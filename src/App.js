import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import TopNav from './components/TopNav/TopNav';

function App() {
  return (
    <BrowserRouter>
      <TopNav />
      <Header />
    </BrowserRouter>

  );
}

export default App;
