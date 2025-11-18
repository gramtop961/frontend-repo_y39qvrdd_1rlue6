import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import GradientButton from './GradientButton'

export default function Navbar() {
  const navLinkClass = ({ isActive }) =>
    `px-3 py-2 text-sm font-medium transition-colors ${isActive ? 'text-[#007BFF]' : 'text-slate-700 hover:text-[#007BFF]'} `

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#007BFF] to-[#00C6FF]">
            LeadPointAI
          </Link>

          {/* Center Nav */}
          <nav className="hidden md:flex items-center gap-1">
            <NavLink to="/" className={navLinkClass}>Home</NavLink>
            <NavLink to="/services" className={navLinkClass}>Services</NavLink>
            <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
          </nav>

          {/* Right CTA */}
          <GradientButton as="a" href="#contact" className="hidden sm:inline-flex">
            Book Free Strategy Call
          </GradientButton>
        </div>
      </div>
    </header>
  )
}
