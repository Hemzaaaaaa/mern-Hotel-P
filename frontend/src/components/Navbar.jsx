"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Building, Menu, X, User, LogOut } from "lucide-react"
import { cn } from "@/lib/utils"
import { AuthModals } from "./auth-modals"
import { useAuth } from "@/contexts/auth-context"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const navItems = [
  { name: "HOME", path: "/" },
  { name: "ABOUT", path: "/about" },
  { name: "OUR ROOM", path: "/our-room" },
  { name: "GALLERY", path: "/gallery" },
  { name: "BLOG", path: "/blog" },
  { name: "CONTACT US", path: "/contact" },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const { user, signOut } = useAuth()

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Building className="h-8 w-8 text-red-600" />
            <span className="ml-2 text-2xl font-bold">
              <span className="text-red-600">H</span>OTEL MERN
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={cn(
                  "relative font-medium transition-colors hover:text-red-600",
                  pathname === item.path ? "text-red-600" : "text-black",
                )}
              >
                {item.name}
                {pathname === item.path && (
                  <span className="absolute -bottom-[18px] left-0 h-[3px] w-full bg-red-600" />
                )}
              </Link>
            ))}
          </div>

          {/* Auth Buttons (Desktop) */}
          <div className="hidden md:flex items-center ml-8">
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    {user.name}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Link href="/profile" className="flex w-full">
                      Profile
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/bookings" className="flex w-full">
                      My Bookings
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={signOut} className="text-red-600">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Sign Out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <AuthModals />
            )}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="container mx-auto px-4 py-2 pb-4 bg-white">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className={cn(
                    "py-2 font-medium transition-colors hover:text-red-600",
                    pathname === item.path ? "text-red-600" : "text-black",
                  )}
                >
                  {item.name}
                </Link>
              ))}

              {/* Auth Buttons (Mobile) */}
              <div className="pt-2 border-t">
                {user ? (
                  <>
                    <div className="flex items-center gap-2 py-2">
                      <User className="h-4 w-4" />
                      <span className="font-medium">{user.name}</span>
                    </div>
                    <Link href="/profile" className="block py-2 text-sm hover:text-red-600">
                      Profile
                    </Link>
                    <Link href="/bookings" className="block py-2 text-sm hover:text-red-600">
                      My Bookings
                    </Link>
                    <button onClick={signOut} className="flex items-center gap-2 py-2 text-sm text-red-600">
                      <LogOut className="h-4 w-4" />
                      Sign Out
                    </button>
                  </>
                ) : (
                  <div className="flex flex-col gap-2 pt-2">
                    <Button
                      variant="outline"
                      className="w-full justify-center"
                      onClick={() => {
                        setIsMenuOpen(false)
                        document.querySelector<HTMLButtonElement>('[data-dialog-trigger="signin"]')?.click()
                      }}
                    >
                      Sign In
                    </Button>
                    <Button
                      className="w-full justify-center bg-red-600 hover:bg-red-700"
                      onClick={() => {
                        setIsMenuOpen(false)
                        document.querySelector<HTMLButtonElement>('[data-dialog-trigger="signup"]')?.click()
                      }}
                    >
                      Sign Up
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

