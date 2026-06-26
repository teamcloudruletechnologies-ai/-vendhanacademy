import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { BookOpen, Landmark, Building2, FileText, Train, ShieldCheck } from 'lucide-react';

const courses = [
    { name: 'UPSC', icon: Landmark, color: '#B91C1C', bg: '#FEF2F2', border: '#FECACA', materialPath: '/upsc-material' },
    { name: 'TNPSC', icon: Building2, color: '#15803D', bg: '#F0FDF4', border: '#BBF7D0', materialPath: '/tnpsc-material' },
    { name: 'TNSURB', icon: FileText, color: '#da9100', bg: '#EFF6FF', border: '#BFDBFE', materialPath: '/tnsurb-material' },
    { name: 'RRB', icon: Train, color: '#B45309', bg: '#FFFBEB', border: '#FDE68A', materialPath: '/rrb-material' },
    { name: 'BANKING', icon: ShieldCheck, color: '#7E22CE', bg: '#FAF5FF', border: '#DDD6FE', materialPath: '/banking-material' },
];

const StudyMaterial = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
            <Helmet>
                <title>Free Study Materials for UPSC, TNPSC & Banking | Vendhan Academy</title>
                <meta name="description" content="Access structured study materials, syllabus copies, previous year question papers, and study guides for TNPSC, UPSC, RRB, Banking, and TNSURB exams." />
                <meta name="keywords" content="TNPSC study material, UPSC study guide, banking exam materials free, RRB books, TNSURB exams prep, free exam downloads" />
                <link rel="canonical" href="https://vendhanacademy.com/studymaterial" />
                
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://vendhanacademy.com/studymaterial" />
                <meta property="og:title" content="Free Study Materials for UPSC, TNPSC & Banking | Vendhan Academy" />
                <meta property="og:description" content="Prepare efficiently with comprehensive notes and reference guides prepared by expert faculties at Vendhan Academy." />
                <meta property="og:image" content="https://vendhanacademy.com/src/assets/Images/Vendan%20logo.jpeg" />
            </Helmet>
            <Navbar />

            {/* Hero Banner */}
            <section className="relative bg-gradient-to-br from-red-700 via-red-600 to-red-800 pt-28 sm:pt-32 pb-16 sm:pb-20 overflow-hidden">
                <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-white/5 blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-red-900/30 blur-3xl"></div>

                <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">


                    <h1
                        className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 tracking-tight"
                        style={{ fontFamily: "'Cooper Black', 'Cooper Blk BT', serif" }}
                    >
                        Study Materials
                    </h1>

                    <p className="max-w-2xl mx-auto text-base sm:text-lg text-red-100 leading-relaxed">
                        Vendhan Academy offers structured Study Materials for all major government competitive examinations.
                    </p>
                </div>


            </section>

            {/* Course Buttons */}
            <section className="py-14 sm:py-20 flex-grow">
                <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
                        {courses.map((course) => {
                            const Icon = course.icon;
                            const linkPath = course.materialPath || '#';
                            const Wrapper = course.materialPath ? Link : 'button';
                            const wrapperProps = course.materialPath ? { to: linkPath } : {};
                            return (
                                <Wrapper
                                    key={course.name}
                                    {...wrapperProps}
                                    className="flex flex-col items-center gap-3 rounded-2xl px-4 py-6 border-2 bg-white hover:shadow-lg transition-all duration-300 cursor-pointer no-underline"
                                    style={{ borderColor: '#E5E7EB', textDecoration: 'none' }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.borderColor = course.color;
                                        e.currentTarget.style.backgroundColor = course.bg;
                                        e.currentTarget.style.boxShadow = `0 8px 25px ${course.color}18`;
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.borderColor = '#E5E7EB';
                                        e.currentTarget.style.backgroundColor = '#FFFFFF';
                                        e.currentTarget.style.boxShadow = 'none';
                                    }}
                                >
                                    <div
                                        className="w-14 h-14 rounded-full flex items-center justify-center"
                                        style={{ backgroundColor: course.bg }}
                                    >
                                        <Icon className="w-6 h-6" style={{ color: course.color }} />
                                    </div>
                                    <span className="text-sm sm:text-base font-bold text-gray-800 tracking-wider">
                                        {course.name}
                                    </span>
                                </Wrapper>
                            );
                        })}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default StudyMaterial;
