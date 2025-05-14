export function GlassmorphismPreview() {
  return (
    <div className="mx-auto w-full max-w-3xl rounded-xl bg-gradient-to-br from-stone-800 to-stone-900 p-8">
      <div className="relative rounded-xl border border-white/20 bg-white/10 p-6 shadow-lg backdrop-blur-md">
        <div className="absolute top-10 left-10 -z-10 h-32 w-32 rounded-full bg-stone-400 opacity-20 blur-xl"></div>
        <div className="absolute right-10 bottom-10 -z-10 h-40 w-40 rounded-full bg-stone-500 opacity-20 blur-xl"></div>

        <h2 className="mb-4 text-xl font-semibold text-white">Glassmorphism Card</h2>
        <p className="mb-6 text-stone-300">
          A modern UI card with glass effect using backdrop blur and transparency.
        </p>

        <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-md">
            <h3 className="mb-2 font-medium text-white">Feature One</h3>
            <p className="text-sm text-stone-300">
              Description of the first feature with glass effect styling.
            </p>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-md">
            <h3 className="mb-2 font-medium text-white">Feature Two</h3>
            <p className="text-sm text-stone-300">
              Description of the second feature with glass effect styling.
            </p>
          </div>
        </div>

        <div className="flex justify-end">
          <button className="rounded-lg border border-white/10 bg-white/10 px-4 py-2 text-white backdrop-blur-md transition-colors hover:bg-white/20">
            Learn More
          </button>
        </div>
      </div>
    </div>
  )
}
