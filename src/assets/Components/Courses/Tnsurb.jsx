import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { GraduationCap } from 'lucide-react';

const COOPER_FONT = { fontFamily: "'Cooper Black', 'Cooper Blk BT', serif" };
const BROWN = 'rgb(150, 75, 0)';

const Tnsurb = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
            <Helmet>
                <title>TNSURB Grade II Police Constable & SI Coaching | Vendhan Academy</title>
                <meta name="description" content="Get expert coaching for TNSURB SI (Sub Inspector), Grade II Police Constable (PC), Jail Warder, and Firemen exams in Madurai. Check physical requirements, syllabus, and pattern." />
                <meta name="keywords" content="TNSURB coaching Madurai, Sub Inspector training, Police Constable exam prep, Tamil Nadu police exams, PC SI training" />
                <link rel="canonical" href="https://vendhanacademy.com/tnsurb" />
                
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://vendhanacademy.com/tnsurb" />
                <meta property="og:title" content="TNSURB Grade II Police Constable & SI Coaching | Vendhan Academy" />
                <meta property="og:description" content="Prepare for TNSURB Sub Inspector (SI) and Police Constable (PC) examinations with focused classroom coaching." />
                <meta property="og:image" content="https://vendhanacademy.com/src/assets/Images/Vendan%20logo.jpeg" />
            </Helmet>
            <Navbar />

            {/* ── Hero Banner ── */}
            <section
                className="relative pt-28 sm:pt-32 pb-16 sm:pb-24 overflow-hidden"
                style={{ background: `linear-gradient(135deg, ${BROWN}, rgb(100, 50, 0), rgb(60, 30, 0))` }}
            >
                <div className="absolute top-10 right-10 w-72 h-72 rounded-full bg-white/5 blur-3xl" />
                <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-black/20 blur-3xl" />

                <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-6">
                        <GraduationCap className="w-4 h-4 text-gray-200" />
                        <span className="text-sm font-semibold text-gray-100 tracking-wide">TNUSRB Examinations</span>
                    </div>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-5 tracking-tight leading-tight" style={COOPER_FONT}>
                        TNUSRB
                        <br />
                        <span style={{ color: 'rgb(255, 220, 180)' }}>Examination</span>
                    </h1>
                </div>
            </section>

            {/* ── Main Content ── */}
            <section className="py-14 sm:py-20 flex-grow">
                <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">

                    {/* ════════════════════════════════════════════════════════
                        SECTION 1 — SUB-INSPECTOR OF POLICE (SI)
                    ════════════════════════════════════════════════════════ */}
                    <div className="mb-14 sm:mb-20">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-8 flex items-center gap-3" style={{ color: BROWN }}>
                            <span className="w-2 h-8 rounded-full" style={{ backgroundColor: BROWN }} />
                            1. Sub-Inspector of Police (SI)
                        </h2>

                        {/* ═══ Eligibility Criteria ═══ */}
                        <div className="mb-10 sm:mb-14">
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <span className="w-1.5 h-6 rounded-full" style={{ backgroundColor: BROWN }} />
                                Eligibility Criteria
                            </h3>

                            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm mb-5">
                                <table className="w-full text-left">
                                    <thead>
                                        <tr style={{ backgroundColor: BROWN }}>
                                            <th className="px-6 py-4 text-sm font-bold text-white uppercase tracking-wider">Criteria</th>
                                            <th className="px-6 py-4 text-sm font-bold text-white uppercase tracking-wider">Details</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        <tr className="hover:bg-orange-50 transition-colors">
                                            <td className="px-6 py-4 text-sm font-semibold text-gray-700">Nationality</td>
                                            <td className="px-6 py-4 text-sm text-gray-600">Indian</td>
                                        </tr>
                                        <tr className="hover:bg-orange-50 transition-colors">
                                            <td className="px-6 py-4 text-sm font-semibold text-gray-700">Age Limit</td>
                                            <td className="px-6 py-4 text-sm text-gray-600">20 – 30 years</td>
                                        </tr>
                                        <tr className="hover:bg-orange-50 transition-colors">
                                            <td className="px-6 py-4 text-sm font-semibold text-gray-700">Age Relaxation</td>
                                            <td className="px-6 py-4 text-sm text-gray-600">Available for BC, MBC, SC, ST categories</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* ═══ Educational Qualification ═══ */}
                        <div className="mb-10 sm:mb-14">
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <span className="w-1.5 h-6 rounded-full" style={{ backgroundColor: BROWN }} />
                                Educational Qualification
                            </h3>

                            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                                <table className="w-full text-left">
                                    <thead>
                                        <tr style={{ backgroundColor: BROWN }}>
                                            <th className="px-6 py-4 text-sm font-bold text-white uppercase tracking-wider">Qualification</th>
                                            <th className="px-6 py-4 text-sm font-bold text-white uppercase tracking-wider">Details</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        <tr className="hover:bg-orange-50 transition-colors">
                                            <td className="px-6 py-4 text-sm font-semibold text-gray-700">Minimum Qualification</td>
                                            <td className="px-6 py-4 text-sm text-gray-600">Bachelor's Degree from any recognized university</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* ═══ Exam Pattern ═══ */}
                        <div className="mb-10 sm:mb-14">
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <span className="w-1.5 h-6 rounded-full" style={{ backgroundColor: BROWN }} />
                                Exam Pattern
                            </h3>

                            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm mb-5">
                                <table className="w-full text-left">
                                    <thead>
                                        <tr style={{ backgroundColor: BROWN }}>
                                            <th className="px-6 py-4 text-sm font-bold text-white uppercase tracking-wider">Stage</th>
                                            <th className="px-6 py-4 text-sm font-bold text-white uppercase tracking-wider">Details</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        <tr className="hover:bg-orange-50 transition-colors">
                                            <td className="px-6 py-4 text-sm font-semibold text-gray-700">Written Exam</td>
                                            <td className="px-6 py-4 text-sm text-gray-600">Tamil Language + Main Written Exam</td>
                                        </tr>
                                        <tr className="hover:bg-orange-50 transition-colors">
                                            <td className="px-6 py-4 text-sm font-semibold text-gray-700">Physical Test</td>
                                            <td className="px-6 py-4 text-sm text-gray-600">PMT, Endurance Test, PET</td>
                                        </tr>
                                        <tr className="hover:bg-orange-50 transition-colors">
                                            <td className="px-6 py-4 text-sm font-semibold text-gray-700">Viva Voce</td>
                                            <td className="px-6 py-4 text-sm text-gray-600">Interview</td>
                                        </tr>
                                        <tr className="hover:bg-orange-50 transition-colors">
                                            <td className="px-6 py-4 text-sm font-semibold text-gray-700">Certificate Verification</td>
                                            <td className="px-6 py-4 text-sm text-gray-600">Document verification</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            {/* Written Exam — Tamil Language Test */}
                            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Written Exam — Tamil Language Test</p>

                            <div className="rounded-lg px-5 py-3 mb-5" style={{ backgroundColor: 'rgb(255, 245, 235)', border: '1px solid rgb(220, 180, 140)' }}>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    <strong>Questions:</strong> 100 &nbsp;|&nbsp; <strong>Marks:</strong> 100 &nbsp;|&nbsp; <strong>Nature:</strong> Qualifying
                                </p>
                            </div>

                            {/* Written Exam — Main Written Exam */}
                            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Main Written Exam</p>
                            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                                <table className="w-full text-left">
                                    <thead>
                                        <tr style={{ backgroundColor: BROWN }}>
                                            <th className="px-6 py-4 text-sm font-bold text-white uppercase tracking-wider">Section</th>
                                            <th className="px-6 py-4 text-sm font-bold text-white uppercase tracking-wider">Marks</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        <tr className="hover:bg-orange-50 transition-colors">
                                            <td className="px-6 py-4 text-sm font-semibold text-gray-700">General Knowledge</td>
                                            <td className="px-6 py-4 text-sm text-gray-600">70</td>
                                        </tr>
                                        <tr className="hover:bg-orange-50 transition-colors">
                                            <td className="px-6 py-4 text-sm font-semibold text-gray-700">Psychology</td>
                                            <td className="px-6 py-4 text-sm text-gray-600">30</td>
                                        </tr>
                                        <tr style={{ backgroundColor: 'rgb(255, 245, 235)' }} className="font-bold">
                                            <td className="px-6 py-4 text-sm font-bold text-gray-800">Total</td>
                                            <td className="px-6 py-4 text-sm font-bold text-gray-800">100</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* ═══ Syllabus ═══ */}
                        <div className="mb-10 sm:mb-14">
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <span className="w-1.5 h-6 rounded-full" style={{ backgroundColor: BROWN }} />
                                Syllabus
                            </h3>

                            {/* General Knowledge */}
                            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">General Knowledge</p>
                            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm mb-5">
                                <table className="w-full text-left">
                                    <thead>
                                        <tr style={{ backgroundColor: BROWN }}>
                                            <th className="px-6 py-4 text-sm font-bold text-white uppercase tracking-wider w-16">S.No</th>
                                            <th className="px-6 py-4 text-sm font-bold text-white uppercase tracking-wider">Topic</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        {[
                                            'Indian History',
                                            'Indian Polity',
                                            'Geography',
                                            'Economics',
                                            'General Science',
                                            'Current Affairs',
                                            'Tamil Nadu History',
                                        ].map((topic, idx) => (
                                            <tr key={topic} className="hover:bg-orange-50 transition-colors">
                                                <td className="px-6 py-3.5">
                                                    <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg text-white text-xs font-bold" style={{ backgroundColor: BROWN }}>
                                                        {String(idx + 1).padStart(2, '0')}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-3.5 text-sm font-medium text-gray-700">{topic}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            {/* Psychology */}
                            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Psychology</p>
                            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                                <table className="w-full text-left">
                                    <thead>
                                        <tr style={{ backgroundColor: BROWN }}>
                                            <th className="px-6 py-4 text-sm font-bold text-white uppercase tracking-wider w-16">S.No</th>
                                            <th className="px-6 py-4 text-sm font-bold text-white uppercase tracking-wider">Topic</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        {[
                                            'Logical Reasoning',
                                            'Analytical Ability',
                                            'Decision Making',
                                            'Numerical Ability',
                                        ].map((topic, idx) => (
                                            <tr key={topic} className="hover:bg-orange-50 transition-colors">
                                                <td className="px-6 py-3.5">
                                                    <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg text-white text-xs font-bold" style={{ backgroundColor: BROWN }}>
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


                    {/* ════════════════════════════════════════════════════════
                        SECTION 2 — GRADE II POLICE CONSTABLE
                    ════════════════════════════════════════════════════════ */}
                    <div className="mb-14 sm:mb-20">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-8 flex items-center gap-3" style={{ color: BROWN }}>
                            <span className="w-2 h-8 rounded-full" style={{ backgroundColor: BROWN }} />
                            2. Grade II Police Constable
                        </h2>

                        {/* ═══ Eligibility Criteria ═══ */}
                        <div className="mb-10 sm:mb-14">
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <span className="w-1.5 h-6 rounded-full" style={{ backgroundColor: BROWN }} />
                                Eligibility Criteria
                            </h3>

                            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm mb-5">
                                <table className="w-full text-left">
                                    <thead>
                                        <tr style={{ backgroundColor: BROWN }}>
                                            <th className="px-6 py-4 text-sm font-bold text-white uppercase tracking-wider">Criteria</th>
                                            <th className="px-6 py-4 text-sm font-bold text-white uppercase tracking-wider">Details</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        <tr className="hover:bg-orange-50 transition-colors">
                                            <td className="px-6 py-4 text-sm font-semibold text-gray-700">Age Limit</td>
                                            <td className="px-6 py-4 text-sm text-gray-600">18 – 24 years</td>
                                        </tr>
                                        <tr className="hover:bg-orange-50 transition-colors">
                                            <td className="px-6 py-4 text-sm font-semibold text-gray-700">Age Relaxation</td>
                                            <td className="px-6 py-4 text-sm text-gray-600">Available for reserved categories</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* ═══ Educational Qualification ═══ */}
                        <div className="mb-10 sm:mb-14">
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <span className="w-1.5 h-6 rounded-full" style={{ backgroundColor: BROWN }} />
                                Educational Qualification
                            </h3>

                            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                                <table className="w-full text-left">
                                    <thead>
                                        <tr style={{ backgroundColor: BROWN }}>
                                            <th className="px-6 py-4 text-sm font-bold text-white uppercase tracking-wider">Qualification</th>
                                            <th className="px-6 py-4 text-sm font-bold text-white uppercase tracking-wider">Details</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        <tr className="hover:bg-orange-50 transition-colors">
                                            <td className="px-6 py-4 text-sm font-semibold text-gray-700">Minimum Qualification</td>
                                            <td className="px-6 py-4 text-sm text-gray-600">10th Pass (SSLC)</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* ═══ Exam Pattern ═══ */}
                        <div className="mb-10 sm:mb-14">
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <span className="w-1.5 h-6 rounded-full" style={{ backgroundColor: BROWN }} />
                                Exam Pattern
                            </h3>

                            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm mb-5">
                                <table className="w-full text-left">
                                    <thead>
                                        <tr style={{ backgroundColor: BROWN }}>
                                            <th className="px-6 py-4 text-sm font-bold text-white uppercase tracking-wider">Section</th>
                                            <th className="px-6 py-4 text-sm font-bold text-white uppercase tracking-wider">Questions</th>
                                            <th className="px-6 py-4 text-sm font-bold text-white uppercase tracking-wider">Marks</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        <tr className="hover:bg-orange-50 transition-colors">
                                            <td className="px-6 py-4 text-sm font-semibold text-gray-700">General Knowledge</td>
                                            <td className="px-6 py-4 text-sm text-gray-600">50</td>
                                            <td className="px-6 py-4 text-sm text-gray-600">50</td>
                                        </tr>
                                        <tr className="hover:bg-orange-50 transition-colors">
                                            <td className="px-6 py-4 text-sm font-semibold text-gray-700">Psychology</td>
                                            <td className="px-6 py-4 text-sm text-gray-600">30</td>
                                            <td className="px-6 py-4 text-sm text-gray-600">30</td>
                                        </tr>
                                        <tr style={{ backgroundColor: 'rgb(255, 245, 235)' }} className="font-bold">
                                            <td className="px-6 py-4 text-sm font-bold text-gray-800">Total</td>
                                            <td className="px-6 py-4 text-sm font-bold text-gray-800">80</td>
                                            <td className="px-6 py-4 text-sm font-bold text-gray-800">80</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            {/* Additional Stages */}
                            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Additional Stages</p>
                            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                                <table className="w-full text-left">
                                    <thead>
                                        <tr style={{ backgroundColor: BROWN }}>
                                            <th className="px-6 py-4 text-sm font-bold text-white uppercase tracking-wider w-16">S.No</th>
                                            <th className="px-6 py-4 text-sm font-bold text-white uppercase tracking-wider">Stage</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        {[
                                            'Physical Measurement Test',
                                            'Endurance Test',
                                            'Physical Efficiency Test',
                                            'Certificate Verification',
                                        ].map((stage, idx) => (
                                            <tr key={stage} className="hover:bg-orange-50 transition-colors">
                                                <td className="px-6 py-3.5">
                                                    <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg text-white text-xs font-bold" style={{ backgroundColor: BROWN }}>
                                                        {String(idx + 1).padStart(2, '0')}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-3.5 text-sm font-medium text-gray-700">{stage}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* ═══ Syllabus ═══ */}
                        <div className="mb-10 sm:mb-14">
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <span className="w-1.5 h-6 rounded-full" style={{ backgroundColor: BROWN }} />
                                Syllabus
                            </h3>

                            {/* General Knowledge */}
                            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">General Knowledge</p>
                            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm mb-5">
                                <table className="w-full text-left">
                                    <thead>
                                        <tr style={{ backgroundColor: BROWN }}>
                                            <th className="px-6 py-4 text-sm font-bold text-white uppercase tracking-wider w-16">S.No</th>
                                            <th className="px-6 py-4 text-sm font-bold text-white uppercase tracking-wider">Topic</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        {[
                                            'History',
                                            'Geography',
                                            'Economics',
                                            'Indian Constitution',
                                            'General Science',
                                            'Current Affairs',
                                            'Tamil Nadu History & Culture',
                                        ].map((topic, idx) => (
                                            <tr key={topic} className="hover:bg-orange-50 transition-colors">
                                                <td className="px-6 py-3.5">
                                                    <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg text-white text-xs font-bold" style={{ backgroundColor: BROWN }}>
                                                        {String(idx + 1).padStart(2, '0')}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-3.5 text-sm font-medium text-gray-700">{topic}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            {/* Psychology */}
                            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Psychology</p>
                            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                                <table className="w-full text-left">
                                    <thead>
                                        <tr style={{ backgroundColor: BROWN }}>
                                            <th className="px-6 py-4 text-sm font-bold text-white uppercase tracking-wider w-16">S.No</th>
                                            <th className="px-6 py-4 text-sm font-bold text-white uppercase tracking-wider">Topic</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        {[
                                            'Logical Reasoning',
                                            'Basic Psychology',
                                            'Analytical Ability',
                                            'Mental Ability',
                                        ].map((topic, idx) => (
                                            <tr key={topic} className="hover:bg-orange-50 transition-colors">
                                                <td className="px-6 py-3.5">
                                                    <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg text-white text-xs font-bold" style={{ backgroundColor: BROWN }}>
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

                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Tnsurb;
