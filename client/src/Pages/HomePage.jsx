import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../Layout/Layout";
import heroPng from "../assets/images/hero.png";

export default function HomePage() {
  const headingRef = useRef(null); // Ref to the heading element for the typewriter effect
  const [displayText, setDisplayText] = useState(""); // State to hold the text as it's typed
  const fullText = "  Discover Your Potential with Exceptional Online Courses"; // The complete text for the typewriter effect
  const typingSpeed = 100; // Speed of typing in milliseconds per character

  // useEffect hook for the typewriter effect
  useEffect(() => {
    let i = 0;
    if (headingRef.current) {
      // Set up an interval to add characters one by one
      const intervalId = setInterval(() => {
        if (i < fullText.length) {
          // Append the next character to the display text
          setDisplayText((prevText) => prevText + fullText.charAt(i));
          i++;
        } else {
          // Clear the interval once the full text is displayed
          clearInterval(intervalId);
        }
      }, typingSpeed);

      // Cleanup function to clear the interval if the component unmounts
      return () => clearInterval(intervalId);
    }
  }, [fullText, typingSpeed]); // Dependencies: re-run if fullText or typingSpeed changes

  return (
    <Layout>
      <section className="relative overflow-hidden md:py-20 py-12 text-white flex flex-col md:flex-row-reverse items-center justify-center md:gap-16 gap-10 px-6 md:px-16 min-h-[85vh] bg-gradient-to-br from-indigo-900 to-purple-900 dark:from-gray-900 dark:to-gray-800">
        {/* Background Gradients/Shapes - for visual depth */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-yellow-400 rounded-full opacity-10 blur-3xl animate-blob -z-0"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500 rounded-full opacity-10 blur-3xl animate-blob animation-delay-2000 -z-0"></div>

        {/* Image Section - Hero PNG with continuous up and down animation */}
        {/* Reverted to md:w-1/2 for side-by-side layout on larger screens */}
        <div className="md:w-1/2 w-full flex items-center justify-center relative z-10 animate-fade-in-up">
          <img
            alt="Students learning online"
            src={heroPng}
            className="w-full max-w-md md:max-w-lg object-contain rounded-lg transform transition-transform duration-500 ease-in-out animate-bounce-y"
          />
        </div>

        {/* Content Section - Main heading with typewriter effect and natural text wrapping */}
        {/* Reverted to md:w-1/2 for side-by-side layout on larger screens */}
        <div className="md:w-1/2 w-full space-y-8 text-center md:text-left relative z-10 animate-fade-in-down">
          <h1
            ref={headingRef} // Attach the ref to the h1 element
            // Removed 'whitespace-nowrap' to allow text to wrap onto multiple lines
            className="md:text-6xl text-5xl font-extrabold leading-tight text-gray-100 dark:text-gray-50"
          >
            {displayText} {/* Display the text character by character */}
            {/* Blinking cursor for the typewriter effect, visible only while typing */}
            {displayText.length < fullText.length && (
              <span className="inline-block w-1 h-6 bg-gray-100 dark:bg-gray-50 ml-2 animate-blink"></span>
            )}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 dark:text-gray-300 font-light leading-relaxed">
            Unlock knowledge with our extensive library of courses, expertly
            taught by highly skilled and qualified instructors, all at an
            unbeatable value.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-5 pt-4">
            <Link to="/courses" className="block">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold py-4 px-8 rounded-full shadow-lg transform hover:-translate-y-1 transition-all duration-300 ease-in-out text-lg tracking-wide focus:outline-none focus:ring-4 focus:ring-yellow-300 focus:ring-opacity-75">
                Explore Courses 🚀
              </button>
            </Link>

            <Link to="/contact" className="block">
              <button className="border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-gray-900 font-semibold py-4 px-8 rounded-full shadow-lg transform hover:-translate-y-1 transition-all duration-300 ease-in-out text-lg tracking-wide focus:outline-none focus:ring-4 focus:ring-yellow-300 focus:ring-opacity-75">
                Get in Touch 👋
              </button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
