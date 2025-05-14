export function BrutalistPreview() {
  return (
    <div className="mx-auto w-full max-w-4xl rounded-none border-4 border-white bg-stone-900">
      <header className="flex items-center justify-between bg-white p-4 text-black">
        <h1 className="text-2xl font-bold uppercase">BRUTALIST DESIGN</h1>
        <div className="flex gap-2">
          <div className="h-6 w-6 bg-black"></div>
          <div className="h-6 w-6 bg-black"></div>
          <div className="h-6 w-6 bg-black"></div>
        </div>
      </header>

      <main className="p-6">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 border-4 border-white bg-stone-900 p-4 md:col-span-8">
            <h2 className="mb-4 inline-block bg-white p-2 text-xl font-bold text-black uppercase">
              MAIN CONTENT
            </h2>
            <p className="mb-4 font-mono text-white">
              Raw, bold interfaces with unconventional layouts and typography.
            </p>

            <div className="mb-4 grid grid-cols-2 gap-4">
              <div className="border-4 border-white bg-stone-800 p-4">
                <h3 className="font-bold text-white uppercase">SECTION ONE</h3>
                <p className="font-mono text-sm text-stone-300">
                  Brutalist design embraces raw materials and bold structures.
                </p>
              </div>
              <div className="border-4 border-white bg-stone-800 p-4">
                <h3 className="font-bold text-white uppercase">SECTION TWO</h3>
                <p className="font-mono text-sm text-stone-300">
                  Functionality over aesthetics, with minimal decoration.
                </p>
              </div>
            </div>

            <button className="border-4 border-white bg-white px-6 py-3 font-bold text-black uppercase transition-colors hover:bg-stone-900 hover:text-white">
              CLICK HERE
            </button>
          </div>

          <div className="col-span-12 space-y-4 md:col-span-4">
            <div className="border-4 border-white bg-stone-800 p-4">
              <h3 className="mb-2 font-bold text-white uppercase">SIDEBAR</h3>
              <ul className="space-y-2 font-mono text-stone-300">
                <li className="border-b-2 border-white pb-1">ITEM ONE</li>
                <li className="border-b-2 border-white pb-1">ITEM TWO</li>
                <li className="border-b-2 border-white pb-1">ITEM THREE</li>
                <li>ITEM FOUR</li>
              </ul>
            </div>

            <div className="border-4 border-white bg-stone-800 p-4">
              <h3 className="mb-2 font-bold text-white uppercase">CONTACT</h3>
              <p className="mb-2 font-mono text-sm text-stone-300">Get in touch with us today.</p>
              <input
                type="text"
                className="mb-2 w-full border-4 border-white bg-stone-900 p-2 font-mono text-white"
                placeholder="EMAIL"
              />
              <button className="w-full bg-white p-2 font-bold text-black uppercase">SUBMIT</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
