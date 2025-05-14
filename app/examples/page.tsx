'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function HomePage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-black font-sans text-white antialiased">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-12 gap-3 md:gap-4">
          {/* Header/Logo Area */}
          <div className="col-span-12 flex items-center md:col-span-3">
            <div className="flex flex-col">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-white">
                <span className="text-xl font-bold text-black">UI</span>
              </div>
              <div className="mb-1 text-xs tracking-wider text-stone-400 uppercase">
                Collection of designs
              </div>
              <h1 className="mb-4 text-3xl font-bold md:text-4xl">
                UI Experiments
                <br />
                Collection
              </h1>
              <p className="mb-6 text-sm text-stone-400 md:text-base">
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
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-800">
                <span className="sr-only">Scroll</span>
                <div className="h-1 w-1 animate-pulse rounded-full bg-white"></div>
              </div>
            </div>
          </div>

          {/* Main Grid Layout */}
          <div className="col-span-12 grid grid-cols-12 gap-3 md:col-span-9 md:gap-4">
            {/* Glassmorphism UI - 01 */}
            <Link href="/experiments/glassmorphism-ui" className="group col-span-6 md:col-span-4">
              <div className="relative h-full overflow-hidden rounded-xl bg-stone-900 p-6">
                <div className="absolute top-4 right-4 text-9xl font-bold text-stone-800 opacity-50 select-none">
                  01
                </div>
                <div className="relative z-10 flex h-full flex-col justify-between">
                  <div>
                    <p className="text-stone-400">
                      Modern glass
                      <br />
                      effect UI.
                    </p>
                    <h2 className="mt-2 text-xl font-bold">Glassmorphism UI</h2>
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
              href="/experiments/neumorphic-design"
              className="group col-span-6 row-span-2 md:col-span-8"
            >
              <div className="relative h-full overflow-hidden rounded-xl bg-stone-900">
                <div className="absolute inset-0 z-10 bg-gradient-to-br from-transparent to-black/30"></div>
                <div className="absolute bottom-6 left-6 z-20">
                  <p className="text-sm text-stone-300">Featured experiment</p>
                  <h2 className="mt-1 text-2xl font-bold">Neumorphic Design</h2>
                </div>
                <div className="absolute top-6 right-6 z-10 text-9xl font-bold text-stone-800 opacity-30 select-none">
                  02
                </div>
                <div className="absolute inset-0 bg-[url('/neumorphic-bg.png')] bg-cover bg-center opacity-40 transition-transform duration-700 group-hover:scale-105"></div>
              </div>
            </Link>

            {/* Brutalist Web Design - 03 */}
            <Link
              href="/experiments/brutalist-web-design"
              className="group col-span-6 md:col-span-4"
            >
              <div className="relative h-full overflow-hidden rounded-xl bg-stone-900 p-6">
                <div className="absolute top-4 right-4 text-9xl font-bold text-stone-800 opacity-50 select-none">
                  03
                </div>
                <div className="relative z-10 flex h-full flex-col justify-between">
                  <div>
                    <p className="text-stone-400">
                      Raw, bold
                      <br />
                      interfaces.
                    </p>
                    <h2 className="mt-2 text-xl font-bold">Brutalist Design</h2>
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
            <Link href="/experiments/micro-interactions" className="group col-span-6 md:col-span-4">
              <div className="relative h-full overflow-hidden rounded-xl bg-stone-900 p-6">
                <div className="absolute top-4 right-4 text-9xl font-bold text-stone-800 opacity-50 select-none">
                  04
                </div>
                <div className="relative z-10 flex h-full flex-col justify-between">
                  <div>
                    <p className="text-stone-400">
                      Subtle
                      <br />
                      animations.
                    </p>
                    <h2 className="mt-2 text-xl font-bold">Micro Interactions</h2>
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
            <Link href="/experiments/dark-mode-patterns" className="group col-span-6 md:col-span-8">
              <div className="relative h-full overflow-hidden rounded-xl bg-stone-900">
                <div className="absolute inset-0 z-10 bg-gradient-to-br from-transparent to-black/30"></div>
                <div className="absolute bottom-6 left-6 z-20">
                  <p className="text-sm text-stone-300">Popular experiment</p>
                  <h2 className="mt-1 text-2xl font-bold">Dark Mode Patterns</h2>
                </div>
                <div className="absolute top-6 right-6 z-10 text-9xl font-bold text-stone-800 opacity-30 select-none">
                  05
                </div>
                <div className="absolute inset-0 bg-[url('/dark-mode-bg.png')] bg-cover bg-center opacity-40 transition-transform duration-700 group-hover:scale-105"></div>
              </div>
            </Link>

            {/* New Experiment - 06 */}
            <Link href="/admin/dashboard" className="group col-span-6 md:col-span-4">
              <div className="relative h-full overflow-hidden rounded-xl bg-stone-900 p-6">
                <div className="absolute top-4 right-4 text-9xl font-bold text-stone-800 opacity-50 select-none">
                  06
                </div>
                <div className="relative z-10 flex h-full flex-col justify-between">
                  <div>
                    <p className="text-stone-400">
                      Create your
                      <br />
                      own design.
                    </p>
                    <h2 className="mt-2 text-xl font-bold">New Experiment</h2>
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
              <div className="relative h-full overflow-hidden rounded-xl bg-stone-900">
                <div className="absolute inset-0 z-10 bg-gradient-to-br from-transparent to-black/30"></div>
                <div className="absolute bottom-6 left-6 z-20">
                  <p className="text-sm text-stone-300">Browse the collection</p>
                  <h2 className="mt-1 text-2xl font-bold">All Experiments</h2>
                </div>
                <div className="absolute top-6 right-6 z-10 text-9xl font-bold text-stone-800 opacity-30 select-none">
                  07
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
              <p className="text-sm text-stone-400">© 2025 UI Experiments. All rights reserved.</p>
            </div>
            <div className="flex gap-6">
              <Link
                href="/admin/dashboard"
                className="text-sm text-stone-400 transition-colors hover:text-white"
              >
                Admin
              </Link>
              <a href="#" className="text-sm text-stone-400 transition-colors hover:text-white">
                Twitter
              </a>
              <a href="#" className="text-sm text-stone-400 transition-colors hover:text-white">
                Instagram
              </a>
              <a href="#" className="text-sm text-stone-400 transition-colors hover:text-white">
                Dribbble
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
