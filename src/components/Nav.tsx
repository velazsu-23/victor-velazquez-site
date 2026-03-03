'use client'

import { useEffect, useState } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Running', href: '#running' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-bg/90 backdrop-blur-md border-b border-rim' : ''
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        <a href="#top" className="font-display text-2xl text-fg tracking-widest">
          VV
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="font-heading text-sm text-muted hover:text-fg transition-colors tracking-wider"
            >
              {label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a
            href="mailto:velazsu@gmail.com"
            className="hidden md:inline-flex font-heading text-sm border border-accent text-accent px-4 py-2 hover:bg-accent hover:text-bg transition-all duration-200"
          >
            Say Hello
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-px bg-fg transition-all duration-300 ${menuOpen ? 'translate-y-2.5 rotate-45' : ''}`}
            />
            <span
              className={`block w-6 h-px bg-fg transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`block w-6 h-px bg-fg transition-all duration-300 ${menuOpen ? '-translate-y-2.5 -rotate-45' : ''}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-bg/95 backdrop-blur-md border-b border-rim px-6 pb-6">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="block font-heading text-sm text-muted hover:text-fg transition-colors py-3 border-b border-rim tracking-wider"
            >
              {label}
            </a>
          ))}
          <a
            href="mailto:velazsu@gmail.com"
            className="mt-4 inline-block font-heading text-sm border border-accent text-accent px-4 py-2 hover:bg-accent hover:text-bg transition-all duration-200"
          >
            Say Hello
          </a>
        </div>
      )}
    </nav>
  )
}
