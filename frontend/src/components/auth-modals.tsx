"use client"

import { useState } from "react"
// Import your modal components or use a library like react-modal
// Example with a simple custom modal:
import { SignInForm } from "./sign-in-form"
import { SignUpForm } from "./sign-up-form"
import React from "react"

export function AuthModals() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("signin")

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open)
    if (!open) {
      // Reset to sign-in tab when dialog closes
      setTimeout(() => setActiveTab("signin"), 300)
    }
  }

  return (
    <div className="flex items-center gap-2">
      {/* Sign In Button */}
      <button
        className="px-4 py-2 border rounded-md hover:bg-gray-100"
        onClick={() => {
          setActiveTab("signin")
          setIsOpen(true)
        }}
      >
        Sign In
      </button>

      {/* Sign Up Button */}
      <button
        className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
        onClick={() => {
          setActiveTab("signup")
          setIsOpen(true)
        }}
      >
        Sign Up
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">{activeTab === "signin" ? "Welcome Back" : "Create an Account"}</h2>
              <button onClick={() => handleOpenChange(false)} className="text-gray-500 hover:text-gray-700">
                ✕
              </button>
            </div>

            {/* Tabs */}
            <div className="flex border-b mb-4">
              <button
                className={`py-2 px-4 ${
                  activeTab === "signin" ? "border-b-2 border-red-600 text-red-600" : "text-gray-500"
                }`}
                onClick={() => setActiveTab("signin")}
              >
                Sign In
              </button>
              <button
                className={`py-2 px-4 ${
                  activeTab === "signup" ? "border-b-2 border-red-600 text-red-600" : "text-gray-500"
                }`}
                onClick={() => setActiveTab("signup")}
              >
                Sign Up
              </button>
            </div>

            {/* Form */}
            <div>
              {activeTab === "signin" ? (
                <SignInForm onSuccess={() => setIsOpen(false)} />
              ) : (
                <SignUpForm onSuccess={() => setIsOpen(false)} />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

