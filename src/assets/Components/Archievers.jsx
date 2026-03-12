import React, { useState, useEffect, useRef } from 'react';
import { Award, Users, Shield, BookOpen } from 'lucide-react';
import ArchieverImg from '../Images/Demo-Archiever.jpg';

const achievers = [
    {
        name: 'ISAC NEWTON J',
        exam: 'Civilisation',
        year: '2024',
        image: ArchieverImg,
    },
    {
        name: 'SUJITHA',
        exam: 'Civilisation',
        year: '2023',
        image: ArchieverImg,
    },
    {
        name: 'PRAVEEN',
        exam: 'Civilisation',
        year: '2022',
        image: ArchieverImg,
    },
    {
        name: 'SAILESH',
        exam: 'Civilisation',
        year: '2021',
        image: ArchieverImg,
    },
    {
        name: 'PRAKALYA',
        exam: 'Civilisation',
        year: '2020',
        image: ArchieverImg,
    },
    {
        name: 'VIJI KANNAN',
        exam: 'Civilisation',
        year: '2019',
        image: ArchieverImg,
    },
];

const highlightStats = [
    {
        count: 146,
        label: 'Cleared Group 2A Exams',
        icon: BookOpen,
        accent: 'border-red-600',
        iconBg: 'bg-red-50',
        iconColor: 'text-red-600',
    },
    {
        count: 151,
        label: 'Cleared Group 4 Exams',
        icon: Users,
        accent: 'border-red-600',
        iconBg: 'bg-red-50',
        iconColor: 'text-red-600',
    },
    {
        count: 132,
        label: 'Cleared Police Exams',
        icon: Shield,
        accent: 'border-red-600',
        iconBg: 'bg-red-50',
        iconColor: 'text-red-600',
    },
];

// Animated counter hook
const useCountUp = (target, duration = 2000, startCounting) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!startCounting) return;
        let start = 0;
        const increment = target / (duration / 16);
        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                setCount(target);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);
        return () => clearInterval(timer);
    }, [target, duration, startCounting]);

    return count;
};

const StatCard = ({ stat, startCounting }) => {
    const count = useCountUp(stat.count, 1800, startCounting);
    const Icon = stat.icon;

    return (
        <div className={`flex items-center gap-4 bg-white border-l-4 ${stat.accent} rounded-lg px-5 py-4 shadow-sm hover:shadow-md transition-shadow duration-300`}>
            <div className={`w-10 h-10 rounded-lg ${stat.iconBg} flex items-center justify-center flex-shrink-0`}>
                <Icon className={`w-5 h-5 ${stat.iconColor}`} />
            </div>
            <div>
                <p className="text-2xl font-bold text-gray-900 leading-none">{count}+</p>
                <p className="text-sm text-gray-500 mt-0.5">{stat.label}</p>
            </div>
        </div>
    );
};

const Archievers = () => {
    const [startCounting, setStartCounting] = useState(false);
    const statsRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setStartCounting(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );
        if (statsRef.current) {
            observer.observe(statsRef.current);
        }
        return () => observer.disconnect();
    }, []);

    return (
        <section className="bg-white pt-0 pb-10 md:pt-0 md:pb-16">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center mb-10 md:mb-14">
                    <div className="inline-flex items-center gap-2 mb-3">
                        <span className="w-8 h-[2px] bg-red-600 rounded-full"></span>
                        <Award className="w-5 h-5 text-red-600" />
                        <span className="w-8 h-[2px] bg-red-600 rounded-full"></span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black tracking-tight" style={{ fontFamily: "'Cooper Black', 'Cooper Blk BT', serif" }}>
                        PRIDE OF OUR INSTITUTIONS
                    </h2>

                    <p className="mt-3 text-base sm:text-lg text-black">
                        Top Achievers from our Academy
                    </p>

                    <div className="mt-4 mx-auto w-16 h-[3px] bg-red-600 rounded-full"></div>
                </div>

                {/* Highlight Stats */}
                <div ref={statsRef} className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 mb-14 md:mb-18">
                    {highlightStats.map((stat, index) => (
                        <StatCard key={index} stat={stat} startCounting={startCounting} index={index} />
                    ))}
                </div>

                {/* Achiever Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
                    {achievers.map((achiever, index) => (
                        <div key={index} className="flex flex-col items-center text-center group">
                            {/* Circular Image with Gold Border */}
                            <div className="relative mb-2">
                                <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full border-[3px] border-yellow-400 p-1 group-hover:border-yellow-500 transition-colors duration-300">
                                    <img
                                        src={achiever.image}
                                        alt={achiever.name}
                                        className="w-full h-full rounded-full object-cover"
                                    />
                                </div>
                                {/* Medal Icon */}
                                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2">
                                    <span className="text-2xl" role="img" aria-label="medal">🏅</span>
                                </div>
                            </div>

                            {/* Name */}
                            <h3 className="mt-3 text-xs sm:text-sm font-bold text-gray-900 uppercase tracking-wide leading-tight">
                                {achiever.name}
                            </h3>

                            {/* Exam */}
                            <p className="mt-1 text-xs sm:text-sm font-semibold text-red-600">
                                {achiever.exam}
                            </p>

                            {/* Year */}
                            <p className="text-xs sm:text-sm text-gray-500">
                                {achiever.year}
                            </p>
                        </div>
                    ))}
                </div>

                {/* View All Button */}
                <div className="mt-10 md:mt-14 flex justify-center">
                    <button className="px-8 py-2.5 border-2 border-black-900 text-black-900 font-semibold rounded hover:bg-red-500 hover:text-white transition-all duration-300 text-sm sm:text-base">
                        View All
                    </button>
                </div>

            </div>
        </section>
    );
};

export default Archievers;
