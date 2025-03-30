"use client";

import { Link } from "react-router-dom";
import { Home, Search, ArrowLeft } from "lucide-react";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-12">
      <div className="text-center max-w-md mx-auto">
        {/* 404 Number */}
        <h1 className="text-9xl font-bold text-blue-600">404</h1>

        {/* Hotel icon */}
        <div className="my-8 relative">
          <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-12 h-12 text-blue-600"
            >
              <path d="M19 21V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v16" />
              <path d="M1 21h22" />
              <path d="M8 9h8" />
              <path d="M8 13h8" />
              <path d="M8 17h8" />
            </svg>
          </div>
        </div>

        {/* Message */}
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
          Room Not Found
        </h2>
        <p className="text-gray-600 mb-8">
          We couldn't find the page you're looking for. It seems this room has
          been checked out or doesn't exist.
        </p>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-colors"
          >
            <Home size={18} />
            <span>Back to Home</span>
          </Link>

          <Link
            to="/rooms"
            className="flex items-center justify-center gap-2 border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 px-6 py-3 rounded-md transition-colors"
          >
            <Search size={18} />
            <span>Browse Rooms</span>
          </Link>
        </div>

        {/* Back button */}
        <button
          onClick={() => window.history.back()}
          className="mt-8 flex items-center justify-center gap-2 text-blue-600 hover:text-blue-800 transition-colors mx-auto"
        >
          <ArrowLeft size={16} />
          <span>Go Back</span>
        </button>
      </div>

      {/* Decorative elements */}
      <div className="mt-12 w-full max-w-lg mx-auto">
        <div className="h-1 bg-gradient-to-r from-transparent via-blue-600 to-transparent"></div>
        <p className="text-center text-sm text-gray-500 mt-4">
          If you believe this is an error, please contact our reception at{" "}
          <span className="text-blue-600">info@hotelp.com</span>
        </p>
      </div>
    </div>
  );
}
