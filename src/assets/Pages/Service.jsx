import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { GraduationCap, Building2, Landmark, ShieldCheck, Train, FileText, BookOpen, ArrowRight } from 'lucide-react';

const COOPER_FONT = { fontFamily: "'Cooper Black', 'Cooper Blk BT', serif" };

const COURSES = [
    {
        name: 'TNPSC Group Exams Coaching',
        icon: Building2,
        color: '#15803D',
        bg: '#F0FDF4',
        gradient: 'from-green-600 to-green-700',
        shadow: 'shadow-green-600/20',
        path: '/tnpsc',
    },
    {
        name: 'UPSC Civil Services Coaching',
        icon: Landmark,
        color: '#B91C1C',
        bg: '#FEF2F2',
        gradient: 'from-red-600 to-red-700',
        shadow: 'shadow-red-600/20',
        path: '/upsc',
    },
    {
        name: 'Banking Exam Coaching',
        icon: ShieldCheck,
        color: '#6B7280',
        bg: '#F9FAFB',
        gradient: 'from-gray-600 to-gray-700',
        shadow: 'shadow-gray-600/20',
        path: '/banking',
    },
    {
        name: 'RRB Exam Coaching',
        icon: Train,
        color: '#da9100',
        bg: '#FDF6F2',
        gradient: 'from-yellow-600 to-yellow-700',
        shadow: 'shadow-yellow-600/20',
        path: '/rrb',
    },
    {
        name: 'TNSURB Grade 1 & Grade 2 Coaching',
        icon: FileText,
        color: '#92400E',
        bg: '#FFFBEB',
        gradient: 'from-amber-700 to-amber-800',
        shadow: 'shadow-amber-700/20',
        path: '/tnsurb',
    },
];

const Service = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
            <Navbar />

            {/* Hero Banner */}
            <section className="relative bg-gradient-to-br from-green-800 via-green-700 to-green-900 pt-28 sm:pt-32 pb-16 sm:pb-20 overflow-hidden">
                <div className="absolute top-10 right-10 w-72 h-72 rounded-full bg-white/5 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-green-950/30 blur-3xl"></div>

                <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-6">
                        <GraduationCap className="w-4 h-4 text-green-200" />
                        <span className="text-sm font-semibold text-green-100 tracking-wide">Coaching Programs</span>
                    </div>

                    <h1
                        className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 tracking-tight"
                        style={COOPER_FONT}
                    >
                        Our Services
                    </h1>

                    <p className="max-w-2xl mx-auto text-base sm:text-lg text-green-100 leading-relaxed">
                        Explore the coaching programs offered by Vendhan Academy.
                    </p>
                </div>
            </section>

            {/* ── Course Title Section ── */}
            <section className="py-14 sm:py-20 flex-grow">
                <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Section Heading */}
                    <div className="text-center mb-12 sm:mb-16">
                        <h2
                            className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-800 mb-3 tracking-tight"
                            style={COOPER_FONT}
                        >
                            Course Title
                        </h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-green-700 mx-auto rounded-full mb-4"></div>
                        <p className="text-gray-500 text-base sm:text-lg max-w-xl mx-auto">
                            Choose your path to success with our expert-led coaching programs.
                        </p>
                    </div>

                    {/* Course Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {COURSES.map((course) => {
                            const Icon = course.icon;
                            return (
                                <div
                                    key={course.name}
                                    className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-gray-200/60 transition-all duration-400 overflow-hidden flex flex-col"
                                >
                                    {/* Card Top Accent */}
                                    <div className={`h-1.5 bg-gradient-to-r ${course.gradient}`}></div>

                                    <div className="p-6 sm:p-7 flex flex-col flex-grow">
                                        {/* Icon */}
                                        <div
                                            className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                                            style={{ backgroundColor: course.bg, border: `1.5px solid ${course.color}20` }}
                                        >
                                            <Icon className="w-6 h-6" style={{ color: course.color }} />
                                        </div>

                                        {/* Course Name */}
                                        <h3 className="text-lg sm:text-xl font-extrabold text-gray-800 mb-4 leading-snug">
                                            {course.name}
                                        </h3>

                                        {/* Mode of Learning */}
                                        <div className="flex items-center gap-2.5 mb-6 bg-gray-50 rounded-lg px-4 py-3 border border-gray-100">
                                            <BookOpen className="w-4 h-4 text-gray-400 flex-shrink-0" />
                                            <div>
                                                <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider block">Mode of Learning</span>
                                                <span className="text-sm font-bold text-gray-700">Classroom Coaching</span>
                                            </div>
                                        </div>

                                        {/* Spacer */}
                                        <div className="flex-grow"></div>

                                        {/* Enroll Now Button */}
                                        <Link
                                            to="/contact"
                                            className={`inline-flex items-center justify-center gap-2 w-full bg-gradient-to-r ${course.gradient} text-white font-bold text-sm sm:text-[15px] px-6 py-3.5 rounded-xl ${course.shadow} shadow-lg hover:opacity-90 transition-all duration-300 group/btn`}
                                        >
                                            <span>Enroll Now</span>
                                            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                                        </Link>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Service;

