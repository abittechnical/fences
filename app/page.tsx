import Image from 'next/image'
import Link from 'next/link'

import { Logo } from '@/components/logo'

export default function Home() {
  return (
    <div className="relative grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
      <main className="row-start-2 flex flex-col items-center gap-[32px] sm:items-start">
        <Logo className="absolute top-24 left-1/2 size-16 -translate-1/2" />
        <ol className="list-inside list-decimal text-center font-[family-name:var(--font-geist-mono)] text-sm/6 sm:text-left">
          <li className="mb-2 tracking-[-.01em]">
            Get started by editing{' '}
            <code className="dark:bg-white-a2 dark:ring-white-a5/80 rounded bg-black/[.05] px-1 py-0.5 font-[family-name:var(--font-geist-mono)] font-semibold ring ring-transparent">
              app/page.tsx
            </code>
            .
          </li>
          <li className="tracking-[-.01em]">Save and see your changes instantly.</li>
        </ol>

        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <Link
            className="bg-inverse text-cnt-on-inverse flex h-10 items-center justify-center gap-2 rounded-full border border-solid border-transparent px-4 text-sm font-medium transition-colors hover:bg-[#383838] sm:h-12 sm:w-auto sm:px-5 sm:text-base"
            href="#"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </Link>
          <Link
            className="flex h-10 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-4 text-sm font-medium transition-colors hover:border-transparent hover:bg-[#f2f2f2] sm:h-12 sm:w-auto sm:px-5 sm:text-base md:w-[158px] dark:border-white/[.145] dark:hover:bg-[#1a1a1a]"
            href="#"
          >
            Read our docs
          </Link>
        </div>
      </main>
      <footer className="row-start-3 flex flex-wrap items-center justify-center gap-[24px]">
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/guides"
        >
          <Image aria-hidden src="/file.svg" alt="File icon" width={16} height={16} />
          Learn
        </Link>
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/examples"
        >
          <Image aria-hidden src="/window.svg" alt="Window icon" width={16} height={16} />
          Examples
        </Link>
        <Link className="flex items-center gap-2 hover:underline hover:underline-offset-4" href="#">
          <Image aria-hidden src="/globe.svg" alt="Globe icon" width={16} height={16} />
          Go to bitwhys.com →
        </Link>
      </footer>
    </div>
  )
}
