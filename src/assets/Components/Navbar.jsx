import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import {
    Menu, X, ChevronRight, ChevronDown, ArrowRight, Phone, Mail,
    GraduationCap, Landmark, Building2, FileText, Train,
    ShieldCheck, Home, Users, Award, BookOpen, MessageCircle,
} from 'lucide-react';
import logo from '../Images/Vendan logo.jpeg';

// ── Static Data (outside component to avoid re-creation) ──
const COOPER_FONT = { fontFamily: "'Cooper Black', 'Cooper Blk BT', serif" };

const NAV_LINKS = [
    { name: 'Home', path: '/', icon: Home, color: '#DC2626' },
    { name: 'About Us', path: '/about', icon: Users, color: '#2563EB' },
    { name: 'Service', path: '/service', hasDropdown: true, icon: GraduationCap, color: '#059669' },
    { name: 'Achievers', path: '/achievers', icon: Award, color: '#D97706' },
    { name: 'Study Materials', path: '/studymaterial', icon: BookOpen, color: '#7C3AED' },
    { name: 'Contact Us', path: '/contact', icon: MessageCircle, color: '#0891B2' },
];

const SERVICE_ITEMS = [
    { name: 'TNPSC Group I,II,IIA,IV', desc: 'State-level competitive exams', path: '/tnpsc', icon: Building2, color: '#15803D', bg: '#F0FDF4' },
    { name: 'UPSC Civil Services', desc: 'IAS, IPS & central services', path: '/upsc', icon: Landmark, color: '#B91C1C', bg: '#FEF2F2' },
    { name: 'TNSURB', desc: 'TN Police recruitment exams', path: '/tnsurb', icon: FileText, color: '#1D4ED8', bg: '#EFF6FF' },
    { name: 'RRB', desc: 'Railway recruitment board exams', path: '/rrb', icon: Train, color: '#B45309', bg: '#FFFBEB' },
    { name: 'Banking Exam', desc: 'IBPS, SBI & banking services', path: '/banking', icon: ShieldCheck, color: '#7E22CE', bg: '#FAF5FF' },
];

// ── Reusable Sub-Components ──

/** Icon badge used in mobile nav items */
const IconBadge = ({ icon: Icon, color, size = 18, className = 'w-10 h-10 rounded-xl' }) => (
    <div
        className={`${className} flex items-center justify-center transition-all duration-300 shadow-sm`}
        style={{ backgroundColor: `${color}10`, border: `1.5px solid ${color}25` }}
    >
        <Icon style={{ color, width: size, height: size }} />
    </div>
);

/** Wrapper that renders either <Link> or <a> based on path */
const NavLink = ({ path, onClick, className, children, ...rest }) => {
    const isRoute = path.startsWith('/');
    const Component = isRoute ? Link : 'a';
    const linkProp = isRoute ? { to: path } : { href: path };

    return (
        <Component {...linkProp} onClick={onClick} className={className} {...rest}>
            {children}
        </Component>
    );
};

