import React from 'react';

const COOPER_FONT = { fontFamily: "'Cooper Black', 'Cooper Blk BT', serif" };

const Group_IV = () => {
    return (
        <>
            {/* ── Title ── */}
            <div className="text-center mb-10 sm:mb-14">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 tracking-tight" style={COOPER_FONT}>
                    TNPSC Group IV
                </h2>
                <p className="text-gray-500 mt-2 text-lg">Entry Level Jobs</p>
            </div>

            {/* ── Eligibility Table ── */}
            <div className="mb-10 sm:mb-14">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-6 bg-green-700 rounded-full" />
                    Eligibility
                </h3>
                <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-green-800 border-b border-green-700">
                                <th className="px-6 py-4 text-sm font-bold text-white uppercase tracking-wider">Criteria</th>
                                <th className="px-6 py-4 text-sm font-bold text-white uppercase tracking-wider">Details</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            <tr className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 text-sm font-semibold text-gray-700">Educational Qualification</td>
                                <td className="px-6 py-4 text-sm text-gray-600">Minimum 10th Standard (SSLC) Pass</td>
                            </tr>
                            <tr className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 text-sm font-semibold text-gray-700">Typist Posts</td>
                                <td className="px-6 py-4 text-sm text-gray-600">Typewriting certificate required</td>
                            </tr>
                            <tr className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 text-sm font-semibold text-gray-700">Steno-Typist Posts</td>
                                <td className="px-6 py-4 text-sm text-gray-600">Typewriting + Shorthand certificate required</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* ── Age Limit Table ── */}
            <div className="mb-10 sm:mb-14">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-6 bg-green-700 rounded-full" />
                    Age Limit
                </h3>
                <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-green-800 border-b border-green-700">
                                <th className="px-6 py-4 text-sm font-bold text-white uppercase tracking-wider">Category</th>
                                <th className="px-6 py-4 text-sm font-bold text-white uppercase tracking-wider">Age</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            <tr className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 text-sm font-semibold text-gray-700">Minimum Age</td>
                                <td className="px-6 py-4 text-sm text-gray-600">18 years</td>
                            </tr>
                            <tr className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 text-sm font-semibold text-gray-700">General Category</td>
                                <td className="px-6 py-4 text-sm text-gray-600">Around 32 years</td>
                            </tr>
                            <tr className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 text-sm font-semibold text-gray-700">BC / MBC</td>
                                <td className="px-6 py-4 text-sm text-gray-600">34 years</td>
                            </tr>
                            <tr className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 text-sm font-semibold text-gray-700">SC / ST</td>
                                <td className="px-6 py-4 text-sm text-gray-600">37+ years (with relaxation)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* ── Exam Pattern Table ── */}
            <div className="mb-10 sm:mb-14">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-6 bg-green-700 rounded-full" />
                    Exam Pattern
                </h3>

                {/* Overview */}
                <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm mb-5">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-green-800 border-b border-green-700">
                                <th className="px-6 py-4 text-sm font-bold text-white uppercase tracking-wider">Parameter</th>
                                <th className="px-6 py-4 text-sm font-bold text-white uppercase tracking-wider">Details</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            <tr className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 text-sm font-semibold text-gray-700">Total Questions</td>
                                <td className="px-6 py-4 text-sm text-gray-600">200</td>
                            </tr>
                            <tr className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 text-sm font-semibold text-gray-700">Total Marks</td>
                                <td className="px-6 py-4 text-sm text-gray-600">300</td>
                            </tr>
                            <tr className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 text-sm font-semibold text-gray-700">Duration</td>
                                <td className="px-6 py-4 text-sm text-gray-600">3 Hours</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Sections Breakdown */}
                <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-green-800 border-b border-green-700">
                                <th className="px-6 py-4 text-sm font-bold text-white uppercase tracking-wider">Section</th>
                                <th className="px-6 py-4 text-sm font-bold text-white uppercase tracking-wider">Questions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            <tr className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 text-sm font-semibold text-gray-700">Tamil Eligibility Test</td>
                                <td className="px-6 py-4 text-sm text-gray-600">100 Questions</td>
                            </tr>
                            <tr className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 text-sm font-semibold text-gray-700">General Studies</td>
                                <td className="px-6 py-4 text-sm text-gray-600">75 Questions</td>
                            </tr>
                            <tr className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 text-sm font-semibold text-gray-700">Aptitude & Mental Ability</td>
                                <td className="px-6 py-4 text-sm text-gray-600">25 Questions</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* ── Syllabus Table ── */}
            <div className="mb-10 sm:mb-14">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-6 bg-green-700 rounded-full" />
                    Syllabus
                </h3>
                <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-green-800 border-b border-green-700">
                                <th className="px-6 py-4 text-sm font-bold text-white uppercase tracking-wider w-16">S.No</th>
                                <th className="px-6 py-4 text-sm font-bold text-white uppercase tracking-wider">Subject</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {[
                                'General Tamil',
                                'General Science',
                                'History of India',
                                'Indian Polity',
                                'Geography',
                                'Indian Economy',
                                'Current Affairs',
                                'Tamil Nadu History & Culture',
                                'Aptitude & Reasoning',
                            ].map((subject, idx) => (
                                <tr key={subject} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-3.5">
                                        <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-green-100 text-green-800 text-xs font-bold">
                                            {String(idx + 1).padStart(2, '0')}
                                        </span>
                                    </td>
                                    <td className="px-6 py-3.5 text-sm font-medium text-gray-700">{subject}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default Group_IV;
