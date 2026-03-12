import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { GraduationCap } from 'lucide-react';

const COOPER_FONT = { fontFamily: "'Cooper Black', 'Cooper Blk BT', serif" };
const GOLD = '#da9100';

const Rrb = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
            <Navbar />

            {/* ── Hero Banner ── */}
            <section
                className="relative pt-28 sm:pt-32 pb-16 sm:pb-24 overflow-hidden"
                style={{ background: `linear-gradient(135deg, ${GOLD}, #b87a00, #8a5c00)` }}
            >
                <div className="absolute top-10 right-10 w-72 h-72 rounded-full bg-white/5 blur-3xl" />
                <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-black/20 blur-3xl" />

                <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-6">
                        <GraduationCap className="w-4 h-4 text-gray-200" />
                        <span className="text-sm font-semibold text-gray-100 tracking-wide">Railway Recruitment Board</span>
                    </div>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-5 tracking-tight leading-tight" style={COOPER_FONT}>
                        RRB Railway
                        <br />
                        <span style={{ color: '#ffe0a0' }}>Examination</span>
                    </h1>
                </div>
            </section>

            {/* ── Main Content ── */}
            <section className="py-14 sm:py-20 flex-grow">
                <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">

                    {/* ═══ 1. Eligibility Criteria ═══ */}
                    <div className="mb-10 sm:mb-14">
                        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <span className="w-1.5 h-6 rounded-full" style={{ backgroundColor: GOLD }} />
                            1. Eligibility Criteria
                        </h3>

                        {/* Age Limit */}
                        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                            Age Limit <span className="normal-case font-normal">(depends on the specific RRB post)</span>
                        </p>
                        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm mb-5">
                            <table className="w-full text-left">
                                <thead>
                                    <tr style={{ backgroundColor: GOLD }}>
                                        <th className="px-6 py-4 text-sm font-bold text-white uppercase tracking-wider">Criteria</th>
                                        <th className="px-6 py-4 text-sm font-bold text-white uppercase tracking-wider">Details</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    <tr className="hover:bg-amber-50 transition-colors">
                                        <td className="px-6 py-4 text-sm font-semibold text-gray-700">Minimum Age</td>
                                        <td className="px-6 py-4 text-sm text-gray-600">18 years</td>
                                    </tr>
                                    <tr className="hover:bg-amber-50 transition-colors">
                                        <td className="px-6 py-4 text-sm font-semibold text-gray-700">Maximum Age (Most Technical & NTPC posts)</td>
                                        <td className="px-6 py-4 text-sm text-gray-600">30 years</td>
                                    </tr>
                                    <tr className="hover:bg-amber-50 transition-colors">
                                        <td className="px-6 py-4 text-sm font-semibold text-gray-700">Maximum Age (Some posts)</td>
                                        <td className="px-6 py-4 text-sm text-gray-600">33 years</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Age Relaxation */}
                        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Age Relaxation</p>
                        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm mb-5">
                            <table className="w-full text-left">
                                <thead>
                                    <tr style={{ backgroundColor: GOLD }}>
                                        <th className="px-6 py-4 text-sm font-bold text-white uppercase tracking-wider">Category</th>
                                        <th className="px-6 py-4 text-sm font-bold text-white uppercase tracking-wider">Relaxation</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    <tr className="hover:bg-amber-50 transition-colors">
                                        <td className="px-6 py-4 text-sm font-semibold text-gray-700">OBC</td>
                                        <td className="px-6 py-4 text-sm text-gray-600">3 years</td>
                                    </tr>
                                    <tr className="hover:bg-amber-50 transition-colors">
                                        <td className="px-6 py-4 text-sm font-semibold text-gray-700">SC / ST</td>
                                        <td className="px-6 py-4 text-sm text-gray-600">5 years</td>
                                    </tr>
                                    <tr className="hover:bg-amber-50 transition-colors">
                                        <td className="px-6 py-4 text-sm font-semibold text-gray-700">PWD</td>
                                        <td className="px-6 py-4 text-sm text-gray-600">10 years</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="rounded-lg px-5 py-3" style={{ backgroundColor: '#fff8e8', border: '1px solid #f0d890' }}>
                            <p className="text-sm leading-relaxed" style={{ color: '#8a5c00' }}>
                                <strong>Note:</strong> Candidates must be citizens of India.
                            </p>
                        </div>
                    </div>

                    {/* ═══ 2. Educational Qualification ═══ */}
                    <div className="mb-10 sm:mb-14">
                        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <span className="w-1.5 h-6 rounded-full" style={{ backgroundColor: GOLD }} />
                            2. Educational Qualification
                        </h3>

                        {/* Group D */}
                        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">For Group D Posts</p>
                        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm mb-5">
                            <table className="w-full text-left">
                                <thead>
                                    <tr style={{ backgroundColor: GOLD }}>
                                        <th className="px-6 py-4 text-sm font-bold text-white uppercase tracking-wider">Qualification</th>
                                        <th className="px-6 py-4 text-sm font-bold text-white uppercase tracking-wider">Details</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    <tr className="hover:bg-amber-50 transition-colors">
                                        <td className="px-6 py-4 text-sm font-semibold text-gray-700">Minimum Qualification</td>
                                        <td className="px-6 py-4 text-sm text-gray-600">10th Pass (SSLC) or ITI from a recognized institution</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* NTPC */}
                        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">For NTPC (Non-Technical Popular Categories)</p>
                        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm mb-5">
                            <table className="w-full text-left">
                                <thead>
                                    <tr style={{ backgroundColor: GOLD }}>
                                        <th className="px-6 py-4 text-sm font-bold text-white uppercase tracking-wider">Post Type</th>
                                        <th className="px-6 py-4 text-sm font-bold text-white uppercase tracking-wider">Qualification Required</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    <tr className="hover:bg-amber-50 transition-colors">
                                        <td className="px-6 py-4 text-sm font-semibold text-gray-700">Clerical Posts</td>
                                        <td className="px-6 py-4 text-sm text-gray-600">12th Pass (Junior Clerk, Accounts Clerk, etc.)</td>
                                    </tr>
                                    <tr className="hover:bg-amber-50 transition-colors">
                                        <td className="px-6 py-4 text-sm font-semibold text-gray-700">Graduate-Level Posts</td>
                                        <td className="px-6 py-4 text-sm text-gray-600">Bachelor's Degree (Station Master, Commercial Apprentice, Traffic Assistant, etc.)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Technical Posts */}
                        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">For Technical Posts (JE / ALP)</p>
                        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                            <table className="w-full text-left">
                                <thead>
                                    <tr style={{ backgroundColor: GOLD }}>
                                        <th className="px-6 py-4 text-sm font-bold text-white uppercase tracking-wider">Qualification</th>
                                        <th className="px-6 py-4 text-sm font-bold text-white uppercase tracking-wider">Details</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    <tr className="hover:bg-amber-50 transition-colors">
                                        <td className="px-6 py-4 text-sm font-semibold text-gray-700">Minimum Qualification</td>
                                        <td className="px-6 py-4 text-sm text-gray-600">Diploma / Engineering Degree in relevant discipline</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* ═══ 3. Exam Pattern ═══ */}
                    <div className="mb-10 sm:mb-14">
                        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <span className="w-1.5 h-6 rounded-full" style={{ backgroundColor: GOLD }} />
                            3. Exam Pattern (RRB NTPC / Group D CBT)
                        </h3>

                        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm mb-5">
                            <table className="w-full text-left">
                                <thead>
                                    <tr style={{ backgroundColor: GOLD }}>
                                        <th className="px-6 py-4 text-sm font-bold text-white uppercase tracking-wider">Subject</th>
                                        <th className="px-6 py-4 text-sm font-bold text-white uppercase tracking-wider">No. of Questions</th>
                                        <th className="px-6 py-4 text-sm font-bold text-white uppercase tracking-wider">Marks</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    <tr className="hover:bg-amber-50 transition-colors">
                                        <td className="px-6 py-4 text-sm font-semibold text-gray-700">Mathematics</td>
                                        <td className="px-6 py-4 text-sm text-gray-600">30</td>
                                        <td className="px-6 py-4 text-sm text-gray-600">30</td>
                                    </tr>
                                    <tr className="hover:bg-amber-50 transition-colors">
                                        <td className="px-6 py-4 text-sm font-semibold text-gray-700">General Intelligence & Reasoning</td>
                                        <td className="px-6 py-4 text-sm text-gray-600">30</td>
                                        <td className="px-6 py-4 text-sm text-gray-600">30</td>
                                    </tr>
                                    <tr className="hover:bg-amber-50 transition-colors">
                                        <td className="px-6 py-4 text-sm font-semibold text-gray-700">General Awareness</td>
                                        <td className="px-6 py-4 text-sm text-gray-600">40</td>
                                        <td className="px-6 py-4 text-sm text-gray-600">40</td>
                                    </tr>
                                    <tr style={{ backgroundColor: '#fff8e8' }} className="font-bold">
                                        <td className="px-6 py-4 text-sm font-bold text-gray-800">Total</td>
                                        <td className="px-6 py-4 text-sm font-bold text-gray-800">100</td>
                                        <td className="px-6 py-4 text-sm font-bold text-gray-800">100</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Important Points */}
                        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Important Points</p>
                        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                            <table className="w-full text-left">
                                <thead>
                                    <tr style={{ backgroundColor: GOLD }}>
                                        <th className="px-6 py-4 text-sm font-bold text-white uppercase tracking-wider w-16">S.No</th>
                                        <th className="px-6 py-4 text-sm font-bold text-white uppercase tracking-wider">Detail</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {[
                                        'Duration: 90 minutes',
                                        'Negative marking: 1/3 mark deducted for each wrong answer',
                                        'All questions are objective type (MCQ)',
                                    ].map((point, idx) => (
                                        <tr key={idx} className="hover:bg-amber-50 transition-colors">
                                            <td className="px-6 py-3.5">
                                                <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg text-white text-xs font-bold" style={{ backgroundColor: GOLD }}>
                                                    {String(idx + 1).padStart(2, '0')}
                                                </span>
                                            </td>
                                            <td className="px-6 py-3.5 text-sm font-medium text-gray-700">{point}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* ═══ 4. RRB Exam Syllabus ═══ */}
                    <div className="mb-10 sm:mb-14">
                        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <span className="w-1.5 h-6 rounded-full" style={{ backgroundColor: GOLD }} />
                            4. RRB Exam Syllabus
                        </h3>

                        {/* Mathematics */}
                        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">1. Mathematics</p>
                        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm mb-5">
                            <table className="w-full text-left">
                                <thead>
                                    <tr style={{ backgroundColor: GOLD }}>
                                        <th className="px-6 py-4 text-sm font-bold text-white uppercase tracking-wider w-16">S.No</th>
                                        <th className="px-6 py-4 text-sm font-bold text-white uppercase tracking-wider">Topic</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {[
                                        'Number System',
                                        'Percentage',
                                        'Ratio and Proportion',
                                        'Profit and Loss',
                                        'Time and Work',
                                        'Time, Speed and Distance',
                                        'Simple & Compound Interest',
                                        'Algebra',
                                        'Geometry',
                                        'Data Interpretation',
                                    ].map((topic, idx) => (
                                        <tr key={topic} className="hover:bg-amber-50 transition-colors">
                                            <td className="px-6 py-3.5">
                                                <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg text-white text-xs font-bold" style={{ backgroundColor: GOLD }}>
                                                    {String(idx + 1).padStart(2, '0')}
                                                </span>
                                            </td>
                                            <td className="px-6 py-3.5 text-sm font-medium text-gray-700">{topic}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* General Intelligence & Reasoning */}
                        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">2. General Intelligence & Reasoning</p>
                        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm mb-5">
                            <table className="w-full text-left">
                                <thead>
                                    <tr style={{ backgroundColor: GOLD }}>
                                        <th className="px-6 py-4 text-sm font-bold text-white uppercase tracking-wider w-16">S.No</th>
                                        <th className="px-6 py-4 text-sm font-bold text-white uppercase tracking-wider">Topic</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {[
                                        'Analogies',
                                        'Coding and Decoding',
                                        'Syllogism',
                                        'Blood Relations',
                                        'Direction Test',
                                        'Puzzle',
                                        'Venn Diagram',
                                        'Decision Making',
                                    ].map((topic, idx) => (
                                        <tr key={topic} className="hover:bg-amber-50 transition-colors">
                                            <td className="px-6 py-3.5">
                                                <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg text-white text-xs font-bold" style={{ backgroundColor: GOLD }}>
                                                    {String(idx + 1).padStart(2, '0')}
                                                </span>
                                            </td>
                                            <td className="px-6 py-3.5 text-sm font-medium text-gray-700">{topic}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* General Awareness */}
                        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">3. General Awareness</p>
                        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm mb-5">
                            <table className="w-full text-left">
                                <thead>
                                    <tr style={{ backgroundColor: GOLD }}>
                                        <th className="px-6 py-4 text-sm font-bold text-white uppercase tracking-wider w-16">S.No</th>
                                        <th className="px-6 py-4 text-sm font-bold text-white uppercase tracking-wider">Topic</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {[
                                        'Current Affairs',
                                        'Indian History',
                                        'Indian Polity',
                                        'Geography',
                                        'Economy',
                                        'General Science',
                                        'Important Government Schemes',
                                    ].map((topic, idx) => (
                                        <tr key={topic} className="hover:bg-amber-50 transition-colors">
                                            <td className="px-6 py-3.5">
                                                <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg text-white text-xs font-bold" style={{ backgroundColor: GOLD }}>
                                                    {String(idx + 1).padStart(2, '0')}
                                                </span>
                                            </td>
                                            <td className="px-6 py-3.5 text-sm font-medium text-gray-700">{topic}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* General Science */}
                        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">4. General Science</p>
                        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm mb-5">
                            <table className="w-full text-left">
                                <thead>
                                    <tr style={{ backgroundColor: GOLD }}>
                                        <th className="px-6 py-4 text-sm font-bold text-white uppercase tracking-wider w-16">S.No</th>
                                        <th className="px-6 py-4 text-sm font-bold text-white uppercase tracking-wider">Topic</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {[
                                        'Physics',
                                        'Chemistry',
                                        'Biology',
                                    ].map((topic, idx) => (
                                        <tr key={topic} className="hover:bg-amber-50 transition-colors">
                                            <td className="px-6 py-3.5">
                                                <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg text-white text-xs font-bold" style={{ backgroundColor: GOLD }}>
                                                    {String(idx + 1).padStart(2, '0')}
                                                </span>
                                            </td>
                                            <td className="px-6 py-3.5 text-sm font-medium text-gray-700">{topic}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="rounded-lg px-5 py-3" style={{ backgroundColor: '#fff8e8', border: '1px solid #f0d890' }}>
                            <p className="text-sm leading-relaxed" style={{ color: '#8a5c00' }}>
                                <strong>Note:</strong> Level is usually up to 10th standard.
                            </p>
                        </div>
                    </div>



                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Rrb;
