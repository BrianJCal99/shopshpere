'use client';

import { useState } from 'react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [message, setMessage] = useState('');

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
        setMessage('Thank you for subscribing 🎉');
        setEmail('');
        setUserName('');
      } else {
        setStatus('error');
        setMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Subscription error:', error);
      setStatus('error');
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div className="mt-32 sm:mt-48 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="relative isolate overflow-hidden bg-slate-50 px-6 py-24 shadow-sm rounded-3xl border border-gray-100 sm:px-24 xl:py-32">
          <h2 className="mx-auto max-w-2xl text-center text-4xl font-black tracking-tight text-gray-900 sm:text-6xl">
            Stay in the loop.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-lg leading-8 text-gray-600">
            Subscribe to our newsletter for exclusive drops, seasonal previews, and sustainable fashion insights.
          </p>
          
          <div className="mx-auto mt-10 max-w-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <label htmlFor="user-name" className="sr-only">
                    Name
                  </label>
                  <input
                    id="user-name"
                    name="userName"
                    type="text"
                    required
                    placeholder="Your name"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    disabled={status === 'loading' || status === 'success'}
                    className="w-full rounded-2xl border-0 bg-white px-6 py-4 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 transition-all duration-200 disabled:opacity-50"
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    required
                    placeholder="Your email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={status === 'loading' || status === 'success'}
                    className="w-full rounded-2xl border-0 bg-white px-6 py-4 text-gray-900 shadow-md ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 transition-all duration-200 disabled:opacity-50"
                  />
                </div>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={status === 'loading' || status === 'success'}
                  className="w-full sm:w-auto flex-none rounded-2xl bg-indigo-600 px-16 py-4 text-base font-bold text-white shadow-xl hover:bg-indigo-500 hover:shadow-indigo-200/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all duration-300 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:scale-100 disabled:hover:shadow-none"
                >
                  {status === 'loading' ? 'Joining...' : 'Join Now'}
                </button>
              </div>
            </form>
            {message && (
              <div className="relative mt-8">
                {status === 'success' && (
                  <div className="absolute inset-0 pointer-events-none">
                    {/* Confetti Burst */}
                    <div className="absolute left-1/4 top-0 h-2 w-2 animate-ping rounded-full bg-yellow-400 [animation-duration:1.5s]" />
                    <div className="absolute right-1/4 top-0 h-2 w-2 animate-ping rounded-full bg-blue-400 [animation-duration:2s] [animation-delay:200ms]" />
                    <div className="absolute left-1/2 top-[-20px] h-3 w-3 animate-ping rounded-full bg-red-500 [animation-duration:2.5s] [animation-delay:500ms]" />
                    <div className="absolute right-1/3 top-10 h-2 w-2 animate-ping rounded-full bg-green-400 [animation-duration:1.8s] [animation-delay:100ms]" />
                    <div className="absolute left-1/3 top-5 h-2 w-2 animate-ping rounded-full bg-pink-400 [animation-duration:3s] [animation-delay:800ms]" />
                    <div className="absolute right-1/2 top-[-10px] h-2 w-2 animate-ping rounded-full bg-indigo-400 [animation-duration:2.2s]" />
                    
                    {/* Floating Bits */}
                    <div className="absolute -left-4 top-2 h-1.5 w-1.5 animate-bounce rounded bg-orange-400 [animation-delay:150ms]" />
                    <div className="absolute -right-4 top-4 h-1.5 w-1.5 animate-bounce rounded bg-purple-400 [animation-delay:400ms]" />
                  </div>
                )}
                <p className={`text-center text-lg font-bold ${
                  status === 'success' 
                    ? 'text-gray-600 flex items-center justify-center gap-2' 
                    : 'text-gray-400'
                }`}>
                  {status === 'success' ? `${message}` : message}
                </p>
              </div>
            )}
          </div>

          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
          >
            <circle r={512} cx={512} cy={512} fill="url(#newsletter-gradient)" fillOpacity="0.3" />
            <defs>
              <radialGradient id="newsletter-gradient">
                <stop stopColor="#5a67d8" />
                <stop offset={1} stopColor="#5a67d8" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}