// ── Main Navbar Component ──
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [serviceDropdownOpen, setServiceDropdownOpen] = useState(false);
    const [mobileServiceOpen, setMobileServiceOpen] = useState(false);

    const closeMenu = useCallback(() => setIsOpen(false), []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {/* Top Accent Bar */}
            <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 via-red-500 to-green-600 z-[101]" />

            <nav
                className={`fixed top-1 w-full font-sans z-[100] transition-all duration-500 ease-in-out ${scrolled
                    ? 'bg-white/98 backdrop-blur-lg shadow-[0_4px_20px_rgba(0,0,0,0.06)]'
                    : 'bg-white shadow-sm'
                    }`}
            >
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16 sm:h-18 lg:h-20">

                        {/* ── Logo ── */}
                        <a href="#" className="flex-1 xl:flex-none flex items-center justify-center xl:justify-start cursor-pointer gap-3">
                            <div className="relative flex items-center justify-center">
                                <img src={logo} alt="Vendhan Academy Logo" className="h-14 sm:h-16 lg:h-[72px] w-auto object-contain mix-blend-multiply scale-110 origin-left" />
                            </div>
                            <div className="flex items-center gap-1.5">
                                <span className="font-black text-lg sm:text-xl lg:text-2xl tracking-wider leading-none text-red-600" style={COOPER_FONT}>VENDHAN</span>
                                <span className="font-black text-lg sm:text-xl lg:text-2xl tracking-wider leading-none text-green-600" style={COOPER_FONT}>ACADEMY</span>
                            </div>
                        </a>

                        {/* ── Desktop Navigation ── */}
                        <div className="hidden xl:flex items-center">
                            <div className="flex items-center bg-gray-50/80 rounded-full px-1.5 py-1.5 border border-gray-100/80">
                                {NAV_LINKS.map((link) =>
                                    link.hasDropdown ? (
                                        <div
                                            key={link.name}
                                            className="relative"
                                            onMouseEnter={() => setServiceDropdownOpen(true)}
                                            onMouseLeave={() => setServiceDropdownOpen(false)}
                                        >
                                            <Link
                                                to={link.path}
                                                className="relative px-5 py-2 rounded-full font-bold text-[14px] text-gray-600 hover:text-red-600 hover:bg-white hover:shadow-sm transition-all duration-300 flex items-center gap-1"
                                            >
                                                {link.name}
                                                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${serviceDropdownOpen ? 'rotate-180' : ''}`} />
                                            </Link>

                                            {/* Premium Dropdown Panel */}
                                            <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-300 ease-out ${serviceDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-3 pointer-events-none'}`}>
                                                <div className="bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.15),0_0_0_1px_rgba(0,0,0,0.04)] overflow-hidden w-[340px]">
                                                    {/* Arrow */}
                                                    <div className="absolute top-[10px] left-1/2 -translate-x-1/2 w-3.5 h-3.5 bg-white rotate-45 border-l border-t border-gray-100 z-20" />


                                                    {/* Divider */}
                                                    <div className="mx-5 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

                                                    {/* Items */}
                                                    <div className="relative z-10 py-2 px-2">
                                                        {SERVICE_ITEMS.map(({ name, desc, path, icon: Icon, color, bg }) => (
                                                            <Link
                                                                key={name}
                                                                to={path}
                                                                className="flex items-center gap-3.5 px-3 py-3 rounded-xl transition-all duration-200 group hover:bg-gray-50"
                                                            >
                                                                <div
                                                                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-105 group-hover:shadow-md"
                                                                    style={{ backgroundColor: bg, border: `1.5px solid ${color}20` }}
                                                                >
                                                                    <Icon className="w-[18px] h-[18px]" style={{ color }} />
                                                                </div>
                                                                <div className="flex-1 min-w-0">
                                                                    <span className="font-bold text-[13.5px] text-gray-800 block leading-tight group-hover:text-red-600 transition-colors duration-200">{name}</span>
                                                                    <span className="text-[11.5px] text-gray-400 block mt-0.5 leading-tight">{desc}</span>
                                                                </div>
                                                                <ChevronRight className="w-4 h-4 text-gray-300 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                                                            </Link>
                                                        ))}
                                                    </div>

                                                    {/* Footer CTA */}
                                                    <div className="mx-2 mb-2">
                                                        <Link
                                                            to="/service"
                                                            className="flex items-center justify-between px-4 py-3 rounded-xl bg-gradient-to-r from-black-50 to-black-50/40 hover:from-black-100 hover:to-black-50 transition-all duration-300 group"
                                                        >
                                                            <span className="text-[12.5px] font-bold text-black-600">View All Services</span>
                                                            <ArrowRight className="w-4 h-4 text-black-400 group-hover:translate-x-1 transition-transform duration-300" />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <NavLink
                                            key={link.name}
                                            path={link.path}
                                            className="relative px-5 py-2 rounded-full font-bold text-[14px] text-gray-600 hover:text-red-600 hover:bg-white hover:shadow-sm transition-all duration-300"
                                        >
                                            {link.name}
                                        </NavLink>
                                    )
                                )}
                            </div>
                        </div>

                        {/* ── Desktop CTA ── */}
                        <div className="hidden xl:flex items-center gap-4">
                            <Link to="/contact#contact-form" className="relative overflow-hidden flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-500 text-white px-6 py-2.5 rounded-full font-bold text-[14px] shadow-lg shadow-red-500/20 hover:shadow-red-500/30 hover:from-red-700 hover:to-red-600 transition-all duration-300 group no-underline">
                                <GraduationCap className="w-4.5 h-4.5" />
                                <span>Admissions Enquiry</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                            </Link>
                        </div>

                        {/* ── Mobile Toggle ── */}
                        <div className="flex items-center xl:hidden">
                            <button
                                onClick={() => setIsOpen((v) => !v)}
                                className="p-2.5 rounded-xl text-gray-600 hover:text-red-600 hover:bg-red-50 focus:outline-none transition-all duration-300 border border-transparent hover:border-red-100"
                                aria-label="Toggle menu"
                            >
                                {isOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* ══════════ MOBILE MENU ══════════ */}
                <div
                    className={`xl:hidden fixed left-0 w-full transition-all duration-400 ease-in-out ${isOpen ? 'top-[69px] sm:top-[77px] opacity-100 visible' : 'top-[50px] opacity-0 invisible pointer-events-none'
                        }`}
                    style={{ height: 'calc(100dvh - 69px)' }}
                >
                    <div className="bg-white border-t border-gray-100 h-full overflow-y-auto flex flex-col">

                        {/* Nav Links */}
                        <div className="flex-1 px-5 sm:px-6 pt-4 pb-3">
                            <div className="space-y-1">
                                {NAV_LINKS.map((link) => {
                                    const NavIcon = link.icon;

                                    if (link.hasDropdown) {
                                        return (
                                            <div key={link.name}>
                                                <button
                                                    onClick={() => setMobileServiceOpen((v) => !v)}
                                                    className="w-full flex items-center justify-between px-4 py-3.5 rounded-xl transition-all duration-300 group"
                                                    style={{ backgroundColor: mobileServiceOpen ? `${link.color}08` : 'transparent' }}
                                                >
                                                    <div className="flex items-center gap-3.5">
                                                        <IconBadge icon={NavIcon} color={link.color} />
                                                        <div className="text-left">
                                                            <span className="text-[15px] font-bold text-gray-800 block leading-tight">{link.name}</span>
                                                            <span className="text-[11px] text-gray-400 font-medium">Coaching Programs</span>
                                                        </div>
                                                    </div>
                                                    <ChevronDown className={`w-4.5 h-4.5 text-gray-400 transition-all duration-300 ${mobileServiceOpen ? 'rotate-180 text-red-500' : ''}`} />
                                                </button>

                                                {/* Sub-menu */}
                                                <div className={`overflow-hidden transition-all duration-400 ease-in-out ${mobileServiceOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                                    <div className="ml-5 mr-2 mb-2 mt-1 bg-gray-50/80 rounded-xl border border-gray-100 overflow-hidden">
                                                        {SERVICE_ITEMS.map(({ name, desc, path, icon: SubIcon, color, bg }, idx) => (
                                                            <Link
                                                                key={name}
                                                                to={path}
                                                                className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-white transition-all duration-200"
                                                                style={{ borderBottom: idx < SERVICE_ITEMS.length - 1 ? '1px solid #f3f4f6' : 'none' }}
                                                                onClick={closeMenu}
                                                            >
                                                                <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: bg, border: `1px solid ${color}15` }}>
                                                                    <SubIcon className="w-4 h-4" style={{ color }} />
                                                                </div>
                                                                <div className="flex-1 min-w-0">
                                                                    <span className="text-[13.5px] font-bold text-gray-700 block leading-tight">{name}</span>
                                                                    <span className="text-[11px] text-gray-400 block mt-0.5">{desc}</span>
                                                                </div>
                                                                <ChevronRight className="w-3.5 h-3.5 text-gray-300 ml-auto flex-shrink-0" />

                                                            </Link>
                                                        ))}
                                                        {/* View All Courses Button */}
                                                        <Link
                                                            to="/service"
                                                            onClick={closeMenu}
                                                            className="flex items-center justify-between px-4 py-3 bg-gray-100/80 hover:bg-gray-200/80 transition-all duration-200 group"
                                                        >
                                                            <span className="text-[13px] font-bold text-gray-700">View All Courses</span>
                                                            <ArrowRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform duration-300" />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    }

                                    return (
                                        <NavLink
                                            key={link.name}
                                            path={link.path}
                                            onClick={closeMenu}
                                            className="flex items-center gap-3.5 px-4 py-3.5 rounded-xl transition-all duration-300 group hover:bg-gray-50"
                                        >
                                            <IconBadge icon={NavIcon} color={link.color} />
                                            <span className="text-[15px] font-bold text-gray-800 flex-1">{link.name}</span>
                                            <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-gray-500 group-hover:translate-x-0.5 transition-all duration-300" />
                                        </NavLink>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Bottom — CTA + Contact */}
                        <div className="px-5 sm:px-6 pb-6 pt-2">
                            <div className="h-px mb-4 bg-gradient-to-r from-red-200 via-gray-200 to-green-200" />

                            <Link to="/contact#contact-form" onClick={closeMenu} className="w-full flex items-center justify-center gap-2.5 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white text-[15px] px-4 py-4 rounded-2xl font-bold shadow-lg shadow-red-500/20 transition-all duration-300 mb-4 no-underline">
                                <GraduationCap className="w-5 h-5" />
                                Admissions Enquiry
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
