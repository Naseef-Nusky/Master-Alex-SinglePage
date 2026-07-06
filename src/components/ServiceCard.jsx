export default function ServiceCard({ service, className = '' }) {
  return (
    <article
      className={`group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:border-master-gold/30 hover:shadow-md ${className}`}
    >
      <div className="relative h-64 w-full shrink-0 overflow-hidden bg-master-surface">
        <img
          src={service.image}
          alt={service.title}
          className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold text-master-purple">{service.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-master-muted">{service.description}</p>
        <a
          href="#book"
          className="mt-4 inline-flex items-center justify-center rounded-xl bg-master-purple px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-master-purple-light"
        >
          Book Session
        </a>
      </div>
    </article>
  )
}
