export default function Footer() {
  return (
    <footer className="border-t border-rim py-8 px-6 md:px-12 lg:px-20">
      <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-heading text-xs text-muted">
          © {new Date().getFullYear()} Victor Velazquez. Hopkinton, MA.
        </p>
        <p className="font-heading text-xs text-muted">
          Growth Marketer · Marathon Runner · Builder
        </p>
      </div>
    </footer>
  )
}
