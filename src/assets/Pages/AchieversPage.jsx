import React from 'react';
import { Loader2, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AchieversPage = () => {
    const navigate = useNavigate();
    
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
            <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 text-center border-t-4 border-red-600">
                <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Loader2 className="w-10 h-10 text-red-600 animate-spin" />
                </div>
                
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
        </div>
    );
};

export default AchieversPage;
