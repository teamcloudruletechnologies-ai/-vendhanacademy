import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../Components/Navbar';
import HeroSection from '../Components/Hero_section';
import Why_vendhan from '../Components/Why_vendhan';
import Archievers from '../Components/Archievers';
import Footer from '../Components/Footer';

const Home = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
            <Helmet>
                <title>Vendhan Academy | UPSC, TNPSC & Banking Coaching in Madurai</title>
                <meta name="description" content="Welcome to Vendhan Academy - Madurai's leading coaching institute for government exams. Expert training, study materials, & guidance for UPSC, TNPSC, RRB, TNSURB, and Banking." />
                <meta name="keywords" content="Vendhan Academy, UPSC coaching Madurai, TNPSC coaching Madurai, Banking exam training, RRB coaching, TNSURB exams, civil service coaching Madurai" />
                <link rel="canonical" href="https://vendhanacademy.com/" />
                
                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://vendhanacademy.com/" />
                <meta property="og:title" content="Vendhan Academy | UPSC, TNPSC & Banking Coaching in Madurai" />
                <meta property="og:description" content="Discover premier classroom coaching for competitive examinations. Nurturing future administrators with expert mentors and comprehensive material." />
                <meta property="og:image" content="https://vendhanacademy.com/src/assets/Images/Vendan%20logo.jpeg" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:url" content="https://vendhanacademy.com/" />
                <meta name="twitter:title" content="Vendhan Academy | UPSC, TNPSC & Banking Coaching" />
                <meta name="twitter:description" content="Leading coaching institute for government exams in Madurai. Expert preparation for TNPSC, UPSC, Banking, and Police exams." />
                <meta name="twitter:image" content="https://vendhanacademy.com/src/assets/Images/Vendan%20logo.jpeg" />
            </Helmet>

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
