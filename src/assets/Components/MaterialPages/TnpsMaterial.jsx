import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { BookOpen, Download } from 'lucide-react';

const COOPER = { fontFamily: "'Cooper Black', 'Cooper Blk BT', serif" };
const GREEN = 'rgb(21, 128, 61)';

const materials = [
    { name: 'TNPSC Group 1 Mains Syllabus', file: '/StudyMaterials/TnpscMaterials/TNPSC group 1 mains syllabus.pdf' },
    { name: 'TNPSC Group 1 Preliminary Syllabus', file: '/StudyMaterials/TnpscMaterials/TNPSC group 1 preliminary syllabus.pdf' },
    { name: 'TNPSC Group II and IIA Prelims Syllabus', file: '/StudyMaterials/TnpscMaterials/TNPSC Group II and IIA prelims.pdf' },
    { name: 'TNPSC Group IV Syllabus', file: '/StudyMaterials/TnpscMaterials/TNPSC Group IV Syllabus.pdf' },
    { name: 'TNPSC Group 1 - 2025 Question Paper', file: '/StudyMaterials/TnpscMaterials/TNPSC-Group-1-2025 QP.pdf' },
    { name: 'TNPSC Group II & IIA - 2025 Question Paper', file: '/StudyMaterials/TnpscMaterials/TNPSC-Group_II_IIA-2025 QP.pdf' },
    { name: 'TNPSC Group II & IIA GS - 2025 Question Paper', file: '/StudyMaterials/TnpscMaterials/TNPSC-GS-GRP_II_IIA-2025 QP.pdf' },
    { name: 'TNPSC Group 4 - 2025 Question Paper', file: '/StudyMaterials/TnpscMaterials/TNPSC-Group-4-2025 QP.pdf' },
];

const TnpsMaterial = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
            <Navbar />

            {/* Hero Banner */}
            <section
                className="relative pt-28 sm:pt-32 pb-14 sm:pb-20 overflow-hidden"
                style={{ background: `linear-gradient(135deg, ${GREEN}, rgb(16, 100, 46), rgb(8, 70, 30))` }}
            >
                <div className="absolute top-10 right-10 w-72 h-72 rounded-full bg-white/5 blur-3xl" />
                <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-black/20 blur-3xl" />
                <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-6">
                        <BookOpen className="w-4 h-4 text-gray-200" />
                        <span className="text-sm font-semibold text-gray-100 tracking-wide">Study Material</span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight" style={COOPER}>
                        TNPSC Study Material
                    </h1>
                </div>
            </section>

            {/* Content */}
            <section className="py-10 sm:py-16 flex-grow">
                <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Desktop Table */}
                    <div className="hidden md:block bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                        <table className="w-full text-left">
                            <thead>
                                <tr style={{ backgroundColor: GREEN }}>
                                    <th className="px-6 py-4 text-sm font-bold text-white uppercase tracking-wider">S.No</th>
                                    <th className="px-6 py-4 text-sm font-bold text-white uppercase tracking-wider">Material</th>
                                    <th className="px-6 py-4 text-sm font-bold text-white uppercase tracking-wider text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {materials.map((item, idx) => (
                                    <tr key={idx} className="hover:bg-green-50 transition-colors">
                                        <td className="px-6 py-4 text-sm font-semibold text-gray-700">{String(idx + 1).padStart(2, '0')}</td>
                                        <td className="px-6 py-4 text-sm font-semibold text-gray-800">{item.name}</td>
                                        <td className="px-6 py-4 text-center">
                                            <a
                                                href={item.file}
                                                download
                                                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold text-white no-underline transition-all duration-200"
                                                style={{ backgroundColor: GREEN }}
                                            >
                                                <Download className="w-4 h-4" />
                                                Download
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Mobile Cards */}
                    <div className="md:hidden flex flex-col gap-3">
                        {materials.map((item, idx) => (
                            <div key={idx} className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 flex items-center justify-between gap-3">
                                <div className="flex items-center gap-3 min-w-0">
                                    <span
                                        className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white"
                                        style={{ backgroundColor: GREEN }}
                                    >
                                        {String(idx + 1).padStart(2, '0')}
                                    </span>
                                    <span className="text-sm font-semibold text-gray-800 leading-snug">{item.name}</span>
                                </div>
                                <a
                                    href={item.file}
                                    download
                                    className="flex-shrink-0 inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold text-white no-underline transition-all duration-200"
                                    style={{ backgroundColor: GREEN }}
                                >
                                    <Download className="w-3.5 h-3.5" />
                                    Download
                                </a>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            <Footer />
        </div>
    );
};

export default TnpsMaterial;
