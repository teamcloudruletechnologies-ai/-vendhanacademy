import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { GraduationCap } from 'lucide-react';
import Group_I from './TnpscCards/Group_I';
import Group_II_IIA from './TnpscCards/Group_II,IIA';
import Group_IV from './TnpscCards/Group_IV';

const COOPER_FONT = { fontFamily: "'Cooper Black', 'Cooper Blk BT', serif" };

const GROUP_TABS = [
    { id: 'group1', label: 'Group I' },
    { id: 'group2', label: 'Group II & IIA' },
    { id: 'group4', label: 'Group IV' },
];

const Tnpsc = () => {
    const [activeTab, setActiveTab] = useState('group1');
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
            <Helmet>
                <title>TNPSC Group 1, 2, 4 Coaching in Madurai | Vendhan Academy</title>
                <meta name="description" content="Get complete details on TNPSC Group I, Group II & IIA, and Group IV examination preparation at Vendhan Academy. Expert faculty, updated study material, and mock test series." />
                <meta name="keywords" content="TNPSC Group 1, TNPSC Group 2, TNPSC Group 4, TNPSC coaching Madurai, Tamil Nadu public service commission exams training" />
                <link rel="canonical" href="https://vendhanacademy.com/tnpsc" />
                
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://vendhanacademy.com/tnpsc" />
                <meta property="og:title" content="TNPSC Group 1, 2, 4 Coaching in Madurai | Vendhan Academy" />
                <meta property="og:description" content="Prepare for TNPSC Group 1, 2, 4 exams with structured classroom learning and mock test series at Vendhan Academy." />
                <meta property="og:image" content="https://vendhanacademy.com/src/assets/Images/Vendan%20logo.jpeg" />
            </Helmet>
            <Navbar />

            {/* ── Hero Banner ── */}
            <section className="relative bg-gradient-to-br from-green-800 via-green-700 to-green-900 pt-28 sm:pt-32 pb-16 sm:pb-24 overflow-hidden">
                <div className="absolute top-10 right-10 w-72 h-72 rounded-full bg-white/5 blur-3xl" />
                <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-green-950/40 blur-3xl" />

                <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-6">
                        <GraduationCap className="w-4 h-4 text-green-200" />
                        <span className="text-sm font-semibold text-green-100 tracking-wide">TNPSC Group Exams</span>
                    </div>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-5 tracking-tight leading-tight" style={COOPER_FONT}>
                        TNPSC Group Exams
                        <br />
                        <span className="text-green-300">Complete Details</span>
                    </h1>
                </div>
            </section>

            {/* ── Group Tab Buttons ── */}
            <div className="bg-white border-b border-gray-200 sticky top-[65px] sm:top-[73px] z-[90]">
                <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-center gap-2 sm:gap-3 py-3 overflow-x-auto">
                        {GROUP_TABS.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-5 sm:px-7 py-2.5 rounded-full text-[14px] sm:text-[15px] font-bold whitespace-nowrap transition-all duration-300 ${activeTab === tab.id
                                    ? 'bg-green-700 text-white shadow-lg shadow-green-700/20'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-800'
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── Main Content ── */}
            <section className="py-14 sm:py-20 flex-grow">
                <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">

                    {activeTab === 'group1' && <Group_I />}

                    {/* ════════ GROUP II & IIA CONTENT ════════ */}
                    {activeTab === 'group2' && <Group_II_IIA />}

                    {/* ════════ GROUP IV CONTENT ════════ */}
                    {activeTab === 'group4' && <Group_IV />}

                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Tnpsc;
