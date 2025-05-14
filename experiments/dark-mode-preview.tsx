export function DarkModePreview() {
  return (
    <div className="mx-auto w-full max-w-4xl rounded-xl bg-stone-950 p-8 text-stone-100">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-xl font-semibold">Dark Mode Patterns</h2>
        <button className="rounded-lg border border-stone-700 bg-stone-800 px-4 py-2 text-stone-100 transition-colors hover:bg-stone-700">
          Toggle Theme
        </button>
      </div>

      <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="rounded-lg border border-stone-800 bg-stone-900 p-6">
          <h3 className="mb-4 font-medium text-stone-100">Content Card</h3>
          <p className="mb-4 text-stone-300">
            Dark mode interfaces use reduced brightness to minimize eye strain in low-light
            environments.
          </p>
          <div className="flex justify-between">
            <span className="text-sm text-stone-400">Last updated: Today</span>
            <button className="text-stone-300 transition-colors hover:text-stone-100">
              Read more
            </button>
          </div>
        </div>

        <div className="rounded-lg border border-stone-800 bg-stone-900 p-6">
          <h3 className="mb-4 font-medium text-stone-100">Color Contrast</h3>
          <p className="mb-4 text-stone-300">
            Proper contrast ratios are essential for readability in dark mode interfaces.
          </p>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-stone-300">Primary Text</span>
              <span className="rounded bg-stone-800 px-2 py-1 text-sm text-stone-100">#f5f5f4</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-stone-300">Secondary Text</span>
              <span className="rounded bg-stone-800 px-2 py-1 text-sm text-stone-100">#d6d3d1</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-stone-300">Background</span>
              <span className="rounded bg-stone-800 px-2 py-1 text-sm text-stone-100">#0c0a09</span>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-lg border border-stone-800 bg-stone-900 p-6">
        <h3 className="mb-4 font-medium text-stone-100">Form Elements</h3>
        <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm text-stone-300">Username</label>
            <input
              type="text"
              className="w-full rounded-lg border border-stone-700 bg-stone-800 p-2 text-stone-100 outline-none focus:border-stone-600 focus:ring-2 focus:ring-stone-600"
              placeholder="Enter username"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm text-stone-300">Password</label>
            <input
              type="password"
              className="w-full rounded-lg border border-stone-700 bg-stone-800 p-2 text-stone-100 outline-none focus:border-stone-600 focus:ring-2 focus:ring-stone-600"
              placeholder="Enter password"
            />
          </div>
        </div>
        <button className="w-full rounded-lg bg-stone-800 py-2 text-stone-100 transition-colors hover:bg-stone-700">
          Sign In
        </button>
      </div>
    </div>
  )
}
