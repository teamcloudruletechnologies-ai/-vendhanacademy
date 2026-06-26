import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const AchieversPage = () => {
    const navigate = useNavigate();
    
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
            <Helmet>
                <title>Success Stories & Achievers Gallery | Vendhan Academy</title>
                <meta name="description" content="View the success stories and achievements of our alumni who cleared TNPSC, UPSC, Banking, and other competitive government exams with guidance from Vendhan Academy." />
                <meta name="keywords" content="IAS achievers Madurai, TNPSC group toppers, Vendhan Academy alumni, government exam success stories" />
                <link rel="canonical" href="https://vendhanacademy.com/achievers" />
                
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://vendhanacademy.com/achievers" />
                <meta property="og:title" content="Success Stories & Achievers Gallery | Vendhan Academy" />
                <meta property="og:description" content="Meet our proud achievers who converted their government job dreams into reality with Vendhan Academy's mentorship." />
                <meta property="og:image" content="https://vendhanacademy.com/src/assets/Images/Vendan%20logo.jpeg" />
            </Helmet>
            <Navbar />
            
            <main className="flex-grow flex items-center justify-center p-4 pt-24 md:pt-28 lg:pt-32 pb-12">
                <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 text-center border-t-4 border-red-600">
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Cooper Black', 'Cooper Blk BT', serif" }}>
                        Updating Gallery
                    </h1>
                    
                    <p className="text-gray-600 mb-8 leading-relaxed">
                        We are currently compiling and updating our achievers gallery with the latest success stories. The new profiles will be available soon. Please check back later!
                    </p>
                    
                    <button 
                        onClick={() => navigate(-1)}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors duration-300 mx-auto"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Go Back
                    </button>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default AchieversPage;
