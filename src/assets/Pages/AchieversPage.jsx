import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const AchieversPage = () => {
    const navigate = useNavigate();
    
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
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
