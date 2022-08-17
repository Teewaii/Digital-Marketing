import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import TopNav from './components/TopNav/TopNav';

function App() {
  return (

    <BrowserRouter>
      <TopNav />
      <Routes>
        <Route path="/" element={<Header />} />
      </Routes>


    </BrowserRouter>

  );
}

export default App;
