import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './assets/Pages/Home';
import AboutUs from './assets/Pages/AboutUs';
import ContactUS from './assets/Pages/ContactUS';
import Service from './assets/Pages/Service';
import StudyMaterial from './assets/Pages/StudyMaterial';
import FloatingButtons from './assets/Components/FloatingButtons';
import Tnpsc from './assets/Components/Courses/Tnpsc';
import Upsc from './assets/Components/Courses/Upsc';
import Rrb from './assets/Components/Courses/Rrb';
import Banking from './assets/Components/Courses/Banking';
import Tnsurb from './assets/Components/Courses/Tnsurb';
import TnsurbMaterial from './assets/Components/MaterialPages/TnsurbMaterial';
import UpscMaterial from './assets/Components/MaterialPages/UpscMaterial';
import TnpsMaterial from './assets/Components/MaterialPages/TnpsMaterial';
import RrbMaterial from './assets/Components/MaterialPages/RrbMaterial';
import BankingMaterial from './assets/Components/MaterialPages/BankingMaterial';
import AchieversPage from './assets/Pages/AchieversPage';

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/service" element={<Service />} />
                <Route path="/studymaterial" element={<StudyMaterial />} />
                <Route path="/contact" element={<ContactUS />} />
                <Route path="/tnpsc" element={<Tnpsc />} />
                <Route path="/upsc" element={<Upsc />} />
                <Route path="/rrb" element={<Rrb />} />
                <Route path="/banking" element={<Banking />} />
                <Route path="/tnsurb" element={<Tnsurb />} />
                <Route path="/tnsurb-material" element={<TnsurbMaterial />} />
                <Route path="/upsc-material" element={<UpscMaterial />} />
                <Route path="/tnpsc-material" element={<TnpsMaterial />} />
                <Route path="/rrb-material" element={<RrbMaterial />} />
                <Route path="/banking-material" element={<BankingMaterial />} />
                <Route path="/achievers" element={<AchieversPage />} />
            </Routes>
            <FloatingButtons />
        </Router>
    );
}

