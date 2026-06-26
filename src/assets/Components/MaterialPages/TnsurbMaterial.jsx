import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { BookOpen, Clock } from 'lucide-react';

const COOPER = { fontFamily: "'Cooper Black', 'Cooper Blk BT', serif" };
const BROWN = 'rgb(150, 75, 0)';

const TnsurbMaterial = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
            <Helmet>
                <title>TNSURB Police Exam Study Materials | Vendhan Academy</title>
                <meta name="description" content="Download free study material, model questions, syllabus guides, and previous years question papers for TNSURB SI and Police Constable exams." />
                <meta name="keywords" content="TNSURB study material, Police exam notes, SI study guides free download, PC exam material" />
                <link rel="canonical" href="https://vendhanacademy.com/tnsurb-material" />
                
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://vendhanacademy.com/tnsurb-material" />
                <meta property="og:title" content="TNSURB Police Exam Study Materials | Vendhan Academy" />
                <meta property="og:description" content="Free study guides, reference booklets, and sample test question papers for TNSURB SI and PC aspirants." />
                <meta property="og:image" content="https://vendhanacademy.com/src/assets/Images/Vendan%20logo.jpeg" />
            </Helmet>
            <Navbar />

            {/* Hero Banner */}
            <section
                className="relative pt-28 sm:pt-32 pb-14 sm:pb-20 overflow-hidden"
                style={{ background: `linear-gradient(135deg, ${BROWN}, rgb(100, 50, 0), rgb(60, 30, 0))` }}
            >
                <div className="absolute top-10 right-10 w-72 h-72 rounded-full bg-white/5 blur-3xl" />
                <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-black/20 blur-3xl" />
                <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-6">
                        <BookOpen className="w-4 h-4 text-gray-200" />
                        <span className="text-sm font-semibold text-gray-100 tracking-wide">Study Material</span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight" style={COOPER}>
                        TNSURB Study Material
                    </h1>
                </div>
            </section>

            {/* Updating Soon Content */}
            <section className="py-16 sm:py-24 flex-grow flex items-center justify-center">
                <div className="max-w-[600px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div
                        className="bg-white rounded-2xl border border-gray-200 shadow-sm p-10 sm:p-14"
                        style={{ borderTop: `4px solid ${BROWN}` }}
                    >
                        <div
                            className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                            style={{ backgroundColor: '#FFF7ED' }}
                        >
                            <Clock className="w-8 h-8" style={{ color: BROWN }} />
                        </div>
                        <h2
                            className="text-xl sm:text-2xl font-bold text-gray-800 mb-3"
                            style={COOPER}
                        >
                            Study Material Updating Soon
                        </h2>
                        <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                            We are preparing comprehensive study materials for TNSURB exams. Please check back shortly for updated resources.
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default TnsurbMaterial;
