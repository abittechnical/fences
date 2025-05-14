export function NeumorphicPreview() {
  return (
    <div className="mx-auto w-full max-w-md rounded-xl bg-stone-800 p-8">
      <div className="rounded-xl bg-stone-800 p-6 shadow-[8px_8px_16px_#1c1917,-8px_-8px_16px_#292524]">
        <h2 className="mb-4 text-xl font-semibold text-white">Neumorphic Widget</h2>
        <p className="mb-6 text-stone-300">
          A soft UI widget with subtle shadows creating a pressed effect.
        </p>

        <div className="mb-6 space-y-4">
          <div className="rounded-lg bg-stone-800 p-4 shadow-[inset_4px_4px_8px_#1c1917,inset_-4px_-4px_8px_#292524]">
            <h3 className="mb-2 font-medium text-white">Pressed Element</h3>
            <p className="text-sm text-stone-300">This element appears pressed into the surface.</p>
          </div>
          <div className="rounded-lg bg-stone-800 p-4 shadow-[4px_4px_8px_#1c1917,-4px_-4px_8px_#292524]">
            <h3 className="mb-2 font-medium text-white">Raised Element</h3>
            <p className="text-sm text-stone-300">This element appears raised from the surface.</p>
          </div>
        </div>

        <div className="flex justify-center">
          <button className="rounded-full bg-stone-800 px-6 py-3 text-white shadow-[4px_4px_8px_#1c1917,-4px_-4px_8px_#292524] transition-all hover:shadow-[2px_2px_4px_#1c1917,-2px_-2px_4px_#292524] active:shadow-[inset_4px_4px_8px_#1c1917,inset_-4px_-4px_8px_#292524]">
            Click Me
          </button>
        </div>
      </div>
    </div>
  )
}
