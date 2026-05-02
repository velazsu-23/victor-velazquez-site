export default function About() {
  return (
    <section id="about" className="py-32 px-6 md:px-12 lg:px-20">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-24">

          {/* Left: Statement */}
          <div>
            <p className="font-heading text-xs text-muted tracking-[0.3em] uppercase mb-8">
              01 / About
            </p>
            <h2
              className="font-display text-fg leading-[0.9]"
              style={{ fontSize: 'clamp(4rem, 8vw, 7rem)' }}
            >
              BUILDER.<br />
              <span className="text-outline text-fg">RUNNER.</span><br />
              MAKER.
            </h2>
          </div>

          {/* Right: Bio */}
          <div className="flex flex-col justify-center gap-6">
            <p className="font-body text-fg/80 text-lg leading-relaxed">
              Six years building scalable growth systems for SaaS companies. I co-founded{' '}
              <span className="text-fg font-medium">DeFrame</span>, an AI startup for art museums,
              then drove growth at ProfitWell through its{' '}
              <span className="text-accent font-medium">$200M acquisition by Paddle</span>. Most
              recently stepped into the Director of Growth role at{' '}
              <span className="text-fg font-medium">AWeber</span>. Also a TEDx speaker recognized for
              leadership and creativity.
            </p>
            <p className="font-body text-fg/80 text-lg leading-relaxed">
              The kind of person who builds things rather than just uses them.
            </p>

            {/* Quick facts */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-6 pt-8 mt-2 border-t border-rim">
              <div>
                <p className="font-heading text-xs text-muted tracking-wider uppercase mb-2">Espresso</p>
                <p className="font-heading text-sm text-fg">Profitec Drive</p>
                <p className="font-heading text-sm text-muted">E64 WS Grinder</p>
              </div>
              <div>
                <p className="font-heading text-xs text-muted tracking-wider uppercase mb-2">Vinyl</p>
                <p className="font-heading text-sm text-fg">AT-LP70x / AT-VMN95ML</p>
                <p className="font-heading text-sm text-muted">iFi Zen Air Phono</p>
                <p className="font-heading text-sm text-muted">Klipsch The Sevens</p>
              </div>
              <div>
                <p className="font-heading text-xs text-muted tracking-wider uppercase mb-2">Based in</p>
                <p className="font-heading text-sm text-fg">Hopkinton, MA</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
