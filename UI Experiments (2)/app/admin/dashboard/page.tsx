import Link from 'next/link'
import { Eye, Link2, Plus } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-stone-50">
      <main className="mx-auto grid max-w-7xl gap-6 p-4 md:grid-cols-[1fr_350px] md:p-6">
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-stone-900">Experiments</h1>
            <p className="mt-1 text-stone-600">
              Browse your UI experiments or create a new one quickly!
            </p>
          </div>

          <Tabs defaultValue="all" className="w-fit">
            <TabsList className="bg-stone-100">
              <TabsTrigger value="all" className="data-[state=active]:bg-white">
                All
              </TabsTrigger>
              <TabsTrigger value="archived" className="data-[state=active]:bg-white">
                Archived
              </TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="flex flex-col overflow-hidden border-stone-200">
              <div className="relative flex h-40 items-center justify-center bg-stone-100 p-6">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Plus className="h-10 w-10 text-stone-400" />
                </div>
              </div>
              <div className="flex-1 p-4">
                <h3 className="font-medium text-stone-900">New Experiment</h3>
                <p className="mt-1 text-sm text-stone-600">Create a new UI experiment easily.</p>
              </div>
              <div className="p-4 pt-0">
                <Button className="w-full bg-stone-900 hover:bg-stone-800">Create new</Button>
              </div>
            </Card>

            <Link href="/experiments/glassmorphism-ui" passHref>
              <Card className="cursor-pointer overflow-hidden border-stone-200 transition-colors hover:border-stone-300">
                <div className="relative h-40 overflow-hidden bg-stone-800">
                  <div className="absolute inset-0">
                    <svg
                      viewBox="0 0 200 200"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-full w-full opacity-30"
                    >
                      <path
                        fill="#FFFFFF"
                        d="M42.8,-68.2C54.9,-62.3,64.2,-49.6,70.9,-35.6C77.6,-21.6,81.8,-6.2,79.3,8.1C76.8,22.4,67.7,35.7,56.7,45.9C45.7,56.1,32.8,63.3,18.8,68.1C4.7,72.9,-10.5,75.4,-24.8,72.1C-39.1,68.8,-52.5,59.7,-62.3,47.5C-72.1,35.3,-78.3,20,-78.9,4.7C-79.5,-10.6,-74.5,-21.2,-67.1,-30.5C-59.7,-39.8,-49.9,-47.8,-38.8,-53.9C-27.7,-60,-13.9,-64.2,0.8,-65.5C15.5,-66.8,30.7,-74.1,42.8,-68.2Z"
                        transform="translate(100 100)"
                      />
                    </svg>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-stone-900">Glassmorphism UI</h3>
                  <p className="mt-1 text-sm text-stone-600">
                    Modern glass effect interfaces with blur and transparency effects.
                  </p>
                  <div className="mt-4 flex items-center gap-2">
                    <Badge variant="outline" className="bg-stone-100 text-xs">
                      5 components
                    </Badge>
                    <Badge variant="outline" className="bg-stone-100 text-xs">
                      8 variants
                    </Badge>
                    <Badge variant="outline" className="bg-stone-100 text-xs">
                      32 views
                    </Badge>
                  </div>
                </div>
              </Card>
            </Link>

            <Link href="/experiments/neumorphic-design" passHref>
              <Card className="cursor-pointer overflow-hidden border-stone-200 transition-colors hover:border-stone-300">
                <div className="relative h-40 overflow-hidden bg-stone-700">
                  <div className="absolute inset-0">
                    <svg
                      viewBox="0 0 200 200"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-full w-full opacity-30"
                    >
                      <path
                        fill="#FFFFFF"
                        d="M47.7,-79.1C62.3,-71.9,75.1,-59.5,83.2,-44.5C91.3,-29.5,94.7,-11.9,91.4,4.2C88.2,20.2,78.3,34.7,67.1,46.7C55.9,58.7,43.3,68.3,29.3,74.8C15.3,81.3,-0.1,84.8,-15.8,82.5C-31.5,80.2,-47.5,72.1,-59.9,60.1C-72.3,48.1,-81.1,32.2,-84.3,15.1C-87.5,-2,-85.1,-20.3,-77.6,-35.9C-70.1,-51.5,-57.5,-64.4,-43,-73.1C-28.5,-81.8,-12.1,-86.3,2.9,-90.9C17.8,-95.5,33.1,-86.3,47.7,-79.1Z"
                        transform="translate(100 100)"
                      />
                    </svg>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-stone-900">Neumorphic Design</h3>
                  <p className="mt-1 text-sm text-stone-600">
                    Soft UI elements with subtle shadows and highlights for depth.
                  </p>
                  <div className="mt-4 flex items-center gap-2">
                    <Badge variant="outline" className="bg-stone-100 text-xs">
                      3 components
                    </Badge>
                    <Badge variant="outline" className="bg-stone-100 text-xs">
                      6 variants
                    </Badge>
                    <Badge variant="outline" className="bg-stone-100 text-xs">
                      24 views
                    </Badge>
                  </div>
                </div>
              </Card>
            </Link>

            <Link href="/experiments/brutalist-web-design" passHref>
              <Card className="cursor-pointer overflow-hidden border-stone-200 transition-colors hover:border-stone-300">
                <div className="relative h-40 overflow-hidden bg-stone-600">
                  <div className="absolute inset-0">
                    <svg
                      viewBox="0 0 200 200"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-full w-full opacity-30"
                    >
                      <path
                        fill="#FFFFFF"
                        d="M39.9,-65.7C51.1,-60.5,59.5,-48.8,65.6,-36.1C71.7,-23.4,75.6,-9.7,74.8,3.9C74,17.4,68.5,30.9,59.8,41.3C51.1,51.7,39.1,59.1,26.2,64.4C13.2,69.8,-0.8,73.1,-14.9,71.7C-29,70.3,-43.2,64.1,-54.6,54.1C-66,44,-74.6,30,-77.8,14.7C-81,-0.7,-78.8,-17.3,-71.8,-30.8C-64.8,-44.3,-53,-54.7,-40,-60.2C-27,-65.7,-12.8,-66.3,0.8,-67.6C14.5,-68.9,28.7,-70.9,39.9,-65.7Z"
                        transform="translate(100 100)"
                      />
                    </svg>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-stone-900">Brutalist Web Design</h3>
                  <p className="mt-1 text-sm text-stone-600">
                    Raw, bold interfaces with unconventional layouts and typography.
                  </p>
                  <div className="mt-4 flex items-center gap-2">
                    <Badge variant="outline" className="bg-stone-100 text-xs">
                      10 components
                    </Badge>
                    <Badge variant="outline" className="bg-stone-100 text-xs">
                      10 variants
                    </Badge>
                    <Badge variant="outline" className="bg-stone-100 text-xs">
                      43 views
                    </Badge>
                  </div>
                </div>
              </Card>
            </Link>

            <Link href="/experiments/micro-interactions" passHref>
              <Card className="cursor-pointer overflow-hidden border-stone-200 transition-colors hover:border-stone-300">
                <div className="relative h-40 overflow-hidden bg-stone-500">
                  <div className="absolute inset-0">
                    <svg
                      viewBox="0 0 200 200"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-full w-full opacity-30"
                    >
                      <path
                        fill="#FFFFFF"
                        d="M48.2,-76.1C63.3,-69.2,77.2,-58.4,84.6,-44.2C92,-30,92.8,-12.4,88.2,2.7C83.6,17.8,73.6,30.4,63.2,42.1C52.8,53.8,42,64.6,28.8,70.8C15.7,77,-0,78.6,-14.8,75.3C-29.6,72,-43.6,63.8,-54.8,52.6C-66,41.3,-74.5,27,-78.3,11.2C-82.1,-4.6,-81.2,-21.9,-74.1,-36.2C-67,-50.5,-53.7,-61.8,-39.5,-69.1C-25.3,-76.4,-10.1,-79.7,4.2,-86.2C18.5,-92.7,33.1,-83,48.2,-76.1Z"
                        transform="translate(100 100)"
                      />
                    </svg>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-stone-900">Micro Interactions</h3>
                  <p className="mt-1 text-sm text-stone-600">
                    Subtle animations and feedback for enhanced user experience.
                  </p>
                  <div className="mt-4 flex items-center gap-2">
                    <Badge variant="outline" className="bg-stone-100 text-xs">
                      8 components
                    </Badge>
                    <Badge variant="outline" className="bg-stone-100 text-xs">
                      3 variants
                    </Badge>
                    <Badge variant="outline" className="bg-stone-100 text-xs">
                      93 views
                    </Badge>
                  </div>
                </div>
              </Card>
            </Link>

            <Link href="/experiments/dark-mode-patterns" passHref>
              <Card className="cursor-pointer overflow-hidden border-stone-200 transition-colors hover:border-stone-300">
                <div className="relative h-40 overflow-hidden bg-stone-400">
                  <div className="absolute inset-0">
                    <svg
                      viewBox="0 0 200 200"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-full w-full opacity-30"
                    >
                      <path
                        fill="#FFFFFF"
                        d="M45.3,-76.3C59.9,-69.8,73.8,-59.5,82.1,-45.8C90.5,-32.1,93.3,-15,90.9,0.8C88.5,16.7,80.9,31.3,71.2,44.3C61.5,57.3,49.7,68.6,35.8,75.3C21.9,82,7.9,84.1,-5.4,81.8C-18.7,79.6,-31.3,73,-42.6,64.5C-53.9,56,-63.9,45.6,-70.4,33.2C-76.9,20.8,-79.9,6.4,-78.8,-7.7C-77.7,-21.8,-72.5,-35.6,-63.6,-46.6C-54.7,-57.6,-42.1,-65.8,-28.9,-72.8C-15.7,-79.8,-1.9,-85.6,11.4,-84.9C24.7,-84.2,30.7,-82.9,45.3,-76.3Z"
                        transform="translate(100 100)"
                      />
                    </svg>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-stone-900">Dark Mode Patterns</h3>
                  <p className="mt-1 text-sm text-stone-600">
                    Low-light interface designs optimized for night viewing.
                  </p>
                  <div className="mt-4 flex items-center gap-2">
                    <Badge variant="outline" className="bg-stone-100 text-xs">
                      4 components
                    </Badge>
                    <Badge variant="outline" className="bg-stone-100 text-xs">
                      12 variants
                    </Badge>
                    <Badge variant="outline" className="bg-stone-100 text-xs">
                      77 views
                    </Badge>
                  </div>
                </div>
              </Card>
            </Link>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-xl border border-stone-200 bg-white p-6">
            <div className="mb-4 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-stone-900">
                <Eye className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="font-semibold text-stone-900">Featured Experiment</h2>
                <p className="text-sm text-stone-600">Our most popular UI experiment this week</p>
              </div>
            </div>
            <div className="mt-4 flex justify-between gap-2">
              <Button variant="outline" className="flex-1">
                Preview
              </Button>
              <Button variant="outline" className="flex-1">
                <Link2 className="mr-2 h-4 w-4" />
                Share
              </Button>
            </div>
          </div>

          <div>
            <div className="mb-4 flex items-center justify-between">
              <h2 className="font-semibold text-stone-900">Popular Experiments</h2>
              <Button variant="ghost" size="sm" className="text-stone-600">
                View all
              </Button>
            </div>
            <div className="space-y-2">
              <Input placeholder="Search experiments..." className="mb-4" />

              <div className="rounded-lg border border-stone-200 bg-white p-4">
                <div className="flex justify-between">
                  <div>
                    <h3 className="font-medium text-stone-900">Glassmorphism UI</h3>
                    <p className="text-sm text-stone-500">glassmorphism@ui.design</p>
                  </div>
                  <Badge className="bg-stone-100 text-stone-800 hover:bg-stone-200">4.6</Badge>
                </div>
                <div className="mt-2 h-1.5 w-full rounded-full bg-stone-100">
                  <div className="h-1.5 w-[85%] rounded-full bg-stone-800"></div>
                </div>
              </div>

              <div className="rounded-lg border border-stone-200 bg-white p-4">
                <div className="flex justify-between">
                  <div>
                    <h3 className="font-medium text-stone-900">Micro Interactions</h3>
                    <p className="text-sm text-stone-500">micro@interactions.design</p>
                  </div>
                  <Badge className="bg-stone-100 text-stone-800 hover:bg-stone-200">4.8</Badge>
                </div>
                <div className="mt-2 h-1.5 w-full rounded-full bg-stone-100">
                  <div className="h-1.5 w-[90%] rounded-full bg-stone-800"></div>
                </div>
              </div>

              <div className="rounded-lg border border-stone-200 bg-white p-4">
                <div className="flex justify-between">
                  <div>
                    <h3 className="font-medium text-stone-900">Brutalist Design</h3>
                    <p className="text-sm text-stone-500">brutal@webdesign.art</p>
                  </div>
                  <Badge className="bg-stone-100 text-stone-800 hover:bg-stone-200">3.6</Badge>
                </div>
                <div className="mt-2 h-1.5 w-full rounded-full bg-stone-100">
                  <div className="h-1.5 w-[65%] rounded-full bg-stone-800"></div>
                </div>
              </div>

              <div className="rounded-lg border border-stone-200 bg-white p-4">
                <div className="flex justify-between">
                  <div>
                    <h3 className="font-medium text-stone-900">Neumorphic Design</h3>
                    <p className="text-sm text-stone-500">soft@ui.design</p>
                  </div>
                  <Badge className="bg-stone-100 text-stone-800 hover:bg-stone-200">4.3</Badge>
                </div>
                <div className="mt-2 h-1.5 w-full rounded-full bg-stone-100">
                  <div className="h-1.5 w-[80%] rounded-full bg-stone-800"></div>
                </div>
              </div>

              <div className="rounded-lg border border-stone-200 bg-white p-4">
                <div className="flex justify-between">
                  <div>
                    <h3 className="font-medium text-stone-900">Dark Mode Patterns</h3>
                    <p className="text-sm text-stone-500">dark@mode.design</p>
                  </div>
                  <Badge className="bg-stone-100 text-stone-800 hover:bg-stone-200">4.0</Badge>
                </div>
                <div className="mt-2 h-1.5 w-full rounded-full bg-stone-100">
                  <div className="h-1.5 w-[75%] rounded-full bg-stone-800"></div>
                </div>
              </div>

              <Button variant="outline" className="mt-4 w-full">
                <Plus className="mr-2 h-4 w-4" />
                Add new experiment
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
