import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { GraduationCap } from 'lucide-react';

const COOPER_FONT = { fontFamily: "'Cooper Black', 'Cooper Blk BT', serif" };

const Upsc = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
            <Navbar />

            {/* ── Hero Banner ── */}
            <section className="relative bg-gradient-to-br from-red-800 via-red-700 to-red-900 pt-28 sm:pt-32 pb-16 sm:pb-24 overflow-hidden">
                <div className="absolute top-10 right-10 w-72 h-72 rounded-full bg-white/5 blur-3xl" />
                <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-red-950/40 blur-3xl" />

                <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-6">
                        <GraduationCap className="w-4 h-4 text-red-200" />
                        <span className="text-sm font-semibold text-red-100 tracking-wide">UPSC Civil Services</span>
                    </div>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-5 tracking-tight leading-tight" style={COOPER_FONT}>
                        UPSC Civil Services
                        <br />
                        <span className="text-red-300">Examination (CSE)</span>
                    </h1>
                </div>
            </section>

            {/* ── Main Content ── */}
            <section className="py-14 sm:py-20 flex-grow">
                <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">

                    {/* ═══ 1. Educational Qualification ═══ */}
                    <div className="mb-10 sm:mb-14">
                        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <span className="w-1.5 h-6 bg-red-700 rounded-full" />
                            1. Educational Qualification
                        </h3>
                        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="bg-red-800 border-b border-red-700">
                                        <th className="px-6 py-4 text-sm font-bold text-white uppercase tracking-wider">Criteria</th>
                                        <th className="px-6 py-4 text-sm font-bold text-white uppercase tracking-wider">Details</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 text-sm font-semibold text-gray-700">Minimum Qualification</td>
                                        <td className="px-6 py-4 text-sm text-gray-600">Bachelor's Degree from a recognized university</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 text-sm font-semibold text-gray-700">Final Year Students</td>
                                        <td className="px-6 py-4 text-sm text-gray-600">Can apply (must produce proof before main exam)</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 text-sm font-semibold text-gray-700">Degree Stream</td>
                                        <td className="px-6 py-4 text-sm text-gray-600">No restriction — Engineering, Arts, Science, Commerce, Medicine, or any other recognized degree</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* ═══ 2. Eligibility — Age Limit ═══ */}
                    <div className="mb-10 sm:mb-14">
                        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <span className="w-1.5 h-6 bg-red-700 rounded-full" />
                            2. Eligibility Criteria
                        </h3>

                        {/* Age Limit */}
                        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Age Limit <span className="normal-case font-normal">(calculated on 1st August of exam year)</span></p>
                        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm mb-5">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="bg-red-800 border-b border-red-700">
                                        <th className="px-6 py-4 text-sm font-bold text-white uppercase tracking-wider">Category</th>
                                        <th className="px-6 py-4 text-sm font-bold text-white uppercase tracking-wider">Age Limit</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 text-sm font-semibold text-gray-700">General</td>
                                        <td className="px-6 py-4 text-sm text-gray-600">21 – 32 years</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 text-sm font-semibold text-gray-700">OBC</td>
                                        <td className="px-6 py-4 text-sm text-gray-600">21 – 35 years</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 text-sm font-semibold text-gray-700">SC / ST</td>
                                        <td className="px-6 py-4 text-sm text-gray-600">21 – 37 years</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 text-sm font-semibold text-gray-700">PwBD</td>
                                        <td className="px-6 py-4 text-sm text-gray-600">Up to 42 years</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Attempt Limit */}
                        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Attempt Limit</p>
                        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="bg-red-800 border-b border-red-700">
                                        <th className="px-6 py-4 text-sm font-bold text-white uppercase tracking-wider">Category</th>
                                        <th className="px-6 py-4 text-sm font-bold text-white uppercase tracking-wider">Attempts</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 text-sm font-semibold text-gray-700">General</td>
                                        <td className="px-6 py-4 text-sm text-gray-600">6</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 text-sm font-semibold text-gray-700">OBC</td>
                                        <td className="px-6 py-4 text-sm text-gray-600">9</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 text-sm font-semibold text-gray-700">SC / ST</td>
                                        <td className="px-6 py-4 text-sm text-gray-600">Unlimited (within age limit)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* ═══ 3. Exam Pattern ═══ */}
                    <div className="mb-10 sm:mb-14">
                        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <span className="w-1.5 h-6 bg-red-700 rounded-full" />
                            3. Exam Pattern
                        </h3>

                        {/* Stage 1 — Preliminary */}
                        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Stage 1 — Preliminary Exam</p>
                        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm mb-4">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="bg-red-800 border-b border-red-700">
                                        <th className="px-6 py-4 text-sm font-bold text-white uppercase tracking-wider">Paper</th>
                                        <th className="px-6 py-4 text-sm font-bold text-white uppercase tracking-wider">Subject</th>
                                        <th className="px-6 py-4 text-sm font-bold text-white uppercase tracking-wider">Marks</th>
                                        
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4"><span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-red-100 text-red-800 text-xs font-bold">1</span></td>
                                        <td className="px-6 py-4 text-sm font-semibold text-gray-700">General Studies</td>
                                        <td className="px-6 py-4 text-sm text-gray-600">200</td>
                                       
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4"><span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-red-100 text-red-800 text-xs font-bold">2</span></td>
                                        <td className="px-6 py-4 text-sm font-semibold text-gray-700">CSAT (Aptitude)</td>
                                        <td className="px-6 py-4 text-sm text-gray-600">200</td>
                                        
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="bg-red-50 border border-red-200 rounded-lg px-5 py-3 mb-5">
                            <p className="text-sm text-green-800 leading-relaxed">
                                <strong>Note:</strong> 2 hours each paper · Negative marking · Paper 2 is qualifying (33%) · Subjects include History, Geography, Polity, Economy, Environment, Science & Current Affairs.
                            </p>
                        </div>

                        {/* Stage 2 — Mains */}
                        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Stage 2 — Main Examination (9 Papers)</p>
                        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm mb-4">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="bg-red-800 border-b border-red-700">
                                        <th className="px-6 py-4 text-sm font-bold text-white uppercase tracking-wider">Paper</th>
                                        <th className="px-6 py-4 text-sm font-bold text-white uppercase tracking-wider">Subject</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {[
                                        ['Paper A', 'Indian Language (Qualifying)'],
                                        ['Paper B', 'English (Qualifying)'],
                                        ['Paper 1', 'Essay'],
                                        ['Paper 2', 'General Studies I'],
                                        ['Paper 3', 'General Studies II'],
                                        ['Paper 4', 'General Studies III'],
                                        ['Paper 5', 'General Studies IV'],
                                        ['Paper 6', 'Optional Subject Paper 1'],
                                        ['Paper 7', 'Optional Subject Paper 2'],
                                    ].map(([paper, subject]) => (
                                        <tr key={paper} className="hover:bg-gray-50 transition-colors">
                                            <td className="px-6 py-3.5 text-sm font-semibold text-gray-700">{paper}</td>
                                            <td className="px-6 py-3.5 text-sm text-gray-600">{subject}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="bg-red-50 border border-red-200 rounded-lg px-5 py-3 mb-5">
                            <p className="text-sm text-green-800"><strong>Total Marks (Written):</strong> 1750 marks</p>
                        </div>

                        {/* Stage 3 — Interview */}
                        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Stage 3 — Interview</p>
                        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm mb-4">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="bg-red-800 border-b border-red-700">
                                        <th className="px-6 py-4 text-sm font-bold text-white uppercase tracking-wider">Stage</th>
                                        <th className="px-6 py-4 text-sm font-bold text-white uppercase tracking-wider">Marks</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 text-sm font-semibold text-gray-700">Personality Test</td>
                                        <td className="px-6 py-4 text-sm text-gray-600">275</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="bg-red-50 border border-red-200 rounded-lg px-5 py-3">
                            <p className="text-sm text-green-800"><strong>Final Ranking:</strong> 1750 + 275 = <strong>2025 marks</strong></p>
                        </div>
                    </div>

                    {/* ═══ 4. Syllabus ═══ */}
                    <div className="mb-10 sm:mb-14">
                        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <span className="w-1.5 h-6 bg-red-700 rounded-full" />
                            4. UPSC Syllabus
                        </h3>

                        {/* Preliminary — GS Paper 1 */}
                        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Preliminary — General Studies Paper 1</p>
                        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm mb-5">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="bg-red-800 border-b border-red-700">
                                        <th className="px-6 py-4 text-sm font-bold text-white uppercase tracking-wider w-16">S.No</th>
                                        <th className="px-6 py-4 text-sm font-bold text-white uppercase tracking-wider">Subject</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {[
                                        'Indian History',
                                        'Indian Polity',
                                        'Indian Economy',
                                        'Geography',
                                        'Environment & Ecology',
                                        'Science & Technology',
                                        'Current Affairs',
                                    ].map((subject, idx) => (
                                        <tr key={subject} className="hover:bg-gray-50 transition-colors">
                                            <td className="px-6 py-3.5">
                                                <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-red-100 text-red-800 text-xs font-bold">
                                                    {String(idx + 1).padStart(2, '0')}
                                                </span>
                                            </td>
                                            <td className="px-6 py-3.5 text-sm font-medium text-gray-700">{subject}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Preliminary — CSAT */}
                        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Preliminary — CSAT Paper</p>
                        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm mb-5">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="bg-red-800 border-b border-red-700">
                                        <th className="px-6 py-4 text-sm font-bold text-white uppercase tracking-wider w-16">S.No</th>
                                        <th className="px-6 py-4 text-sm font-bold text-white uppercase tracking-wider">Subject</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {[
                                        'Logical Reasoning',
                                        'Analytical Ability',
                                        'Decision Making',
                                        'Basic Mathematics',
                                        'Reading Comprehension',
                                    ].map((subject, idx) => (
                                        <tr key={subject} className="hover:bg-gray-50 transition-colors">
                                            <td className="px-6 py-3.5">
                                                <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-red-100 text-red-800 text-xs font-bold">
                                                    {String(idx + 1).padStart(2, '0')}
                                                </span>
                                            </td>
                                            <td className="px-6 py-3.5 text-sm font-medium text-gray-700">{subject}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Mains — GS Papers */}
                        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Mains Syllabus</p>
                        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="bg-red-800 border-b border-red-700">
                                        <th className="px-6 py-4 text-sm font-bold text-white uppercase tracking-wider">Paper</th>
                                        <th className="px-6 py-4 text-sm font-bold text-white uppercase tracking-wider">Topics</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 text-sm font-semibold text-gray-700">GS Paper 1</td>
                                        <td className="px-6 py-4 text-sm text-gray-600">Indian Culture · Ancient, Medieval & Modern History · Geography · Society</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 text-sm font-semibold text-gray-700">GS Paper 2</td>
                                        <td className="px-6 py-4 text-sm text-gray-600">Constitution · Governance · Social Justice · International Relations</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 text-sm font-semibold text-gray-700">GS Paper 3</td>
                                        <td className="px-6 py-4 text-sm text-gray-600">Economy · Agriculture · Science & Technology · Environment · Disaster Management · Internal Security</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 text-sm font-semibold text-gray-700">GS Paper 4</td>
                                        <td className="px-6 py-4 text-sm text-gray-600">Ethics · Integrity · Aptitude</td>
                                    </tr>
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

export default Upsc;
