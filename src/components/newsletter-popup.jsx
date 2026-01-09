'use client';

import { useState, useEffect } from 'react';
import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react';
import { X } from 'lucide-react';
import Image from 'next/image';

export default function NewsletterPopup() {
    const [isOpen, setIsOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [status, setStatus] = useState('idle');
    const [message, setMessage] = useState('');

    useEffect(() => {
        const hasSeenPopup = localStorage.getItem('hasSeenNewsletterPopup');
        if (!hasSeenPopup) {
            const timer = setTimeout(() => {
                setIsOpen(true);
            }, 3000); // Show after 3 seconds
            return () => clearTimeout(timer);
        }
    }, []);

    const closePopup = () => {
        setIsOpen(false);
        localStorage.setItem('hasSeenNewsletterPopup', 'true');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        setMessage('');

        try {
            const response = await fetch('/api/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, userName }),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus('success');
                setMessage('Welcome to the collective! 🎉');
                setEmail('');
                setUserName('');
                setTimeout(() => {
                    closePopup();
                }, 3000);
            } else {
                setStatus('error');
                setMessage(data.error || 'Something went wrong.');
            }
        } catch (error) {
            console.error('Subscription error:', error);
            setStatus('error');
            setMessage('An error occurred.');
        }
    };

    return (
        <Transition show={isOpen}>
            <Dialog onClose={closePopup} className="relative z-[100]">
                <TransitionChild
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black/60 backdrop-blur-md" />
                </TransitionChild>

                <div className="fixed inset-0 flex w-screen items-center justify-center p-4 md:p-6">
                    <TransitionChild
                        enter="ease-out duration-500"
                        enterFrom="opacity-0 scale-95 translate-y-8"
                        enterTo="opacity-100 scale-100 translate-y-0"
                        leave="ease-in duration-300"
                        leaveFrom="opacity-100 scale-100 translate-y-0"
                        leaveTo="opacity-0 scale-95 translate-y-8"
                    >
                        <DialogPanel className="relative max-w-4xl w-full bg-white rounded-[2rem] overflow-hidden shadow-2xl flex flex-col md:flex-row border border-white/20">
                            <button
                                onClick={closePopup}
                                className="absolute top-5 right-5 z-20 p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-gray-100 transition-all text-gray-500 shadow-sm border border-gray-100 hover:rotate-90 duration-300"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            {/* Left: Image Container */}
                            <div className="md:w-5/12 relative h-48 md:h-auto overflow-hidden">
                                <Image
                                    src="/newsletter_image.webp"
                                    alt="Modern Fashion"
                                    fill
                                    className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                                    sizes="(max-width: 768px) 100vw, 40vw"
                                    priority
                                />
                                <div className="absolute inset-0 bg-indigo-900/10 mix-blend-overlay" />
                            </div>

                            {/* Right: Content & Form */}
                            <div className="md:w-7/12 p-8 md:p-14 flex flex-col justify-center">
                                <div className="space-y-2 mb-8">
                                    <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-indigo-600">Newsletter</span>
                                    <h2 className="text-4xl font-black text-gray-900 tracking-tighter leading-none">
                                        JOIN THE <br /><span className="text-indigo-600 underline decoration-indigo-200 underline-offset-8">COLLECTIVE</span>
                                    </h2>
                                </div>

                                <p className="text-gray-500 mb-8 font-light text-lg leading-relaxed max-w-sm">
                                    Get exclusive early access to new drops and curated style guides delivered to your inbox.
                                </p>

                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="space-y-3">
                                        <input
                                            type="text"
                                            placeholder="Your Name"
                                            required
                                            value={userName}
                                            onChange={(e) => setUserName(e.target.value)}
                                            disabled={status === 'loading' || status === 'success'}
                                            className="w-full px-5 py-4 rounded-2xl border border-gray-100 focus:outline-none focus:ring-4 focus:ring-indigo-500/5 focus:border-indigo-500 transition-all bg-gray-50 placeholder:text-gray-400 font-medium"
                                        />
                                        <input
                                            type="email"
                                            placeholder="Email Address"
                                            required
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            disabled={status === 'loading' || status === 'success'}
                                            className="w-full px-5 py-4 rounded-2xl border border-gray-100 focus:outline-none focus:ring-4 focus:ring-indigo-500/5 focus:border-indigo-500 transition-all bg-gray-50 placeholder:text-gray-400 font-medium"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={status === 'loading' || status === 'success'}
                                        className="w-full py-5 bg-gray-900 text-white font-black rounded-2xl hover:bg-gray-800 transition-all shadow-xl shadow-gray-200 active:scale-95 disabled:opacity-50 disabled:active:scale-100 flex items-center justify-center gap-2 group"
                                    >
                                        {status === 'loading' ? (
                                            <span className="flex items-center gap-2">
                                                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Subscribing...
                                            </span>
                                        ) : status === 'success' ? 'Subscribed' : (
                                            <>
                                                Join Now
                                                <X className="w-5 h-5 rotate-45 group-hover:translate-x-1 transition-transform" />
                                            </>
                                        )}
                                    </button>
                                </form>

                                {message && (
                                    <p className={`mt-5 text-center text-sm font-bold tracking-tight ${status === 'success' ? 'text-indigo-600' : 'text-red-500'}`}>
                                        {message}
                                    </p>
                                )}

                                <p className="mt-8 text-[9px] text-gray-400 text-center uppercase tracking-[0.2em] font-medium">
                                    Privacy First. No Spam. <a href="/privacy-policy" className="text-gray-900 hover:text-indigo-600 transition-colors">Details</a>.
                                </p>
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </Dialog>
        </Transition>
    );
}
