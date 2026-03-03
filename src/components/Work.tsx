const jobs = [
  {
    company: 'NuvoAir Medical',
    role: 'Senior Growth Marketing Manager',
    period: '2024 — 2025',
    highlight: '+38% QoQ',
    bullets: [
      'Drove 38% QoQ growth in new business and patient leads',
      'Automated HubSpot campaigns, boosting engagement 30% and lead connections 62% QoQ',
      'Leveraged AI tools to improve content personalization and efficiency by 25%',
      'Managed brand identity overhaul including full website redesign',
    ],
    current: false,
  },
  {
    company: 'Help Scout',
    role: 'Growth Marketing Strategist',
    period: '2022 — 2024',
    highlight: '68% → 94%',
    bullets: [
      'Increased opportunity conversion rates from 68% to 94%',
      'ABM campaigns targeting key accounts drove 40% pipeline increase',
      '200% growth in lead acquisition through scaled paid marketing',
    ],
    current: false,
  },
  {
    company: 'ProfitWell (Paddle)',
    role: 'Growth Marketer',
    period: '2019 — 2022',
    highlight: '$200M exit',
    bullets: [
      'Pivotal role in $200M acquisition by Paddle through innovative campaigns and automation',
      'Led ABM experiments driving 137% increase in sales opportunities',
      'Reduced acquisition costs by 20% through tech stack optimization',
      'Multi-touchpoint campaigns achieving consistent 18–20% conversion rates',
    ],
    current: false,
  },
  {
    company: 'DeFrame',
    role: 'Co-Founder',
    period: '2016 — 2019',
    highlight: 'AI + Art',
    bullets: [
      'Co-led AI startup connecting art museums with visitors via indoor navigation',
      'Secured international museum partnerships, earned industry innovation awards',
      'Built and led a cross-functional team of 10 across product, marketing, and strategy',
    ],
    current: false,
  },
]

export default function Work() {
  return (
    <section id="work" className="py-32 px-6 md:px-12 lg:px-20 border-t border-rim">
      <div className="max-w-[1400px] mx-auto">
        <p className="font-heading text-xs text-muted tracking-[0.3em] uppercase mb-4">
          02 / Experience
        </p>
        <h2
          className="font-display text-fg mb-20"
          style={{ fontSize: 'clamp(3.5rem, 8vw, 6rem)' }}
        >
          WORK
        </h2>

        <div>
          {jobs.map((job) => (
            <div
              key={job.company}
              className="group border-t border-rim py-10 grid grid-cols-1 md:grid-cols-[220px_1fr] gap-8 hover:bg-surface transition-colors duration-300 -mx-6 px-6 md:-mx-12 md:px-12 lg:-mx-20 lg:px-20"
            >
              {/* Left */}
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-2 mb-1">
                  {job.current && (
                    <span className="w-2 h-2 rounded-full bg-accent animate-pulse flex-shrink-0" />
                  )}
                  <h3 className="font-heading font-semibold text-fg text-base">{job.company}</h3>
                </div>
                <p className="font-heading text-muted text-sm">{job.role}</p>
                <p className="font-heading text-muted text-xs tracking-wider">{job.period}</p>
                <span
                  className="mt-3 font-display text-accent"
                  style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)' }}
                >
                  {job.highlight}
                </span>
              </div>

              {/* Right */}
              <div className="flex flex-col justify-center">
                <ul className="space-y-3">
                  {job.bullets.map((bullet) => (
                    <li key={bullet} className="font-body text-fg/70 text-base flex gap-3">
                      <span className="text-accent mt-1.5 flex-shrink-0 text-[10px]">▸</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
          <div className="border-t border-rim" />
        </div>
      </div>
    </section>
  )
}
