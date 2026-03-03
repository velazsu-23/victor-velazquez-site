import RunnerGame from './RunnerGame'

const stats = [
  { value: '2:44', label: 'Personal Record' },
  { value: '4×', label: 'Boston Finishes' },
  { value: '3 of 6', label: 'Majors Complete' },
  { value: '<2:40', label: 'The Goal' },
]

const majors = [
  { name: 'BOSTON', done: true, note: '4× finisher' },
  { name: 'BERLIN', done: true, note: 'Finisher' },
  { name: 'CHICAGO', done: true, note: 'Finisher' },
  { name: 'TOKYO', done: false, note: 'Upcoming' },
  { name: 'LONDON', done: false, note: 'Upcoming' },
  { name: 'NEW YORK', done: false, note: 'Upcoming' },
]

export default function Running() {
  return (
    <section id="running" className="py-32 px-6 md:px-12 lg:px-20 border-t border-rim bg-surface">
      <div className="max-w-[1400px] mx-auto">
        <p className="font-heading text-xs text-muted tracking-[0.3em] uppercase mb-4">
          04 / Running
        </p>

        <div className="mb-20">
          <h2
            className="font-display text-fg leading-[0.9]"
            style={{ fontSize: 'clamp(3.5rem, 8vw, 6rem)' }}
          >
            MILES &<br />
            <span className="text-outline text-fg">MILESTONES</span>
          </h2>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-rim mb-16">
          {stats.map(({ value, label }) => (
            <div key={label} className="bg-bg p-6 md:p-8">
              <div
                className="font-display text-accent"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
              >
                {value}
              </div>
              <div className="font-heading text-xs text-muted mt-2 tracking-wider uppercase">
                {label}
              </div>
            </div>
          ))}
        </div>

        {/* World Marathon Majors */}
        <div>
          <h3 className="font-heading text-xs text-muted tracking-[0.3em] uppercase mb-6">
            World Marathon Majors — {majors.filter((m) => m.done).length} of {majors.length} Complete
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-6 gap-px bg-rim">
            {majors.map(({ name, done, note }) => (
              <div
                key={name}
                className={`p-6 flex flex-col justify-between min-h-36 ${
                  done ? 'bg-accent' : 'bg-bg'
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <span
                    className={`font-display leading-tight ${done ? 'text-bg' : 'text-fg'}`}
                    style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)' }}
                  >
                    {name}
                  </span>
                  {done && (
                    <span className="text-bg text-base font-bold flex-shrink-0">✓</span>
                  )}
                </div>
                <span
                  className={`font-heading text-xs tracking-wider ${
                    done ? 'text-bg/70' : 'text-muted'
                  }`}
                >
                  {note}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Brands + Strava */}
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-px w-10 bg-muted/30 flex-shrink-0" />
            <p className="font-heading text-sm text-muted">
              Represented{' '}
              <span className="text-fg">Tracksmith</span>
              {' & '}
              <span className="text-fg">Ciele</span>
            </p>
          </div>
          <a
            href="https://strava.app.link/QCOJmCEsd1b"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 font-heading text-sm text-muted hover:text-accent transition-colors duration-300"
          >
            <span>Follow on Strava</span>
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </a>
        </div>

        {/* Mini game */}
        <div className="mt-20">
          <p className="font-heading text-xs text-muted tracking-[0.3em] uppercase mb-4">
            Take a break
          </p>
          <div className="border border-rim overflow-hidden">
            <RunnerGame />
          </div>
        </div>
      </div>
    </section>
  )
}
