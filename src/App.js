import React from 'react';
import './App.css';
import { Route, Switch, Redirect, Routes, BrowserRouter } from 'react-router-dom';
import TopBar from './components/TopBar_component/TopBar';
import Sidebar from './components/Sidebar_component/Sidebar';
import Prediction from './pages/Prediction'
import Performance from './pages/Performance'
import Engagement from './pages/Engagement'
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='body'>
      <div className='container'>
        <div className="top_bar">
          <TopBar />
        </div>

        <div className='content'>
          <div className='side_bar'>
            <Sidebar />
          </div>

          <div className='main-content'>
            <BrowserRouter>
              <Routes>
                <Route exact path="/" element={<Prediction />} />
                <Route exact path="/Performance" element={<Performance />} />
                <Route exact path="/Engagement" element={<Engagement />} />
              </Routes>
            </BrowserRouter>
            <div className='footer_wrap'>
              <Footer />
            </div>
          </div>

        </div>
        
      </div>
    </div>
  );
}

export default App;
