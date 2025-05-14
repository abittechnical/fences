import type React from 'react'
import Link from 'next/link'

import { Avatar, AvatarFallback } from '@/components/ui/avatar'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-stone-50">
      <header className="border-b border-stone-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between p-4">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Avatar className="h-8 w-8 bg-stone-900">
                <AvatarFallback>UI</AvatarFallback>
              </Avatar>
              <span className="font-medium">UI Experiments</span>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/" className="text-sm text-stone-600 hover:text-stone-900">
              View Site
            </Link>
            <div className="flex items-center gap-2">
              <span className="text-stone-700">Admin User</span>
              <Avatar className="h-8 w-8 border border-stone-200">
                <AvatarFallback>AU</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>
      {children}
    </div>
  )
}
