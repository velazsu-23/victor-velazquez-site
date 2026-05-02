export default function Hero() {
  return (
    <section
      id="top"
      className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-20 pt-20 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto w-full">
        {/* Eyebrow */}
        <p
          className="font-heading text-muted text-xs tracking-[0.3em] uppercase mb-10"
          style={{ animation: 'fadeIn 0.6s ease-out 0.2s both' }}
        >
          Growth Marketer · TEDx Speaker · Marathon Runner
        </p>

        {/* Name */}
        <h1 className="font-display leading-[0.88] tracking-tight">
          <span
            className="block text-fg"
            style={{
              fontSize: 'clamp(5rem, 15vw, 16rem)',
              animation: 'slideUp 0.7s ease-out 0.3s both',
            }}
          >
            VICTOR
          </span>
          <span
            className="block text-outline text-fg"
            style={{
              fontSize: 'clamp(5rem, 15vw, 16rem)',
              animation: 'slideUp 0.7s ease-out 0.45s both',
            }}
          >
            VELAZQUEZ
          </span>
        </h1>

        {/* Current role */}
        <div
          className="mt-10 flex flex-col sm:flex-row sm:items-center gap-3"
          style={{ animation: 'fadeIn 0.6s ease-out 0.7s both' }}
        >
          <div className="flex items-center gap-3">
            <div className="h-px w-10 bg-accent flex-shrink-0" />
            <span className="font-heading text-base text-fg/70">
              Director of Growth · AWeber
            </span>
          </div>
          <span className="hidden sm:block text-muted">·</span>
          <span className="font-heading text-base text-muted">Hopkinton, MA</span>
        </div>

        {/* Links */}
        <div
          className="mt-10 flex flex-wrap items-center gap-6"
          style={{ animation: 'fadeIn 0.6s ease-out 0.85s both' }}
        >
          {[
            { label: 'GitHub', href: 'https://github.com/velazsu-23' },
            { label: 'LinkedIn', href: 'https://www.linkedin.com/in/victorvelazquez23/' },
            { label: 'Instagram', href: 'https://instagram.com/victor.v23' },
            { label: 'Strava', href: 'https://strava.app.link/QCOJmCEsd1b' },
            { label: 'DeFrame', href: 'https://deframeart.com/' },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-heading text-sm text-muted hover:text-fg transition-colors flex items-center gap-2 group"
            >
              <span className="group-hover:translate-x-0.5 transition-transform">→</span>
              {label}
            </a>
          ))}
        </div>

        {/* Scroll indicator */}
        <div
          className="mt-24 flex items-center gap-4"
          style={{ animation: 'fadeIn 0.6s ease-out 1.1s both' }}
        >
          <div className="w-px h-14 bg-gradient-to-b from-transparent via-muted to-transparent opacity-40" />
          <span className="font-heading text-xs text-muted tracking-[0.2em] uppercase">Scroll</span>
        </div>
      </div>
    </section>
  )
}
