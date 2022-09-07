import { BrowserRouter, Route, Routes } from 'react-router-dom';
import useState from 'react';
import './App.css';
import Clients from './components/Clients/Clients';
import FAQ from './components/FAQ/FAQ';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Subscribe from './components/Subscribe/Subscribe';
import Testimonials from './components/Testimonials/Testimonials';
import TopNav from './components/TopNav/TopNav';
import Users from './components/Users/Users';
import Value from './components/Value/Value';

function App() {



  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter> */}

      <TopNav />
      <Header />
      <Clients />
      <Value />
      <Users />
      <Testimonials />
      <FAQ />
      <Subscribe />
      <FAQ />
      <Footer />


      {/* <TopNav />
      <Routes>
        <Route index element={<Header />} />
        <Route path="clients" element={<Clients />} />
        <Route path="values" element={<Value />} />
        <Route path="users" element={<Users />} />
        <Route path="testimonials" element={<Testimonials />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="subscribe" element={<Subscribe />} />
        <Route path="footer" element={<Footer />} />
      </Routes> */}
    </>
  );
}

export default App;

