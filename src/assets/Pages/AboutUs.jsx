import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import logo from '../Images/Vendan logo.jpeg';
import banner from '../Images/vendhan banner.jpeg';

const AboutUs = () => {
    return (
        <div className="min-h-screen bg-white flex flex-col font-sans">
            <Navbar />

            {/* About Section */}
            <section className="flex-grow pt-8 sm:pt-10 lg:pt-12 pb-16 sm:pb-20 lg:pb-28">
                <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                        {/* Left — Logo */}
                        <div className="w-full lg:w-5/12 flex justify-center">
                            <img
                                src={logo}
                                alt="Vendhan Academy Logo"
                                className="w-64 sm:w-72 lg:w-80 h-auto object-contain"
                            />
                        </div>

                        {/* Right — Content */}
                        <div className="w-full lg:w-7/12">
                            <h1 className="text-3xl sm:text-4xl lg:text-4xl font-black text-red-600 mb-6" style={{ fontFamily: "'Cooper Black', 'Cooper Blk BT', serif" }}>
                                About Vendhan Academy
                            </h1>

                            <p className="text-sm sm:text-base text-black leading-relaxed mb-4" style={{ fontFamily: "sans-serif" }}>
                                Vendhan Academy is a dedicated coaching institute committed to shaping the future of aspirants preparing for competitive government examinations.
                                We believe that success in exams like UPSC, TNPSC, RRB, TNSURB and Banking is not just about hard work it's about the right guidance, structured preparation, and continuous motivation.
                            </p>
                        </div>
                    </div>

                    {/* Vision & Mission Section */}
                    <div className="mt-16 sm:mt-20 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

                        {/* Our Vision */}
                        <div className="border-l-4 border-red-600 bg-gray-50 rounded-lg p-6 sm:p-8">
                            <h2 className="text-xl sm:text-2xl font-bold text-red-600 mb-4" style={{ fontFamily: "'Cooper Black', 'Cooper Blk BT', serif" }}>
                                Our Vision
                            </h2>
                            <ul className="space-y-3 text-sm sm:text-base text-black leading-relaxed" style={{ fontFamily: "sans-serif" }}>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-600 mt-1 flex-shrink-0">•</span>
                                    <span>To create future administrators who are socially responsible, ethically grounded, and nationally committed.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-600 mt-1 flex-shrink-0">•</span>
                                    <span>To nurture confident decision-makers capable of addressing complex governance challenges.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-600 mt-1 flex-shrink-0">•</span>
                                    <span>To become a trusted institution known for academic excellence, innovation, and consistent results.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-600 mt-1 flex-shrink-0">•</span>
                                    <span>To bridge the gap between aspiration and achievement through structured guidance and holistic development.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-600 mt-1 flex-shrink-0">•</span>
                                    <span>To inspire a generation of civil servants who uphold constitutional values and work towards inclusive growth.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Our Mission */}
                        <div className="border-l-4 border-green-600 bg-gray-50 rounded-lg p-6 sm:p-8">
                            <h2 className="text-xl sm:text-2xl font-bold text-green-600 mb-4" style={{ fontFamily: "'Cooper Black', 'Cooper Blk BT', serif" }}>
                                Our Mission
                            </h2>
                            <ul className="space-y-3 text-sm sm:text-base text-black leading-relaxed" style={{ fontFamily: "sans-serif" }}>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600 mt-1 flex-shrink-0">•</span>
                                    <span>Provide comprehensive and value-based education tailored to the evolving demands of civil services examinations.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600 mt-1 flex-shrink-0">•</span>
                                    <span>Foster a learning environment that encourages critical thinking, ethical reasoning, and a deep understanding of societal issues.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600 mt-1 flex-shrink-0">•</span>
                                    <span>Utilize innovative teaching methodologies and technology-driven platforms to enhance learning outcomes.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600 mt-1 flex-shrink-0">•</span>
                                    <span>Offer personalized mentorship and continuous assessment to guide aspirants towards their goals.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600 mt-1 flex-shrink-0">•</span>
                                    <span>Cultivate a community of learners committed to public service and nation-building.</span>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default AboutUs;