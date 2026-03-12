import React from 'react';

const COOPER_FONT = { fontFamily: "'Cooper Black', 'Cooper Blk BT', serif" };

const Group_I = () => {
    return (
        <>
            {/* ── Group 1 Title ── */}
            <div className="text-center mb-10 sm:mb-14">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 tracking-tight" style={COOPER_FONT}>
                    TNPSC Group I
                </h2>
                <p className="text-gray-500 mt-2 text-lg">Highest-level state services recruitment</p>
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
                                <td className="px-6 py-4 text-sm text-gray-600">Any Bachelor's Degree from a recognized university</td>
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
                                <td className="px-6 py-4 text-sm text-gray-600">21 years</td>
                            </tr>
                            <tr className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 text-sm font-semibold text-gray-700">General Category</td>
                                <td className="px-6 py-4 text-sm text-gray-600">32 to 34 years</td>
                            </tr>
                            <tr className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 text-sm font-semibold text-gray-700">BC / MBC / SC / ST</td>
                                <td className="px-6 py-4 text-sm text-gray-600">Up to 37 – 39 years (with relaxation)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* ── Exam Pattern Table ── */}
            <div className="mb-10 sm:mb-14">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-6 bg-green-700 rounded-full" />
                    Exam Pattern — 3 Stages
                </h3>
                <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-green-800 border-b border-green-700">
                                <th className="px-6 py-4 text-sm font-bold text-white uppercase tracking-wider">Stage</th>
                                <th className="px-6 py-4 text-sm font-bold text-white uppercase tracking-wider">Exam</th>
                                <th className="px-6 py-4 text-sm font-bold text-white uppercase tracking-wider">Details</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            <tr className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4">
                                    <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-green-100 text-green-800 text-xs font-bold">1</span>
                                </td>
                                <td className="px-6 py-4 text-sm font-semibold text-gray-700">Preliminary Exam</td>
                                <td className="px-6 py-4 text-sm text-gray-600">
                                    <div className="space-y-1">
                                        <p>Objective type</p>
                                        <p>200 Questions · 300 Marks · 3 Hours</p>
                                    </div>
                                </td>
                            </tr>
                            <tr className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4">
                                    <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-green-100 text-green-800 text-xs font-bold">2</span>
                                </td>
                                <td className="px-6 py-4 text-sm font-semibold text-gray-700">Mains Exam</td>
                                <td className="px-6 py-4 text-sm text-gray-600">
                                    <div className="space-y-1">
                                        <p>Descriptive papers</p>
                                        <p>Tamil eligibility paper + 3 main papers</p>
                                    </div>
                                </td>
                            </tr>
                            <tr className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4">
                                    <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-green-100 text-green-800 text-xs font-bold">3</span>
                                </td>
                                <td className="px-6 py-4 text-sm font-semibold text-gray-700">Interview</td>
                                <td className="px-6 py-4 text-sm text-gray-600">Personality test</td>
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
                                'Indian History',
                                'Indian Polity',
                                'Indian Economy',
                                'Geography',
                                'Science & Technology',
                                'Current Affairs',
                                'Tamil Nadu History & Culture',
                                'Ethics & Governance',
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

export default Group_I;
