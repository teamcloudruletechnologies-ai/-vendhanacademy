import React, { useState } from 'react';

const FloatingButtons = () => {
    const [waHovered, setWaHovered] = useState(false);
    const [callHovered, setCallHovered] = useState(false);

    const whatsappNumber = '9791394644';
    const phoneNumber = '9791394644';
    const whatsappMessage = 'Hi! I am interested in Vendhan Academy courses. Please share more details.';

    return (
        <>
            {/* Call Floating Button */}
            <a
                href={`tel:${phoneNumber}`}
                style={{
                    position: 'fixed',
                    bottom: '100px',
                    right: '24px',
                    zIndex: 1000,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '56px',
                    height: '56px',
                    backgroundColor: callHovered ? '#b91c1c' : '#dc2626',
                    borderRadius: '50%',
                    boxShadow: callHovered
                        ? '0 8px 25px rgba(220, 38, 38, 0.5)'
                        : '0 4px 15px rgba(220, 38, 38, 0.4)',
                    textDecoration: 'none',
                    transform: callHovered ? 'scale(1.1)' : 'scale(1)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    animation: 'callRing 2s infinite',
                }}
                onMouseEnter={() => setCallHovered(true)}
                onMouseLeave={() => setCallHovered(false)}
                title="Call Us"
            >
                <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
            </a>

            {/* WhatsApp Floating Button */}
            <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                    position: 'fixed',
                    bottom: '30px',
                    right: '24px',
                    zIndex: 1000,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '56px',
                    height: '56px',
                    backgroundColor: waHovered ? '#1da851' : '#25D366',
                    borderRadius: '50%',
                    boxShadow: waHovered
                        ? '0 8px 25px rgba(37, 211, 102, 0.5)'
                        : '0 4px 15px rgba(37, 211, 102, 0.4)',
                    textDecoration: 'none',
                    transform: waHovered ? 'scale(1.1)' : 'scale(1)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    animation: 'whatsappBounce 2s infinite',
                }}
                onMouseEnter={() => setWaHovered(true)}
                onMouseLeave={() => setWaHovered(false)}
                title="Chat on WhatsApp"
            >
                {/* WhatsApp SVG icon */}
                <svg
                    width="30"
                    height="30"
                    viewBox="0 0 32 32"
                    fill="#fff"
                >
                    <path d="M16.004 0C7.165 0 .004 7.16.004 16c0 2.822.737 5.573 2.137 7.998L.015 32l8.204-2.094A15.91 15.91 0 0 0 16.004 32C24.84 32 32 24.84 32 16S24.84 0 16.004 0zm0 29.12a13.07 13.07 0 0 1-6.67-1.825l-.478-.284-4.96 1.268 1.313-4.806-.312-.497A13.06 13.06 0 0 1 2.884 16c0-7.236 5.884-13.12 13.12-13.12S29.12 8.764 29.12 16s-5.88 13.12-13.116 13.12zm7.19-9.83c-.394-.197-2.332-1.15-2.694-1.282-.362-.13-.625-.197-.888.198-.263.394-1.02 1.283-1.25 1.546-.23.263-.46.296-.854.099-.394-.197-1.664-.613-3.17-1.956-1.172-1.044-1.963-2.334-2.193-2.728-.23-.394-.025-.607.173-.803.177-.177.394-.46.591-.69.197-.23.263-.394.394-.657.132-.263.066-.493-.033-.69-.1-.198-.888-2.14-1.217-2.93-.32-.77-.646-.665-.888-.678l-.757-.013c-.263 0-.69.098-1.052.493-.362.394-1.382 1.35-1.382 3.293 0 1.942 1.415 3.818 1.612 4.08.197.264 2.784 4.252 6.744 5.963.942.407 1.678.65 2.252.832.946.3 1.808.258 2.49.156.759-.113 2.332-.953 2.662-1.874.33-.92.33-1.71.23-1.874-.098-.164-.362-.263-.756-.46z" />
                </svg>
            </a>

            {/* Keyframe animations */}
            <style>{`
                @keyframes callRing {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-5px); }    
                }
                @keyframes whatsappBounce {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-5px); }
                }
            `}</style>
        </>
    );
};

export default FloatingButtons;
