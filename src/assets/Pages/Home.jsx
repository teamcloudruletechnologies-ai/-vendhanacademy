import React from 'react';
import Navbar from '../Components/Navbar';
import HeroSection from '../Components/Hero_section';
import Why_vendhan from '../Components/Why_vendhan';
import Archievers from '../Components/Archievers';
import Footer from '../Components/Footer';

const Home = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
            <Navbar />

            {/* Hero Section */}
            <main className="flex-grow">
                <HeroSection />
                <Why_vendhan />
                <Archievers />
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Home;
