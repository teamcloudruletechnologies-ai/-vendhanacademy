import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

// Web3Forms
const WEB3FORMS_KEY = 'e5937d9a-1ab3-4154-88c8-e41c50902fe0';

const ContactUS = () => {
    const location = useLocation();

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

    // Auto-scroll to contact form when navigated with #contact-form hash
    useEffect(() => {
        if (location.hash === '#contact-form') {
            setTimeout(() => {
                const el = document.getElementById('contact-form');
                if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }, 300);
        }
    }, [location]);

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    access_key: WEB3FORMS_KEY,
                    subject: 'New Contact Form Submission - Vendhan Academy',
                    from_name: 'Vendhan Academy Website',
                    name: formData.name,
                    phone: formData.phone,
                    email: formData.email,
                    message: formData.message,
                }),
            });

            const result = await response.json();

            if (result.success) {
                setSubmitStatus('success');
                setFormData({ name: '', phone: '', email: '', message: '' });
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
            // Auto-hide the status message after 5 seconds
            setTimeout(() => setSubmitStatus(null), 5000);
        }
    };

    return (
        <div className="min-h-screen bg-white flex flex-col font-sans">
            <Helmet>
                <title>Contact Us | Vendhan Academy Madurai</title>
                <meta name="description" content="Get in touch with Vendhan Academy in Madurai, Tamil Nadu. Reach out for enrollment queries, program details, schedules for UPSC, TNPSC, and Banking batches." />
                <meta name="keywords" content="contact Vendhan Academy, IAS academy phone number, Madurai coaching center address, government exam guidance contact" />
                <link rel="canonical" href="https://vendhanacademy.com/contact" />
                
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://vendhanacademy.com/contact" />
                <meta property="og:title" content="Contact Us | Vendhan Academy Madurai" />
                <meta property="og:description" content="Have questions about our civil service, banking, or police exam courses? Send us a message or visit our campus in KK Nagar, Madurai." />
                <meta property="og:image" content="https://vendhanacademy.com/src/assets/Images/Vendan%20logo.jpeg" />
            </Helmet>
            <Navbar />

            {/* Hero Headline Section */}
            <section className="pt-28 sm:pt-32 lg:pt-36 pb-12 sm:pb-16 relative overflow-hidden">
                {/* Subtle background accent */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-red-50/60 to-transparent rounded-full blur-3xl"></div>
                </div>

                <div className="relative max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1
                        className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-tight mb-4"
                        style={{ fontFamily: "'Cooper Black', 'Cooper Blk BT', serif" }}
                    >

                        <span className="text-black">Let's Take the First Step Toward Your IAS Dream.</span>
                    </h1>
                    <p className="text-base sm:text-lg text-black max-w-[600px] mx-auto" style={{ fontFamily: "sans-serif" }}>
                        Your journey to becoming a civil servant starts with one step.
                        Contact us today and let's build your success story together
                    </p>
                </div>
            </section>

            {/* Contact Content */}
            <section className="pb-16 sm:pb-20 lg:pb-28">
                <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">

                        {/* Left — Contact Info */}
                        <div className="border border-gray-300 rounded-2xl p-6 sm:p-8 hover:border-black-400 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6" style={{ fontFamily: "'Cooper Black', 'Cooper Blk BT', serif" }}>
                                Get in Touch
                            </h2>

                            <div className="space-y-5">

                                {/* Phone */}
                                <a href="tel:+919791394644" className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100 hover:border-green-100 hover:bg-green-50/30 transition-all duration-300">
                                    <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                                        <Phone className="w-5 h-5 text-green-600" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-gray-900 mb-0.5">Phone</p>
                                        <p className="text-sm text-gray-600">+91 9791394644</p>
                                    </div>
                                </a>

                                {/* Email */}
                                <a href="mailto:vendhaniasacademy@gmail.com" className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100 hover:border-yellow-100 hover:bg-yellow-50/30 transition-all duration-300">
                                    <div className="w-10 h-10 rounded-lg bg-yellow-100 flex items-center justify-center flex-shrink-0">
                                        <Mail className="w-5 h-5 text-yellow-600" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-gray-900 mb-0.5">Email</p>
                                        <p className="text-sm text-gray-600">vendhaniasacademy@gmail.com</p>
                                    </div>
                                </a>

                                {/* Address */}
                                <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100 hover:border-red-100 hover:bg-red-50/30 transition-all duration-300">
                                    <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0">
                                        <MapPin className="w-5 h-5 text-red-600" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-gray-900 mb-0.5">Address</p>
                                        <p className="text-sm text-gray-600 leading-relaxed">
                                            Plot no: 176, W 3rd Cross St, KK Nagar,<br />
                                            Madurai, Tamil Nadu, India
                                        </p>
                                    </div>
                                </div>

                                {/* Timing */}
                                <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100 hover:border-blue-100 hover:bg-blue-50/30 transition-all duration-300">
                                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                                        <Clock className="w-5 h-5 text-blue-600" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-gray-900 mb-0.5">Working Hours</p>
                                        <p className="text-sm text-gray-600">Mon – Sat: 10:00 AM – 6:00 PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right — Contact Form (Web3Forms) */}
                        <div id="contact-form" className="border border-gray-300 rounded-2xl p-6 sm:p-8 hover:border-black-400 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6" style={{ fontFamily: "'Cooper Black', 'Cooper Blk BT', serif" }}>
                                Reach out to us
                            </h2>

                            {/* Success / Error Messages */}
                            {submitStatus === 'success' && (
                                <div className="flex items-center gap-3 p-4 mb-5 rounded-xl bg-green-50 border border-green-200 animate-fade-in">
                                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                                    <p className="text-sm font-semibold text-green-700">
                                        Message sent successfully! We'll get back to you soon.
                                    </p>
                                </div>
                            )}
                            {submitStatus === 'error' && (
                                <div className="flex items-center gap-3 p-4 mb-5 rounded-xl bg-red-50 border border-red-200 animate-fade-in">
                                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                                    <p className="text-sm font-semibold text-red-700">
                                        Something went wrong. Please try again later.
                                    </p>
                                </div>
                            )}

                            <form className="space-y-4" onSubmit={handleSubmit}>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="Enter your name"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-red-400 focus:bg-white focus:ring-2 focus:ring-red-100 transition-all duration-300"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        placeholder="Enter your phone number "
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-red-400 focus:bg-white focus:ring-2 focus:ring-red-100 transition-all duration-300"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="Enter your email"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-red-400 focus:bg-white focus:ring-2 focus:ring-red-100 transition-all duration-300"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Message</label>
                                    <textarea
                                        rows="4"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        placeholder="Write your message..."
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-red-400 focus:bg-white focus:ring-2 focus:ring-red-100 transition-all duration-300 resize-none"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-black to-black hover:from-gray-800 hover:to-gray-900 text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-lg shadow-black/20 hover:shadow-black/30 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="w-4 h-4 animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-4 h-4" />
                                            Send Message
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>

                    </div>
                </div>
            </section>

            {/* Google Map Section */}
            <section className="pb-16 sm:pb-20">
                <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
                        <iframe
                            title="Vendhan Academy Location"
                            src="https://maps.google.com/maps?q=Vendhan+IAS+Academy+KK+Nagar+Madurai&t=k&z=17&output=embed"
                            width="100%"
                            height="400"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="w-full"
                        ></iframe>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ContactUS;
