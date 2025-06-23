'use client'

import { useState } from 'react';

export default function LandingPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!email.trim()) return;
    // Here you would normally send 'email' to a backend or service
    setSubmitted(true);
    setEmail('');
  }

  return (
    <>
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <h1 className="text-2xl font-extrabold text-indigo-600 select-none">SafePings</h1>
          <nav className="hidden md:flex space-x-8 text-gray-700 font-semibold">
            <a href="#how-it-works" className="hover:text-indigo-600 transition">How It Works</a>
            <a href="#made-for" className="hover:text-indigo-600 transition">Made For</a>
            <a href="#why-smart" className="hover:text-indigo-600 transition">Why It’s Smart</a>
          </nav>
        </div>
      </header>

      <main className="bg-gray-50">
        {/* Above the Fold */}
        <section className="max-w-7xl mx-auto px-6 pt-20 pb-16 md:pb-24 flex flex-col-reverse md:flex-row items-center md:items-start gap-12 md:gap-20">
          <div className="max-w-xl text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight">
              1 Tap. Trusted People. Instant Help.
            </h2>
            <p className="mt-5 text-lg text-gray-700 leading-relaxed">
              SafePing sends real-time alerts to your emergency circle — when seconds matter most.
            </p>
            <form
              onSubmit={handleSubmit}
              className="mt-8 flex max-w-md mx-auto md:mx-0"
              aria-label="Join the SafePing early access list"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-grow rounded-l-md border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                aria-label="Email address"
              />
              <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-r-md transition focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1"
                aria-live="polite"
              >
                Reserve My SafePing
              </button>
            </form>
            {submitted && (
              <p className="mt-4 text-green-600 font-medium" role="alert">
                Thank you! You’ve been added to the early access list.
              </p>
            )}
          </div>

          {/* Visual mockup + alert screenshot */}
          <div className="flex flex-col items-center md:items-end space-y-8">
            {/* Device mockup */}
            <div className="relative w-48 h-48 md:w-56 md:h-56 bg-white rounded-3xl shadow-lg flex flex-col items-center justify-center border border-gray-200">
              <div className="w-20 h-20 bg-indigo-600 rounded-full shadow-inner animate-pulse" aria-hidden="true" />
              <span className="mt-4 text-white font-semibold text-lg select-none">SafePing Button</span>
            </div>

            {/* Alert screenshot */}
            <div className="w-72 bg-white rounded-xl shadow-md border border-gray-200 p-5 text-left select-none">
              <p className="text-xl mb-2" aria-label="Alert emoji and message">🚨 <strong>Jane triggered SafePing:</strong></p>
              <p className="text-gray-800 font-semibold">Possible break-in, Apartment 2B</p>
            </div>
          </div>
        </section>

        {/* Below the Fold */}
        <section
          id="how-it-works"
          className="bg-white py-20 px-6 max-w-7xl mx-auto"
          aria-labelledby="how-it-works-title"
        >
          <h3
            id="how-it-works-title"
            className="text-3xl font-extrabold text-gray-900 text-center"
          >
            🚨 How It Works
          </h3>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto text-center">
            {/* Step 1 */}
            <div className="flex flex-col items-center space-y-4">
              <div className="bg-indigo-100 text-indigo-600 rounded-full p-5 inline-flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                  focusable="false"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900">Tap the Button</h4>
              <p className="text-gray-700 max-w-xs">
                Physical button or mobile app — just one tap to send help.
              </p>
            </div>
            {/* Step 2 */}
            <div className="flex flex-col items-center space-y-4">
              <div className="bg-indigo-100 text-indigo-600 rounded-full p-5 inline-flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                  focusable="false"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-9 8v-6" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900">Ping Sent Instantly</h4>
              <p className="text-gray-700 max-w-xs">
                SMS, app push, and email alerts to your trusted emergency circle.
              </p>
            </div>
            {/* Step 3 */}
            <div className="flex flex-col items-center space-y-4">
              <div className="bg-indigo-100 text-indigo-600 rounded-full p-5 inline-flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                  focusable="false"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.84 4.234c0 2.485-2.239 4.5-5 4.5s-5-2.015-5-4.5a12.05 12.05 0 01.84-4.234L12 14z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900">Share Info Automatically</h4>
              <p className="text-gray-700 max-w-xs">
                GPS location, optional photo/audio, and reason (fire, medical, intrusion, etc.).
              </p>
            </div>
          </div>
        </section>

        <section
          id="made-for"
          className="bg-indigo-50 py-20 px-6 max-w-7xl mx-auto"
          aria-labelledby="made-for-title"
        >
          <h3
            id="made-for-title"
            className="text-3xl font-extrabold text-indigo-700 text-center"
          >
            👪 Made For
          </h3>
          <ul className="mt-12 max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-indigo-900 text-center font-semibold text-lg select-none">
            <li className="flex flex-col items-center space-y-3">
              <span className="text-4xl" aria-hidden="true">🧓</span>
              <span>Elderly living alone</span>
            </li>
            <li className="flex flex-col items-center space-y-3">
              <span className="text-4xl" aria-hidden="true">🧍</span>
              <span>Solo renters or students</span>
            </li>
            <li className="flex flex-col items-center space-y-3">
              <span className="text-4xl" aria-hidden="true">🏠</span>
              <span>Families &amp; parents</span>
            </li>
            <li className="flex flex-col items-center space-y-3">
              <span className="text-4xl" aria-hidden="true">🏢</span>
              <span>Small businesses</span>
            </li>
          </ul>
        </section>

        <section
          id="why-smart"
          className="bg-white py-20 px-6 max-w-7xl mx-auto"
          aria-labelledby="why-smart-title"
        >
          <h3
            id="why-smart-title"
            className="text-3xl font-extrabold text-gray-900 text-center"
          >
            🔐 Why It’s Smart
          </h3>
          <div className="mt-12 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center text-gray-800 select-none">
            <div className="flex flex-col items-center space-y-4">
              <div className="bg-indigo-100 text-indigo-600 rounded-full p-5 inline-flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                  focusable="false"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 4H7a2 2 0 01-2-2V6a2 2 0 012-2h5l5 5v11a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900">🧠 AI detects patterns</h4>
              <p>Frequent pings trigger auto-escalation for faster response.</p>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <div className="bg-indigo-100 text-indigo-600 rounded-full p-5 inline-flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                  focusable="false"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A2 2 0 0122 9.618v4.764a2 2 0 01-2.447 1.894L15 14m0-4v4m0 0v4m0-4h-3m3 0h3" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900">🗣️ Voice-activated backup</h4>
              <p>Hands-free trigger ensures help even when you can’t press the button.</p>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <div className="bg-indigo-100 text-indigo-600 rounded-full p-5 inline-flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                  focusable="false"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-gray-900">🌐 Offline Bluetooth fallback</h4>
              <p>Works without internet to keep you protected anywhere.</p>
            </div>
          </div>
          <div className="mt-16 max-w-3xl mx-auto bg-indigo-50 border border-indigo-200 rounded-xl p-6 text-center text-indigo-900 font-semibold select-none">
            🔒 All data is encrypted to keep your information safe and private.
          </div>
        </section>

        <section className="bg-indigo-600 py-16 px-6">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h3 className="text-3xl font-extrabold mb-6">Join the SafePing Early Access List</h3>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-4 justify-center"
              aria-label="Join the SafePing early access list bottom form"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-grow rounded-md px-4 py-3 text-indigo-900 placeholder-indigo-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600"
                aria-label="Email address"
              />
              <button
                type="submit"
                className="bg-white text-indigo-600 font-semibold rounded-md px-6 py-3 hover:bg-indigo-100 transition focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600"
                aria-live="polite"
              >
                Join the Early Access List
              </button>
            </form>
            {submitted && (
              <p className="mt-4 text-green-300 font-medium" role="alert">
                Thank you! You’ve been added to the early access list.
              </p>
            )}
          </div>
        </section>

        <footer className="bg-gray-100 py-8 text-center text-gray-600 text-sm select-none">
          © {new Date().getFullYear()} SafePings. All rights reserved.
        </footer>
      </main>
    </>
  );
}