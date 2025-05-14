export function MicroInteractionsPreview() {
  return (
    <div className="mx-auto w-full max-w-md rounded-xl border border-stone-800 bg-stone-900 p-8">
      <h2 className="mb-6 text-center text-xl font-semibold text-white">Micro Interactions</h2>

      <div className="space-y-6">
        <div className="rounded-lg border border-stone-700 p-4 transition-colors hover:border-white">
          <h3 className="mb-2 flex items-center font-medium text-white">
            <span className="mr-2 inline-block h-4 w-4 rounded-full bg-stone-700 transition-colors group-hover:bg-stone-500"></span>
            Hover Effect
          </h3>
          <p className="text-sm text-stone-300">
            Hover over this card to see a subtle border color change.
          </p>
        </div>

        <div className="group rounded-lg border border-stone-700 p-4">
          <h3 className="mb-2 flex items-center font-medium text-white">
            <span className="mr-2 inline-block h-4 w-4 rounded-full bg-stone-700 transition-colors group-hover:bg-stone-500"></span>
            Group Hover
          </h3>
          <p className="text-sm text-stone-300">
            The dot changes color when you hover over this entire card.
          </p>
        </div>

        <div className="rounded-lg border border-stone-700 p-4">
          <h3 className="mb-2 font-medium text-white">Button Interactions</h3>
          <p className="mb-4 text-sm text-stone-300">Click the button to see the interaction.</p>
          <button className="w-full rounded-lg border border-stone-700 bg-stone-800 py-2 text-white transition-all hover:bg-stone-700 active:scale-95">
            Click Me
          </button>
        </div>

        <div className="rounded-lg border border-stone-700 p-4">
          <h3 className="mb-2 font-medium text-white">Input Focus</h3>
          <p className="mb-4 text-sm text-stone-300">Click the input to see the focus effect.</p>
          <input
            type="text"
            placeholder="Type something..."
            className="w-full rounded-lg border border-stone-700 bg-stone-800 p-2 text-white transition-all outline-none focus:border-stone-500 focus:ring-2 focus:ring-stone-600"
          />
        </div>
      </div>
    </div>
  )
}
