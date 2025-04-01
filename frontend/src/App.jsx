import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import LoadingSpinner from "./components/LoadingSpinner.jsx";

import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SignupPage from "./pages/SignupPage.jsx";
import EmailVerifyPage from "./pages/EmailVerifyPage.jsx";
import ResetPasswordPage from "./pages/ResetPasswordPage.jsx";
import ConractPage from "./pages/ContacPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";


import { useUserStore } from "./store/useUserStore.js";

const App = () => {
  const { user, checkAuth, checkingAuth } = useUserStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  useEffect(() => {
    if (!user) return;
  }, [user]);

  if (checkingAuth) {
    return (
      <LoadingSpinner
        size="3xl"
        color="primary"
        label="Loading..."
        fullScreen={true}
      />
    );
  }

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        {/* Toast Container - Available throughout the app */}
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 3000,
            style: {
              background: "#363636",
              color: "#fff",
            },
            success: {
              duration: 3000,
              style: {
                background: "#22c55e",
              },
            },
            error: {
              duration: 3000,
              style: {
                background: "#ef4444",
              },
            },
          }}
        />
        <main className="flex-1 pt-16 md:pt-20">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/login"
              element={!user ? <LoginPage /> : <Navigate to="/" />}
            />
            <Route
              path="/signup"
              element={!user ? <SignupPage /> : <Navigate to="/" />}
            />
            <Route path="/email-verify" element={<EmailVerifyPage />} />
            <Route path="/reset-password" element={<ResetPasswordPage />} />
            <Route path="/contact" element={<ConractPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;
