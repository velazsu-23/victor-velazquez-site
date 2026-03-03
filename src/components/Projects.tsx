export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 md:px-12 lg:px-20 border-t border-rim">
      <div className="max-w-[1400px] mx-auto">
        <p className="font-heading text-xs text-muted tracking-[0.3em] uppercase mb-4">
          03 / Projects
        </p>
        <h2
          className="font-display text-fg mb-20"
          style={{ fontSize: 'clamp(3.5rem, 8vw, 6rem)' }}
        >
          BUILT
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-rim">
          {/* DeFrame — Featured */}
          <a
            href="https://deframeart.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="lg:col-span-2 group bg-surface p-10 hover:bg-[#1a1a1a] transition-all duration-300 flex flex-col justify-between min-h-80"
          >
            <div className="flex items-start justify-between">
              <div>
                <span className="font-heading text-xs text-accent tracking-widest uppercase">
                  Featured Project
                </span>
                <h3
                  className="font-display text-fg mt-2"
                  style={{ fontSize: 'clamp(3rem, 6vw, 5rem)' }}
                >
                  DEFRAME
                </h3>
              </div>
              <span className="font-heading text-muted text-xl mt-1 group-hover:text-fg group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300">
                ↗
              </span>
            </div>

            <div className="mt-8">
              <p className="font-body text-fg/70 text-base leading-relaxed mb-6">
                An AI-powered SaaS platform connecting art museums with visitors through indoor
                navigation and intelligent exhibit discovery. Co-founded with a team of 10, secured
                international museum partnerships, and earned industry awards for innovation.
              </p>
              <div className="flex flex-wrap gap-2">
                {['AI', 'SaaS', 'Indoor Navigation', 'Industry Awards', '2016–2019'].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="font-heading text-xs text-muted border border-rim px-3 py-1"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>
          </a>

          {/* Blog — Coming Soon */}
          <div className="bg-surface p-10 flex flex-col justify-between min-h-80">
            <div>
              <span className="font-heading text-xs text-muted tracking-widest uppercase">
                Coming Soon
              </span>
              <h3
                className="font-display text-fg mt-2"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
              >
                BLOG
              </h3>
            </div>
            <div>
              <p className="font-body text-fg/50 text-base leading-relaxed mb-6">
                Thoughts on growth marketing, marathon running, and building things worth building.
              </p>
              <div className="h-px w-full bg-rim" />
              <p className="font-heading text-xs text-muted mt-4 tracking-wider">
                Growth · Running · Startups
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
