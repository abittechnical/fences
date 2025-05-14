'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="bg-page min-h-screen font-sans antialiased">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-12 gap-3 md:gap-4">
          {/* Header/Logo Area */}
          <div className="col-span-12 flex items-center md:col-span-3">
            <div className="flex flex-col">
              {/* FIXME: maybe use logo? */}
              <div className="bg-accent-soft ring-accent-bold text-accent-9 mb-4 flex h-10 w-10 items-center justify-center rounded-full ring">
                <span className="text-xl font-bold">UI</span>
              </div>
              <div className="text-cnt-secondary mb-1 text-xs tracking-wider uppercase">
                Collection of designs
              </div>
              <h1 className="mb-4 text-3xl font-bold md:text-4xl">
                UI Experiments
                <br />
                Collection
              </h1>
              <p className="text-cnt-secondary mb-6 text-sm md:text-base">
                A showcase of innovative UI experiments and design patterns for modern interfaces.
              </p>
              <div className="mb-4 border-b border-stone-800 pb-4">
                <a
                  href="mailto:hello@uiexperiments.design"
                  className="text-white transition-colors hover:text-stone-300"
                >
                  hello@uiexperiments.design
                </a>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full border">
                <span className="sr-only">Scroll</span>
                <div className="bg-white-a12 h-1 w-1 animate-pulse rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Main Grid Layout */}
          <div className="col-span-12 grid grid-cols-12 gap-3 md:col-span-9 md:gap-4">
            {/* Glassmorphism UI - 01 */}
            <Link href="/examples/glassmorphism-ui" className="group col-span-6 md:col-span-4">
              <div className="bg-main ring-brd-line relative h-full overflow-hidden rounded-xl p-6 ring">
                <div className="text-gray-a10 absolute top-4 right-4 font-mono text-9xl font-bold select-none">
                  1
                </div>
                <div className="relative z-10 flex h-full flex-col justify-between">
                  <div>
                    <p className="text-cnt-secondary text-sm/6">
                      Modern glass
                      <br />
                      effect UI.
                    </p>
                    <h2 className="font-display mt-2 text-xl font-bold">Glassmorphism UI</h2>
                  </div>
                  <div className="mt-4 opacity-0 transition-opacity group-hover:opacity-100">
                    <span className="flex items-center gap-1 text-sm text-white transition-all hover:gap-2">
                      View experiment <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Neumorphic Design - Hero Image - Spans 2 rows */}
            <Link
              href="/examples/neumorphic-design"
              className="group col-span-6 row-span-2 md:col-span-8"
            >
              <div className="bg-main ring-brd-line relative h-full overflow-hidden rounded-xl ring">
                <div className="to-black-a5 absolute inset-0 z-10 bg-gradient-to-br from-transparent"></div>
                <div className="absolute bottom-6 left-6 z-20">
                  <p className="text-cnt-tertiary text-sm">Featured experiment</p>
                  <h2 className="font-display mt-1 text-2xl font-bold">Neumorphic Design</h2>
                </div>
                <div className="text-gray-a10 absolute top-6 right-6 z-10 font-mono text-9xl font-bold select-none">
                  2
                </div>
                <div className="absolute inset-0 bg-[url('/abstract-geometric-pattern.png')] bg-cover bg-center opacity-70 transition-transform duration-700 group-hover:scale-105"></div>
              </div>
            </Link>

            {/* Brutalist Web Design - 03 */}
            <Link href="/examples/brutalist-web-design" className="group col-span-6 md:col-span-4">
              <div className="bg-main ring-brd-line relative h-full overflow-hidden rounded-xl p-6 ring">
                <div className="text-gray-a10 absolute top-4 right-4 font-mono text-9xl font-bold select-none">
                  3
                </div>
                <div className="relative z-10 flex h-full flex-col justify-between">
                  <div>
                    <p className="text-cnt-secondary">
                      Raw, bold
                      <br />
                      interfaces.
                    </p>
                    <h2 className="font-display mt-2 text-xl font-bold">Brutalist Design</h2>
                  </div>
                  <div className="mt-4 opacity-0 transition-opacity group-hover:opacity-100">
                    <span className="flex items-center gap-1 text-sm text-white transition-all hover:gap-2">
                      View experiment <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Micro Interactions - 04 */}
            <Link href="/examples/micro-interactions" className="group col-span-6 md:col-span-4">
              <div className="bg-main ring-brd-line relative h-full overflow-hidden rounded-xl p-6 ring">
                <div className="text-gray-a10 absolute top-4 right-4 font-mono text-9xl font-bold select-none">
                  4
                </div>
                <div className="relative z-10 flex h-full flex-col justify-between">
                  <div>
                    <p className="text-cnt-secondary">
                      Subtle
                      <br />
                      animations.
                    </p>
                    <h2 className="font-display mt-2 text-xl font-bold">Micro Interactions</h2>
                  </div>
                  <div className="mt-4 opacity-0 transition-opacity group-hover:opacity-100">
                    <span className="flex items-center gap-1 text-sm text-white transition-all hover:gap-2">
                      View experiment <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Dark Mode Patterns - Large Image Card - 05 */}
            <Link href="/examples/dark-mode-patterns" className="group col-span-6 md:col-span-8">
              <div className="bg-main ring-brd-line relative h-full overflow-hidden rounded-xl ring">
                <div className="absolute inset-0 z-10 bg-gradient-to-br from-transparent to-black/30"></div>
                <div className="absolute bottom-6 left-6 z-20">
                  <p className="text-cnt-tertiary text-sm">Popular experiment</p>
                  <h2 className="font-display mt-1 text-2xl font-bold">Dark Mode Patterns</h2>
                </div>
                <div className="text-gray-a10 absolute top-6 right-6 z-10 font-mono text-9xl font-bold select-none">
                  5
                </div>
                <div className="absolute inset-0 bg-[url('/dark-mode-bg.png')] bg-cover bg-center opacity-40 transition-transform duration-700 group-hover:scale-105"></div>
              </div>
            </Link>

            {/* New Experiment - 06 */}
            <Link href="/admin/dashboard" className="group col-span-6 md:col-span-4">
              <div className="bg-main ring-brd-line relative h-full overflow-hidden rounded-xl p-6 ring">
                <div className="text-gray-a10 absolute top-4 right-4 font-mono text-9xl font-bold select-none">
                  6
                </div>
                <div className="relative z-10 flex h-full flex-col justify-between">
                  <div>
                    <p className="text-cnt-secondary">
                      Create your
                      <br />
                      own design.
                    </p>
                    <h2 className="font-display mt-2 text-xl font-bold">New Experiment</h2>
                  </div>
                  <div className="mt-4 opacity-0 transition-opacity group-hover:opacity-100">
                    <span className="flex items-center gap-1 text-sm text-white transition-all hover:gap-2">
                      Start creating <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>

            {/* All Experiments - 07 */}
            <Link href="/admin/dashboard" className="group col-span-12 md:col-span-8">
              <div className="bg-main ring-brd-line relative h-full overflow-hidden rounded-xl ring">
                <div className="absolute inset-0 z-10 bg-gradient-to-br from-transparent to-black/30"></div>
                <div className="absolute bottom-6 left-6 z-20">
                  <p className="text-cnt-tertiary text-sm">Browse the collection</p>
                  <h2 className="font-display mt-1 text-2xl font-bold">All Experiments</h2>
                </div>
                <div className="text-gray-a10 absolute top-6 right-6 z-10 font-mono text-9xl font-bold select-none">
                  7
                </div>
                <div className="absolute inset-0 bg-[url('/collection-bg.png')] bg-cover bg-center opacity-40 transition-transform duration-700 group-hover:scale-105"></div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-12 border-t border-stone-800 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="mb-4 md:mb-0">
              <p className="text-cnt-secondary text-sm">
                © 2025 UI Experiments. All rights reserved.
              </p>
            </div>
            <div className="flex gap-6">
              <Link
                href="/admin/dashboard"
                className="text-cnt-secondary text-sm transition-colors hover:text-white"
              >
                Admin
              </Link>
              <a href="#" className="text-cnt-secondary text-sm transition-colors hover:text-white">
                Twitter
              </a>
              <a href="#" className="text-cnt-secondary text-sm transition-colors hover:text-white">
                Instagram
              </a>
              <a href="#" className="text-cnt-secondary text-sm transition-colors hover:text-white">
                Dribbble
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
