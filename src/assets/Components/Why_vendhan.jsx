import React from 'react';
import { Target, BookOpen, ClipboardCheck, UserCheck } from 'lucide-react';

const features = [
    {
        icon: <BookOpen className="w-6 h-6" />,
        title: 'Expert Guidance',
        description: 'Learn from experienced faculty who have mentored thousands of successful candidates.',
    },
    {
        icon: <ClipboardCheck className="w-6 h-6" />,
        title: 'Structured Preparation',
        description: 'A well-planned curriculum designed to cover every aspect of competitive exams.',
    },
    {
        icon: <Target className="w-6 h-6" />,
        title: 'Daily Practice Tests',
        description: 'Consistent assessments that sharpen your skills and build exam-day confidence.',
    },
    {
        icon: <UserCheck className="w-6 h-6" />,
        title: 'Personal Mentoring',
        description: 'One-on-one guidance to address your strengths, weaknesses, and goals.',
    },
];

const Why_vendhan = () => {
    return (
        <section className="bg-white pt-6 pb-14 md:pt-8 md:pb-20">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center mb-10 md:mb-14">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-600 mb-4" style={{ fontFamily: "'Cooper Black', 'Cooper Blk BT', serif" }}>
                        Why Vendhan Academy?
                    </h2>

                    <p className="text-base sm:text-lg text-black leading-relaxed max-w-2xl mx-auto" style={{ fontFamily: "sans-serif" }}>
                        At Vendhan Academy, we don't just teach. We transform aspirants into achievers.
                        With expert guidance, structured preparation, daily practice tests, and personal mentoring.
                    </p>

                    <div className="mt-4 mx-auto w-16 h-[3px] bg-red-600 rounded-full"></div>
                </div>

                {/* Feature Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-md transition-shadow duration-300"
                        >
                            {/* Icon */}
                            <div className="w-12 h-12 rounded-lg bg-red-600 text-white flex items-center justify-center mb-4">
                                {feature.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-lg font-semibold text-black mb-2">
                                {feature.title}
                            </h3>

                            {/* Description */}
                            <p className="text-sm text-black leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Why_vendhan;
