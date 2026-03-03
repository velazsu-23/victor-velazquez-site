import React from 'react'

const links = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/victorvelazquez23/' },
  { label: 'Instagram', href: 'https://instagram.com/victor.v23' },
  { label: 'GitHub', href: 'https://github.com/velazsu-23' },
  { label: 'DeFrame', href: 'https://deframeart.com/' },
]

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 md:px-12 lg:px-20 border-t border-rim">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

          {/* Left */}
          <div>
            <p className="font-heading text-xs text-muted tracking-[0.3em] uppercase mb-6">
              05 / Contact
            </p>
            <h2
              className="font-display text-fg leading-[0.88]"
              style={{ fontSize: 'clamp(4rem, 9vw, 8rem)' }}
            >
              LET&apos;S<br />
              BUILD<br />
              <span className="text-outline text-fg">SOMETHING.</span>
            </h2>
          </div>

          {/* Right */}
          <div className="flex flex-col justify-center gap-8">
            <p className="font-body text-fg/70 text-lg leading-relaxed">
              I&apos;m always open to interesting conversations — whether that&apos;s a growth
              challenge, a new project, a race recommendation, or just great espresso.
            </p>

            <a
              href="mailto:velazsu@gmail.com"
              className="group inline-flex items-center justify-between font-heading text-lg text-fg border-b border-muted/30 pb-4 hover:border-accent transition-all duration-300"
            >
              velazsu@gmail.com
              <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
            </a>

            <div className="flex items-center gap-6 pt-2">
              {links.map(({ label, href }, i) => (
                <React.Fragment key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-heading text-sm text-muted hover:text-fg transition-colors"
                  >
                    {label}
                  </a>
                  {i < links.length - 1 && (
                    <span className="text-muted/30">·</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
