import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, Send, ChevronRight, GraduationCap, ArrowUp } from 'lucide-react';
import logo from '../Images/Vendan logo.jpeg';

const Footer = () => {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const quickLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Service', path: '/service' },
        { name: 'Study Materials', path: '/studymaterial' },
        { name: 'Achievers', path: '/' },
        { name: 'Contact Us', path: '/contact' },
    ];

    const courses = [
        { name: 'UPSC Civil Services', path: '/upsc' },
        { name: 'TNPSC Group I, II, IIA, IV', path: '/tnpsc' },
        { name: 'Banking Exams', path: '/banking' },
        { name: 'Railway Exams', path: '/rrb' },
        { name: 'TNSURB', path: '#' },
    ];

    const socialLinks = [
        { name: 'Facebook', icon: Facebook, href: 'https://www.facebook.com/vendhaniasacademy', color: 'hover:bg-blue-600' },
        { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/vendhaniasacademy?igsh=d204dWp1Y3JtYmVp', color: 'hover:bg-pink-600' },
        { name: 'YouTube', icon: Youtube, href: 'https://www.youtube.com/@VENDHANIASACADEMY', color: 'hover:bg-red-600' },
        { name: 'Telegram', icon: Send, href: 'https://t.me/Vendhan_Academy', color: 'hover:bg-sky-500' },
    ];

    return (
        <footer id="footer" className="relative bg-green-800 text-white overflow-hidden font-sans">

            {/* Top Gradient Accent Bar */}
            <div className="h-1 bg-gradient-to-r from-red-600 via-yellow-500 to-green-600"></div>

            {/* Decorative Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                <div className="absolute -top-40 -right-40 w-96 h-96 bg-red-600/5 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-green-600/5 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-red-600/3 to-green-600/3 rounded-full blur-3xl"></div>
            </div>

            {/* Main Footer Content */}
            <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

                    {/* Column 1 — About */}
                    <div className="lg:col-span-1">
                        {/* Logo */}
                        <div className="flex items-center gap-3 mb-6">
                            <div className="relative overflow-hidden rounded-xl bg-white p-1.5 shadow-lg shadow-black/20">
                                <img
                                    src={logo}
                                    alt="Vendhan Academy Logo"
                                    className="h-12 w-auto object-contain"
                                />
                            </div>
                            <div className="flex flex-col">
                                <div className="flex items-center gap-1.5">
                                    <span className="font-black text-xl tracking-wider leading-none text-red-500" style={{ fontFamily: "'Cooper Black', 'Cooper Blk BT', serif" }}>
                                        VENDHAN
                                    </span>
                                    <span className="font-black text-xl tracking-wider leading-none text-green-500" style={{ fontFamily: "'Cooper Black', 'Cooper Blk BT', serif" }}>
                                        ACADEMY
                                    </span>
                                </div>
                            </div>
                        </div>

                        <p className="text-gray-100 text-sm leading-relaxed mb-6">
                            Vendhan Academy is a premier coaching institute dedicated to guiding aspirants toward success in competitive examinations.
                        </p>

                        {/* Social Links */}
                        <div>
                            <p className="text-white font-bold text-sm uppercase tracking-widest mb-4">Follow Us</p>
                            <p className="text-gray-100 text-xs mb-3">Stay connected for updates, results, and exam tips</p>
                            <div className="flex items-center gap-3">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.name}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.name}
                                        className={`w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:text-white ${social.color} hover:border-transparent hover:scale-110 hover:shadow-lg transition-all duration-300`}
                                    >
                                        <social.icon className="w-4.5 h-4.5" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Column 2 — Quick Links */}
                    <div>
                        <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-6 flex items-center gap-2">
                            <span className="w-8 h-0.5 bg-gradient-to-r from-red-500 to-red-400 rounded-full"></span>
                            Quick Links
                        </h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.path}
                                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                        className="group flex items-center gap-2 text-white hover:text-white/80 transition-all duration-300 text-sm"
                                    >
                                        <ChevronRight className="w-4 h-4 text-red-500/50 group-hover:text-red-400 group-hover:translate-x-1 transition-all duration-300" />
                                        <span>{link.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3 — Our Service */}
                    <div>
                        <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-6 flex items-center gap-2">
                            <span className="w-8 h-0.5 bg-gradient-to-r from-green-500 to-green-400 rounded-full"></span>
                            Our Service
                        </h3>
                        <ul className="space-y-3">
                            {courses.map((course) => (
                                <li key={course.name}>
                                    <Link
                                        to={course.path}
                                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                        className="group flex items-center gap-2 text-white hover:text-white/80 transition-all duration-300 text-sm"
                                    >
                                        <GraduationCap className="w-4 h-4 text-green-500/50 group-hover:text-green-400 transition-colors duration-300" />
                                        <span>{course.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4 — Contact Us */}
                    <div>
                        <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-6 flex items-center gap-2">
                            <span className="w-8 h-0.5 bg-gradient-to-r from-yellow-500 to-orange-400 rounded-full"></span>
                            Contact Us
                        </h3>
                        <div className="space-y-4">
                            {/* Address */}
                            <div className="group flex items-start gap-3">
                                <div className="w-9 h-9 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-red-500/20 transition-colors duration-300">
                                    <MapPin className="w-4 h-4 text-red-400" />
                                </div>
                                <div>
                                    <p className="text-white font-semibold text-sm mb-0.5">Vendhan Academy</p>
                                    <p className="text-white text-sm leading-relaxed">
                                        Plot no: 176, W 3rd Cross St, KK Nagar, Madurai, Tamil Nadu, India
                                    </p>
                                </div>
                            </div>

                            {/* Phone */}
                            <a href="tel:+919791394644" className="group flex items-center gap-3">
                                <div className="w-9 h-9 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-green-500/20 transition-colors duration-300">
                                    <Phone className="w-4 h-4 text-green-400" />
                                </div>
                                <div>
                                    <p className="text-white text-sm transition-colors duration-300">
                                        +91 9791394644
                                    </p>
                                </div>
                            </a>

                            {/* Email */}
                            <a href="mailto:vendhaniasacademy@gmail.com" className="group flex items-center gap-3">
                                <div className="w-9 h-9 rounded-lg bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-500/20 transition-colors duration-300">
                                    <Mail className="w-4 h-4 text-yellow-400" />
                                </div>
                                <div>
                                    <p className="text-white text-sm transition-colors duration-300">
                                        vendhaniasacademy@gmail.com
                                    </p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="mt-8 mb-3">
                    <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                </div>

                {/* Bottom Bar */}
                <div className="relative flex items-center justify-center">
                    <p className="text-white text-sm text-center">
                        ©2026 <span className="font-semibold">Vendhan Academy</span>. All rights reserved.
                    </p>
                    <button
                        onClick={scrollToTop}
                        className="absolute right-0 w-9 h-9 rounded-full bg-white text-black flex items-center justify-center hover:bg-white-700 hover:-translate-y-1 transition-all duration-300"
                        aria-label="Back to top"
                    >
                        <ArrowUp className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
