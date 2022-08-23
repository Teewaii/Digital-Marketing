import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Clients from './components/Clients/Clients';
import Header from './components/Header/Header';
import Testimonials from './components/Testimonials/Testimonials';
import TopNav from './components/TopNav/TopNav';
import Users from './components/Users/Users';
import Value from './components/Value/Value';

function App() {
  return (
    <>

      <TopNav />

      <Routes>
        <Route index element={<Header />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/value" element={<Value />} />
      </Routes>
      <Clients />
      <Value />
      <Users />
      <Testimonials />

    </>
  );
}

export default App;
