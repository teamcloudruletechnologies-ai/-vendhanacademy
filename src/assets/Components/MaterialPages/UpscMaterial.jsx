import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { BookOpen, Download, ExternalLink } from 'lucide-react';

const COOPER = { fontFamily: "'Cooper Black', 'Cooper Blk BT', serif" };
const RED = 'rgb(200, 16, 16)';

const materials = [
    { name: 'Civil Services Prelims General Paper 1 (2025)', file: '/StudyMaterials/UpscMaterials/Civil Services Prelims General Paper 1 (2025).pdf', type: 'download' },
    { name: 'Civil Services Prelims General Paper 2 (2025)', file: '/StudyMaterials/UpscMaterials/Civil Services Prelims General Paper 2 (2025).pdf', type: 'download' },
    { name: 'Previous Year Main Exam Question Papers', file: 'https://upsc.gov.in/examinations/previous-question-papers?field_exam_name_value=Civil+Services+%28Main%29+Examination', type: 'link' },
];

const UpscMaterial = () => {

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
            <Helmet>
                <title>UPSC IAS Study Materials & PDFs | Vendhan Academy</title>
                <meta name="description" content="Download free UPSC civil services prelims and mains study materials, previous year question papers, general studies PDFs, and exam guides." />
                <meta name="keywords" content="UPSC IAS study materials pdf, civil service exam preparation notes, UPSC mains papers, download prelims GS papers" />
                <link rel="canonical" href="https://vendhanacademy.com/upsc-material" />
                
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://vendhanacademy.com/upsc-material" />
                <meta property="og:title" content="UPSC IAS Study Materials & PDFs | Vendhan Academy" />
                <meta property="og:description" content="Access and download high-quality General Studies and previous year UPSC papers compiled by Vendhan Academy." />
                <meta property="og:image" content="https://vendhanacademy.com/src/assets/Images/Vendan%20logo.jpeg" />
            </Helmet>
            <Navbar />

            {/* Hero Banner */}
            <section
                className="relative pt-28 sm:pt-32 pb-14 sm:pb-20 overflow-hidden"
                style={{ background: `linear-gradient(135deg, ${RED}, rgb(160, 10, 10), rgb(100, 5, 5))` }}
            >
                <div className="absolute top-10 right-10 w-72 h-72 rounded-full bg-white/5 blur-3xl" />
                <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-black/20 blur-3xl" />
                <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-6">
                        <BookOpen className="w-4 h-4 text-gray-200" />
                        <span className="text-sm font-semibold text-gray-100 tracking-wide">Study Material</span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight" style={COOPER}>
                        UPSC Study Material
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
                                <tr style={{ backgroundColor: RED }}>
                                    <th className="px-6 py-4 text-sm font-bold text-white uppercase tracking-wider">S.No</th>
                                    <th className="px-6 py-4 text-sm font-bold text-white uppercase tracking-wider">Material</th>
                                    <th className="px-6 py-4 text-sm font-bold text-white uppercase tracking-wider text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {materials.map((item, idx) => (
                                    <tr key={idx} className="hover:bg-red-50 transition-colors">
                                        <td className="px-6 py-4 text-sm font-semibold text-gray-700">{String(idx + 1).padStart(2, '0')}</td>
                                        <td className="px-6 py-4 text-sm font-semibold text-gray-800">{item.name}</td>
                                        <td className="px-6 py-4 text-center">
                                            <a
                                                href={item.file}
                                                {...(item.type === 'download' ? { download: true } : { target: '_blank', rel: 'noopener noreferrer' })}
                                                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold text-white no-underline transition-all duration-200"
                                                style={{ backgroundColor: RED }}
                                            >
                                                {item.type === 'download' ? <Download className="w-4 h-4" /> : <ExternalLink className="w-4 h-4" />}
                                                {item.type === 'download' ? 'Download' : 'Download '}
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
                                        style={{ backgroundColor: RED }}
                                    >
                                        {String(idx + 1).padStart(2, '0')}
                                    </span>
                                    <span className="text-sm font-semibold text-gray-800 leading-snug">{item.name}</span>
                                </div>
                                <a
                                    href={item.file}
                                    {...(item.type === 'download' ? { download: true } : { target: '_blank', rel: 'noopener noreferrer' })}
                                    className="flex-shrink-0 inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold text-white no-underline transition-all duration-200"
                                    style={{ backgroundColor: RED }}
                                >
                                    {item.type === 'download' ? <Download className="w-3.5 h-3.5" /> : <ExternalLink className="w-3.5 h-3.5" />}
                                    {item.type === 'download' ? 'Download' : 'Download '}
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

export default UpscMaterial;
