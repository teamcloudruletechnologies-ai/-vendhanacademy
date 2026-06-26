import React, { useState, useEffect, useCallback } from 'react';
import { ArrowRight, BookOpen, Award, GraduationCap, Users, ChevronLeft, ChevronRight } from 'lucide-react';
import logo from '../Images/Vendan logo.jpeg';
import mainImg from '../Images/Main_img.jpeg';
import carousal1 from '../Images/carousal1.jpeg';
import carousal2 from '../Images/carousal2.jpeg';
import carousal3 from '../Images/carousal3.jpeg';

const carouselImages = [
  
    { src: carousal2, alt: 'Vendhan Academy - NSS Community Outreach' },
    { src: carousal3, alt: 'Vendhan Academy - Students in Session' },
];

const HeroSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, []);

    const prevSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
    }, []);

    const goToSlide = useCallback((index) => {
        setCurrentSlide(index);
    }, []);

    // Auto-play
    useEffect(() => {
        if (isPaused) return;
        const timer = setInterval(nextSlide, 3000);
        return () => clearInterval(timer);
    }, [isPaused, nextSlide]);

    return (
        <div className="relative overflow-hidden bg-white">
            {/* Decorative background elements using theme colors: red, green, white */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] rounded-full bg-red-50/60 blur-3xl opacity-60 animate-float"></div>
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-green-50/60 blur-3xl opacity-60 animate-float delay-300"></div>
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] -translate-y-1/2 -translate-x-1/2 rounded-full bg-red-50/40 blur-3xl animate-float delay-500"></div>

            <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center pt-24 pb-6 md:pt-32 md:pb-8 lg:pt-36 lg:pb-10 lg:gap-16">

                    {/* Left Side: Image */}
                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-start mb-10 lg:mb-0 animate-fade-in">
                        <div className="relative w-full max-w-[600px] lg:max-w-none">
                            {/* Decorative border accent */}
                            <div className="absolute -inset-1 bg-gradient-to-br from-red-500 via-white to-green-500 rounded-2xl sm:rounded-3xl opacity-30 blur-sm"></div>
                            <img
                                src={mainImg}
                                alt="Vendhan Academy - Preparing aspirants for success"
                                className="relative w-full h-[250px] sm:h-[320px] md:h-[380px] lg:h-[400px] object-cover rounded-2xl sm:rounded-3xl shadow-xl hover:scale-[1.02] transition-transform duration-500"
                            />
                        </div>
                    </div>

                    {/* Right Side: Content */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">

                        {/* Heading */}
                        <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-gray-900 tracking-tight mb-6 leading-tight animate-fade-in-up" style={{ fontFamily: "'Cooper Black', 'Cooper Blk BT', serif" }}>
                            <span className="block text-red-600 drop-shadow-sm">VENDHAN</span>
                            <span className="block text-green-600 mt-1 drop-shadow-sm">GROUP OF INSTITUTIONS</span>
                        </h1>

                        {/* Tagline */}
                        <div className="relative animate-fade-in-up delay-200">
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-red-500 to-green-500 rounded-full hidden lg:block"></div>
                            <p className="text-base sm:text-lg md:text-xl text-gray-600 font-medium leading-relaxed max-w-2xl lg:pl-6">
                                Vendhan group of institution has emerged as a leading institution in Madurai, dedicated to preparing aspirants for central and state government competitive examinations.
                            </p>
                        </div>

                    </div>

                </div>

                {/* ===== Tagline above Carousel ===== */}
                <div className="text-center py-4 md:py-6">
                    {/* Decorative line */}
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <div className="h-[2px] w-12 sm:w-20 bg-gradient-to-r from-transparent to-red-500 rounded-full"></div>
                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        <div className="h-[2px] w-12 sm:w-20 bg-gradient-to-l from-transparent to-green-500 rounded-full"></div>
                    </div>

                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight leading-snug" style={{ fontFamily: "'Cooper Black', 'Cooper Blk BT', serif" }}>
                        <span className="text-red-600">Vendhan Academy -</span><span className="text-green-600">Where Aspirants Become Achievers.</span>
                    </h2>

                    {/* Decorative underline accent */}
                    <div className="mt-4 mx-auto w-24 sm:w-32 h-1 rounded-full bg-gradient-to-r from-red-500 via-amber-400 to-green-500"></div>
                </div>

                {/* ===== Image Carousel Section ===== */}
                <div
                    className="relative w-full pb-4 md:pb-6"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {/* Carousel Container */}
                    <div className="relative w-full">
                        {/* Decorative gradient border */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-red-500 via-amber-300 to-green-500 rounded-2xl sm:rounded-3xl opacity-25 blur-sm"></div>

                        {/* Slides wrapper */}
                        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl bg-gray-900">
                            <div
                                className="flex transition-transform duration-700 ease-in-out"
                                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                            >
                                {carouselImages.map((image, index) => (
                                    <div key={index} className="w-full flex-shrink-0">
                                        <img
                                            src={image.src}
                                            alt={image.alt}
                                            className="w-full h-[250px] sm:h-[350px] md:h-[420px] lg:h-[500px] object-cover"
                                        />
                                    </div>
                                ))}
                            </div>

                            {/* Gradient overlays on sides for depth */}
                            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black/20 to-transparent pointer-events-none"></div>
                            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black/20 to-transparent pointer-events-none"></div>

                            {/* Previous Button */}
                            <button
                                onClick={prevSlide}
                                className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 hover:text-red-600 rounded-full p-2 sm:p-3 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-red-400"
                                aria-label="Previous slide"
                            >
                                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                            </button>

                            {/* Next Button */}
                            <button
                                onClick={nextSlide}
                                className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 hover:text-green-600 rounded-full p-2 sm:p-3 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-400"
                                aria-label="Next slide"
                            >
                                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                            </button>

                            {/* Slide counter badge */}
                            <div className="absolute top-4 right-4 bg-black/50 text-white text-xs sm:text-sm font-medium px-3 py-1 rounded-full backdrop-blur-sm">
                                {currentSlide + 1} / {carouselImages.length}
                            </div>
                        </div>

                        {/* Navigation Dots */}
                        <div className="flex justify-center items-center gap-3 mt-6">
                            {carouselImages.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToSlide(index)}
                                    aria-label={`Go to slide ${index + 1}`}
                                    className={`transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-300 ${currentSlide === index
                                        ? 'w-8 h-3 bg-gradient-to-r from-red-500 to-green-500 shadow-md'
                                        : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default HeroSection;
