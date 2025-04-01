import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, User, LogIn, LogOut, Lock } from "lucide-react";
import { useUserStore } from "../store/useUserStore";

export default function Navbar() {
  const { user, logout } = useUserStore();
  const isAdmin = user?.role === "admin";
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-sm py-2" : "bg-white py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-xl font-medium text-gray-800">Hotel P</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Home
            </Link>
            <Link
              to="/Rooms"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Rooms
            </Link>
            <Link
              to="/gallery"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Gallery
            </Link>
            <Link
              to="/contact"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Auth buttons - desktop */}
          <div className="hidden md:flex items-center space-x-4">
            {isAdmin && (
              <Link
                to={"/admin"}
                className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Lock className="inline-block mr-1" size={18} />
                <span>Dashboard</span>
              </Link>
            )}

            {user ? (
              <button
                className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
                onClick={logout}
              >
                <LogOut size={18} className="mr-1" />
                <span>Logout</span>
              </button>
            ) : (
              <>
                <Link
                  to="/login"
                  className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <LogIn size={18} className="mr-1" />
                  <span>Login</span>
                </Link>
                <Link
                  to="/signup"
                  className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors"
                >
                  <User size={18} className="mr-1" />
                  <span>Sign Up</span>
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t mt-2">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-3">
              <Link
                to="/"
                className="text-gray-600 hover:text-gray-900 py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/rooms"
                className="text-gray-600 hover:text-gray-900 py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Rooms
              </Link>
              <Link
                to="/gallery"
                className="text-gray-600 hover:text-gray-900 py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link
                to="/contact"
                className="text-gray-600 hover:text-gray-900 py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="flex space-x-4 pt-2 border-t">
                {isAdmin && (
                  <Link
                    to={"/admin"}
                    className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Lock className="inline-block mr-1" size={18} />
                    <span className="hidden sm:inline">Dashboard</span>
                  </Link>
                )}
                {user ? (
                  <button
                    className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
                    onClick={() => {
                      logout();
                      setIsMenuOpen(false);
                    }}
                  >
                    <LogOut size={18} className="mr-1" />
                    <span className="hidden sm:inline ml-2">Logout</span>
                  </button>
                ) : (
                  <>
                    <Link
                      to="/login"
                      className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <LogIn size={18} className="mr-1" />
                      <span>Login</span>
                    </Link>
                    <Link
                      to="/signup"
                      className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <User size={18} className="mr-1" />
                      <span>Sign Up</span>
                    </Link>
                  </>
                )}
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
