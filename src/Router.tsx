import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Main from './pages/main/main';
import Bottom from './pages/main/main-bottom/Bottom';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Service from './pages/service/Service';
import Portfolio from './pages/portfolio/Portfolio';

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                {/* 루트 경로로 접근 시 /main으로 리디렉션 */}
                <Route path="/" element={<Navigate to="/main" replace />} />
                <Route path="/main" element={<Main />} />
                <Route path="/main/about" element={<About />} />
                <Route path="/main/Contact" element={<Contact />} />
                <Route path="/main/service" element={<Service />} />
                <Route path="/main/portfolio" element={<Portfolio />} />



            </Routes>
            <Bottom /> {/* 항상 맨 아래에 고정 */}
        </Router>
    );
};

export default AppRouter;
