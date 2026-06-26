import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { GraduationCap } from 'lucide-react';

const COOPER_FONT = { fontFamily: "'Cooper Black', 'Cooper Blk BT', serif" };
const GREY = '#696969';

const Banking = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
            <Helmet>
                <title>Banking Exam Coaching in Madurai | IBPS, SBI, RBI | Vendhan Academy</title>
                <meta name="description" content="Join Vendhan Academy for premier IBPS PO, Clerk, SBI PO, Clerk, and RBI exam coaching in Madurai. Complete syllabus coverage, short tricks for quant & reasoning, and mock test series." />
                <meta name="keywords" content="Banking exam coaching Madurai, IBPS PO Clerk classes, SBI PO training, bank exam preparation, RBI assistant coaching" />
                <link rel="canonical" href="https://vendhanacademy.com/banking" />
                
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://vendhanacademy.com/banking" />
                <meta property="og:title" content="Banking Exam Coaching in Madurai | IBPS, SBI, RBI | Vendhan Academy" />
                <meta property="og:description" content="Ace banking competitive examinations (SBI, IBPS, RBI) with targeted training and extensive mock test practices." />
                <meta property="og:image" content="https://vendhanacademy.com/src/assets/Images/Vendan%20logo.jpeg" />
            </Helmet>
            <Navbar />

            {/* ── Hero Banner ── */}
            <section
                className="relative pt-28 sm:pt-32 pb-16 sm:pb-24 overflow-hidden"
                style={{ background: `linear-gradient(135deg, ${GREY}, rgb(90, 90, 90), rgb(60, 60, 60))` }}
            >
                <div className="absolute top-10 right-10 w-72 h-72 rounded-full bg-white/5 blur-3xl" />
                <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-black/20 blur-3xl" />

                <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-6">
                        <GraduationCap className="w-4 h-4 text-gray-200" />
                        <span className="text-sm font-semibold text-gray-100 tracking-wide">Banking Examinations</span>
                    </div>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-5 tracking-tight leading-tight" style={COOPER_FONT}>
                        Banking
                        <br />
                        <span style={{ color: 'rgb(220, 220, 220)' }}>Examination</span>
                    </h1>
                </div>
            </section>

            {/* ── Main Content ── */}
            <section className="py-14 sm:py-20 flex-grow">
                <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">

                    {/* ═══ 1. Eligibility Criteria ═══ */}
                    <div className="mb-10 sm:mb-14">
                        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <span className="w-1.5 h-6 rounded-full" style={{ backgroundColor: GREY }} />
                            1. Eligibility Criteria
                        </h3>

                        {/* Age Limit */}
                        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                            Age Limit <span className="normal-case font-normal">(depends on the post)</span>
                        </p>

                        {/* For Clerk */}
                        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">For Clerk</p>
                        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm mb-5">
                            <table className="w-full text-left">
                                <thead>
                                    <tr style={{ backgroundColor: GREY }}>
                                        <th className="px-6 py-4 text-sm font-bold text-white uppercase tracking-wider">Criteria</th>
                                        <th className="px-6 py-4 text-sm font-bold text-white uppercase tracking-wider">Details</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 text-sm font-semibold text-gray-700">Minimum Age</td>
                                        <td className="px-6 py-4 text-sm text-gray-600">20 years</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 text-sm font-semibold text-gray-700">Maximum Age</td>
                                        <td className="px-6 py-4 text-sm text-gray-600">28 years</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* For PO */}
                        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">For Probationary Officer (PO)</p>
                        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm mb-5">
                            <table className="w-full text-left">
                                <thead>
                                    <tr style={{ backgroundColor: GREY }}>
                                        <th className="px-6 py-4 text-sm font-bold text-white uppercase tracking-wider">Criteria</th>
                                        <th className="px-6 py-4 text-sm font-bold text-white uppercase tracking-wider">Details</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 text-sm font-semibold text-gray-700">Minimum Age</td>
                                        <td className="px-6 py-4 text-sm text-gray-600">20 years</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 text-sm font-semibold text-gray-700">Maximum Age</td>
                                        <td className="px-6 py-4 text-sm text-gray-600">30 years</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Age Relaxation */}
                        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Age Relaxation</p>
                        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm mb-5">
                            <table className="w-full text-left">
                                <thead>
                                    <tr style={{ backgroundColor: GREY }}>
                                        <th className="px-6 py-4 text-sm font-bold text-white uppercase tracking-wider">Category</th>
                                        <th className="px-6 py-4 text-sm font-bold text-white uppercase tracking-wider">Relaxation</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 text-sm font-semibold text-gray-700">OBC</td>
                                        <td className="px-6 py-4 text-sm text-gray-600">3 years</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 text-sm font-semibold text-gray-700">SC / ST</td>
                                        <td className="px-6 py-4 text-sm text-gray-600">5 years</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 text-sm font-semibold text-gray-700">PWD</td>
                                        <td className="px-6 py-4 text-sm text-gray-600">10 years</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="bg-gray-100 border border-gray-300 rounded-lg px-5 py-3">
                            <p className="text-sm text-gray-700 leading-relaxed">
                                <strong>Note:</strong> Candidates must be citizens of India.
                            </p>
                        </div>
                    </div>

                    {/* ═══ Educational Qualification ═══ */}
                    <div className="mb-10 sm:mb-14">
                        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <span className="w-1.5 h-6 rounded-full" style={{ backgroundColor: GREY }} />
                            Educational Qualification
                        </h3>

                        {/* General Banking Exams */}
                        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">For Most Banking Exams</p>
                        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm mb-5">
                            <table className="w-full text-left">
                                <thead>
                                    <tr style={{ backgroundColor: GREY }}>
                                        <th className="px-6 py-4 text-sm font-bold text-white uppercase tracking-wider">Qualification</th>
                                        <th className="px-6 py-4 text-sm font-bold text-white uppercase tracking-wider">Details</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 text-sm font-semibold text-gray-700">Minimum Qualification</td>
                                        <td className="px-6 py-4 text-sm text-gray-600">Bachelor's Degree in any discipline from a recognized university</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Specialist Officer */}
                        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">For Specialist Officer (SO) Posts</p>
                        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                            <table className="w-full text-left">
                                <thead>
                                    <tr style={{ backgroundColor: GREY }}>
                                        <th className="px-6 py-4 text-sm font-bold text-white uppercase tracking-wider">Qualification</th>
                                        <th className="px-6 py-4 text-sm font-bold text-white uppercase tracking-wider">Details</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 text-sm font-semibold text-gray-700">Specific Qualifications</td>
                                        <td className="px-6 py-4 text-sm text-gray-600">Engineering, Law, MBA, Agriculture, or IT degree may be required depending on the role</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* ═══ 2. Exam Pattern (IBPS PO) ═══ */}
                    <div className="mb-10 sm:mb-14">
                        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <span className="w-1.5 h-6 rounded-full" style={{ backgroundColor: GREY }} />
                            2. Exam Pattern (Example – IBPS PO)
                        </h3>

                        {/* Preliminary Exam */}
                        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Preliminary Exam</p>
                        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm mb-5">
                            <table className="w-full text-left">
                                <thead>
                                    <tr style={{ backgroundColor: GREY }}>
                                        <th className="px-6 py-4 text-sm font-bold text-white uppercase tracking-wider">Subject</th>
                                        <th className="px-6 py-4 text-sm font-bold text-white uppercase tracking-wider">Questions</th>
                                        <th className="px-6 py-4 text-sm font-bold text-white uppercase tracking-wider">Marks</th>
                                        <th className="px-6 py-4 text-sm font-bold text-white uppercase tracking-wider">Time</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 text-sm font-semibold text-gray-700">English Language</td>
                                        <td className="px-6 py-4 text-sm text-gray-600">30</td>
                                        <td className="px-6 py-4 text-sm text-gray-600">30</td>
                                        <td className="px-6 py-4 text-sm text-gray-600">20 min</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 text-sm font-semibold text-gray-700">Quantitative Aptitude</td>
                                        <td className="px-6 py-4 text-sm text-gray-600">35</td>
                                        <td className="px-6 py-4 text-sm text-gray-600">35</td>
                                        <td className="px-6 py-4 text-sm text-gray-600">20 min</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 text-sm font-semibold text-gray-700">Reasoning Ability</td>
                                        <td className="px-6 py-4 text-sm text-gray-600">35</td>
                                        <td className="px-6 py-4 text-sm text-gray-600">35</td>
                                        <td className="px-6 py-4 text-sm text-gray-600">20 min</td>
                                    </tr>
                                    <tr className="bg-gray-100 font-bold">
                                        <td className="px-6 py-4 text-sm font-bold text-gray-800">Total</td>
                                        <td className="px-6 py-4 text-sm font-bold text-gray-800">100</td>
                                        <td className="px-6 py-4 text-sm font-bold text-gray-800">100</td>
                                        <td className="px-6 py-4 text-sm font-bold text-gray-800">60 min</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Main Exam */}
                        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Main Exam</p>
                        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                            <table className="w-full text-left">
                                <thead>
                                    <tr style={{ backgroundColor: GREY }}>
                                        <th className="px-6 py-4 text-sm font-bold text-white uppercase tracking-wider">Subject</th>
                                        <th className="px-6 py-4 text-sm font-bold text-white uppercase tracking-wider">Questions</th>
                                        <th className="px-6 py-4 text-sm font-bold text-white uppercase tracking-wider">Marks</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 text-sm font-semibold text-gray-700">Reasoning & Computer Aptitude</td>
                                        <td className="px-6 py-4 text-sm text-gray-600">45</td>
                                        <td className="px-6 py-4 text-sm text-gray-600">60</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 text-sm font-semibold text-gray-700">Data Analysis & Interpretation</td>
                                        <td className="px-6 py-4 text-sm text-gray-600">35</td>
                                        <td className="px-6 py-4 text-sm text-gray-600">60</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 text-sm font-semibold text-gray-700">General / Economy / Banking Awareness</td>
                                        <td className="px-6 py-4 text-sm text-gray-600">40</td>
                                        <td className="px-6 py-4 text-sm text-gray-600">40</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 text-sm font-semibold text-gray-700">English Language</td>
                                        <td className="px-6 py-4 text-sm text-gray-600">35</td>
                                        <td className="px-6 py-4 text-sm text-gray-600">40</td>
                                    </tr>
                                    <tr className="bg-gray-100 font-bold">
                                        <td className="px-6 py-4 text-sm font-bold text-gray-800">Total</td>
                                        <td className="px-6 py-4 text-sm font-bold text-gray-800">155</td>
                                        <td className="px-6 py-4 text-sm font-bold text-gray-800">200</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* ═══ 3. Banking Exam Syllabus ═══ */}
                    <div className="mb-10 sm:mb-14">
                        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <span className="w-1.5 h-6 rounded-full" style={{ backgroundColor: GREY }} />
                            3. Banking Exam Syllabus
                        </h3>

                        <p className="text-sm text-gray-500 mb-5">The syllabus generally includes the following subjects:</p>

                        {/* 1. Quantitative Aptitude */}
                        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">1. Quantitative Aptitude</p>
                        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm mb-5">
                            <table className="w-full text-left">
                                <thead>
                                    <tr style={{ backgroundColor: GREY }}>
                                        <th className="px-6 py-4 text-sm font-bold text-white uppercase tracking-wider w-16">S.No</th>
                                        <th className="px-6 py-4 text-sm font-bold text-white uppercase tracking-wider">Topic</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {[
                                        'Simplification & Approximation',
                                        'Number System',
                                        'Ratio & Proportion',
                                        'Percentage',
                                        'Profit & Loss',
                                        'Time and Work',
                                        'Time, Speed and Distance',
                                        'Data Interpretation',
                                        'Simple & Compound Interest',
                                    ].map((topic, idx) => (
                                        <tr key={topic} className="hover:bg-gray-50 transition-colors">
                                            <td className="px-6 py-3.5">
                                                <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg text-white text-xs font-bold" style={{ backgroundColor: GREY }}>
                                                    {String(idx + 1).padStart(2, '0')}
                                                </span>
                                            </td>
                                            <td className="px-6 py-3.5 text-sm font-medium text-gray-700">{topic}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* 2. Reasoning Ability */}
                        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">2. Reasoning Ability</p>
                        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm mb-5">
                            <table className="w-full text-left">
                                <thead>
                                    <tr style={{ backgroundColor: GREY }}>
                                        <th className="px-6 py-4 text-sm font-bold text-white uppercase tracking-wider w-16">S.No</th>
                                        <th className="px-6 py-4 text-sm font-bold text-white uppercase tracking-wider">Topic</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {[
                                        'Coding and Decoding',
                                        'Syllogism',
                                        'Blood Relations',
                                        'Direction Sense',
                                        'Seating Arrangement',
                                        'Puzzles',
                                        'Inequality',
                                        'Input-Output',
                                    ].map((topic, idx) => (
                                        <tr key={topic} className="hover:bg-gray-50 transition-colors">
                                            <td className="px-6 py-3.5">
                                                <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg text-white text-xs font-bold" style={{ backgroundColor: GREY }}>
                                                    {String(idx + 1).padStart(2, '0')}
                                                </span>
                                            </td>
                                            <td className="px-6 py-3.5 text-sm font-medium text-gray-700">{topic}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* 3. English Language */}
                        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">3. English Language</p>
                        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm mb-5">
                            <table className="w-full text-left">
                                <thead>
                                    <tr style={{ backgroundColor: GREY }}>
                                        <th className="px-6 py-4 text-sm font-bold text-white uppercase tracking-wider w-16">S.No</th>
                                        <th className="px-6 py-4 text-sm font-bold text-white uppercase tracking-wider">Topic</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {[
                                        'Reading Comprehension',
                                        'Cloze Test',
                                        'Error Detection',
                                        'Sentence Improvement',
                                        'Para Jumbles',
                                        'Fill in the Blanks',
                                    ].map((topic, idx) => (
                                        <tr key={topic} className="hover:bg-gray-50 transition-colors">
                                            <td className="px-6 py-3.5">
                                                <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg text-white text-xs font-bold" style={{ backgroundColor: GREY }}>
                                                    {String(idx + 1).padStart(2, '0')}
                                                </span>
                                            </td>
                                            <td className="px-6 py-3.5 text-sm font-medium text-gray-700">{topic}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* 4. General Awareness / Banking Awareness */}
                        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">4. General Awareness / Banking Awareness</p>
                        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm mb-5">
                            <table className="w-full text-left">
                                <thead>
                                    <tr style={{ backgroundColor: GREY }}>
                                        <th className="px-6 py-4 text-sm font-bold text-white uppercase tracking-wider w-16">S.No</th>
                                        <th className="px-6 py-4 text-sm font-bold text-white uppercase tracking-wider">Topic</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {[
                                        'Current Affairs',
                                        'Banking Terminology',
                                        'Financial Awareness',
                                        'Government Schemes',
                                        'Static GK',
                                    ].map((topic, idx) => (
                                        <tr key={topic} className="hover:bg-gray-50 transition-colors">
                                            <td className="px-6 py-3.5">
                                                <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg text-white text-xs font-bold" style={{ backgroundColor: GREY }}>
                                                    {String(idx + 1).padStart(2, '0')}
                                                </span>
                                            </td>
                                            <td className="px-6 py-3.5 text-sm font-medium text-gray-700">{topic}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* 5. Computer Knowledge */}
                        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">5. Computer Knowledge</p>
                        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                            <table className="w-full text-left">
                                <thead>
                                    <tr style={{ backgroundColor: GREY }}>
                                        <th className="px-6 py-4 text-sm font-bold text-white uppercase tracking-wider w-16">S.No</th>
                                        <th className="px-6 py-4 text-sm font-bold text-white uppercase tracking-wider">Topic</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {[
                                        'Basic Computer Concepts',
                                        'Internet & Networking',
                                        'MS Office',
                                        'Computer Hardware & Software',
                                    ].map((topic, idx) => (
                                        <tr key={topic} className="hover:bg-gray-50 transition-colors">
                                            <td className="px-6 py-3.5">
                                                <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg text-white text-xs font-bold" style={{ backgroundColor: GREY }}>
                                                    {String(idx + 1).padStart(2, '0')}
                                                </span>
                                            </td>
                                            <td className="px-6 py-3.5 text-sm font-medium text-gray-700">{topic}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>



                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Banking;
