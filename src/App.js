import { BrowserRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Clients from './components/Clients/Clients';
import Header from './components/Header/Header';
import TopNav from './components/TopNav/TopNav';

function App() {
  return (
    <>
      <BrowserRouter>
        <TopNav />

        <Routes>
          <Route index element={<Header />} />
          <Route path="/" element={<Clients />} />
        </Routes>
        <Clients />
      </BrowserRouter>
    </>
  );
}

export default App;
