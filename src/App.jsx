import React, { useState, useEffect } from 'react';
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
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return (
            <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-[99999]">
                <div className="relative flex items-center justify-center">
                    {/* Animated rotating loading circle */}
                    <div className="w-36 h-36 border-4 border-gray-100 border-t-red-600 rounded-full animate-spin"></div>
                    {/* Logo inside the circle */}
                    <img 
                        src="/favicon.jpeg" 
                        alt="Vendhan Academy Logo" 
                        className="absolute w-24 h-24 rounded-full object-cover shadow-md"
                    />
                </div>
                <h2 className="mt-6 text-xl font-bold text-gray-800 tracking-wider animate-pulse" style={{ fontFamily: "sans-serif" }}>
                    VENDHAN ACADEMY
                </h2>
                <p className="mt-2 text-xs text-gray-400 font-semibold tracking-widest uppercase">
                    Shaping Future Leaders
                </p>
            </div>
        );
    }

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

