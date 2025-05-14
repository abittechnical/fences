'use client'

import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import {
  ArrowLeft,
  Bookmark,
  Calendar,
  Code,
  Download,
  Eye,
  Layers,
  Share2,
  Star,
  User,
  X,
} from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

// This would normally come from a database
const getExperimentData = (slug: string) => {
  const experiments = {
    'glassmorphism-ui': {
      title: 'Glassmorphism UI',
      description: 'Modern glass effect interfaces with blur and transparency effects.',
      author: 'Sarah Chen',
      date: 'May 10, 2025',
      views: 1432,
      likes: 89,
      components: 5,
      variants: 8,
      tags: ['Glass Effect', 'Transparency', 'Blur', 'Modern'],
      type: 'card',
      number: '01',
    },
    'neumorphic-design': {
      title: 'Neumorphic Design',
      description: 'Soft UI elements with subtle shadows and highlights for depth.',
      author: 'Marcus Johnson',
      date: 'May 5, 2025',
      views: 986,
      likes: 76,
      components: 3,
      variants: 6,
      tags: ['Soft UI', 'Shadows', 'Minimal', 'Clean'],
      type: 'widget',
      number: '02',
    },
    'brutalist-web-design': {
      title: 'Brutalist Web Design',
      description: 'Raw, bold interfaces with unconventional layouts and typography.',
      author: 'Alex Rivera',
      date: 'April 28, 2025',
      views: 1205,
      likes: 43,
      components: 10,
      variants: 10,
      tags: ['Bold', 'Raw', 'Typography', 'Unconventional'],
      type: 'fullpage',
      number: '03',
    },
    'micro-interactions': {
      title: 'Micro Interactions',
      description: 'Subtle animations and feedback for enhanced user experience.',
      author: 'Priya Patel',
      date: 'May 2, 2025',
      views: 2341,
      likes: 156,
      components: 8,
      variants: 3,
      tags: ['Animation', 'Feedback', 'Interactive', 'Subtle'],
      type: 'component',
      number: '04',
    },
    'dark-mode-patterns': {
      title: 'Dark Mode Patterns',
      description: 'Low-light interface designs optimized for night viewing.',
      author: 'Jordan Lee',
      date: 'April 15, 2025',
      views: 1876,
      likes: 112,
      components: 4,
      variants: 12,
      tags: ['Dark', 'Low Light', 'Night Mode', 'Contrast'],
      type: 'theme',
      number: '05',
    },
  }

  return experiments[slug as keyof typeof experiments] || experiments['glassmorphism-ui']
}

export default function ExperimentPage({ params }: { params: { slug: string } }) {
  const experiment = getExperimentData(params.slug)
  const router = useRouter()
  const searchParams = useSearchParams()
  const isLiveDemo = searchParams.get('live') === 'true'

  // If in live demo mode, render only the preview
  if (isLiveDemo) {
    return (
      <div className="flex min-h-screen flex-col bg-black">
        <div className="fixed top-4 right-4 z-10">
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              const url = new URL(window.location.href)
              url.searchParams.delete('live')
              router.push(url.pathname)
            }}
            className="border-stone-700 bg-stone-900 text-white hover:bg-stone-800 hover:text-white"
          >
            <X className="mr-2 h-4 w-4" />
            Exit Live Demo
          </Button>
        </div>
        <div className="flex flex-1 items-center justify-center p-4">
          {experiment.type === 'card' && <GlassmorphismPreview />}
          {experiment.type === 'widget' && <NeumorphicPreview />}
          {experiment.type === 'fullpage' && <BrutalistPreview />}
          {experiment.type === 'component' && <MicroInteractionsPreview />}
          {experiment.type === 'theme' && <DarkModePreview />}
        </div>
      </div>
    )
  }

  const handleLiveDemoClick = () => {
    const url = new URL(window.location.href)
    url.searchParams.set('live', 'true')
    router.push(url.pathname + '?' + url.searchParams.toString())
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="border-b border-stone-800 bg-stone-900">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between p-4">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-white">
                <span className="font-medium text-black">UI</span>
              </div>
              <span className="font-medium text-white">UI Experiments</span>
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-stone-400">Guest User</span>
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-stone-700">
              <span className="text-sm font-medium text-white">GU</span>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-[1600px] p-4">
        <Button
          variant="ghost"
          size="sm"
          asChild
          className="mb-6 text-stone-400 hover:bg-stone-800 hover:text-white"
        >
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to experiments
          </Link>
        </Button>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[350px_1fr]">
          {/* Left column - Meta information */}
          <div className="space-y-6">
            <div className="relative">
              <div className="absolute -top-6 -left-2 text-9xl font-bold text-stone-800 opacity-50 select-none">
                {experiment.number}
              </div>
              <div className="relative z-10">
                <h1 className="text-2xl font-bold text-white">{experiment.title}</h1>
                <p className="mt-1 text-stone-400">{experiment.description}</p>
              </div>
            </div>

            <div className="space-y-4 rounded-xl border border-stone-800 bg-stone-900 p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-stone-700">
                  <User className="h-5 w-5 text-stone-300" />
                </div>
                <div>
                  <p className="font-medium text-white">{experiment.author}</p>
                  <p className="text-sm text-stone-400">Designer</p>
                </div>
              </div>

              <Separator className="bg-stone-800" />

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="flex items-center gap-1.5 text-sm text-stone-400">
                    <Calendar className="h-4 w-4" /> Created
                  </p>
                  <p className="font-medium text-white">{experiment.date}</p>
                </div>
                <div>
                  <p className="flex items-center gap-1.5 text-sm text-stone-400">
                    <Eye className="h-4 w-4" /> Views
                  </p>
                  <p className="font-medium text-white">{experiment.views}</p>
                </div>
                <div>
                  <p className="flex items-center gap-1.5 text-sm text-stone-400">
                    <Layers className="h-4 w-4" /> Components
                  </p>
                  <p className="font-medium text-white">{experiment.components}</p>
                </div>
                <div>
                  <p className="flex items-center gap-1.5 text-sm text-stone-400">
                    <Code className="h-4 w-4" /> Variants
                  </p>
                  <p className="font-medium text-white">{experiment.variants}</p>
                </div>
              </div>

              <Separator className="bg-stone-800" />

              <div>
                <p className="mb-2 text-sm text-stone-400">Tags</p>
                <div className="flex flex-wrap gap-2">
                  {experiment.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="border-stone-700 bg-stone-800 text-stone-300"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-2 pt-2">
                <Button className="w-full bg-white text-black hover:bg-stone-200">
                  <Download className="mr-2 h-4 w-4" /> Download
                </Button>
                <div className="grid grid-cols-2 gap-2">
                  <Button
                    variant="outline"
                    className="border-stone-700 text-stone-300 hover:bg-stone-800 hover:text-white"
                  >
                    <Share2 className="mr-2 h-4 w-4" /> Share
                  </Button>
                  <Button
                    variant="outline"
                    className="border-stone-700 text-stone-300 hover:bg-stone-800 hover:text-white"
                  >
                    <Bookmark className="mr-2 h-4 w-4" /> Save
                  </Button>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-stone-800 bg-stone-900 p-6">
              <h2 className="mb-4 font-semibold text-white">Rating</h2>
              <div className="mb-2 flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${i <= 4 ? 'fill-amber-500 text-amber-500' : 'text-stone-700'}`}
                  />
                ))}
                <span className="ml-2 text-stone-400">4.2</span>
              </div>
              <div className="h-2 w-full rounded-full bg-stone-800">
                <div className="h-2 w-[84%] rounded-full bg-white"></div>
              </div>
              <p className="mt-2 text-sm text-stone-400">Based on 48 reviews</p>
            </div>
          </div>

          {/* Right column - Design showcase */}
          <div className="space-y-6">
            <Tabs defaultValue="preview" className="w-full">
              <div className="mb-4 flex items-center justify-between">
                <TabsList className="bg-stone-800">
                  <TabsTrigger
                    value="preview"
                    className="text-stone-400 data-[state=active]:bg-stone-900 data-[state=active]:text-white"
                  >
                    Preview
                  </TabsTrigger>
                  <TabsTrigger
                    value="code"
                    className="text-stone-400 data-[state=active]:bg-stone-900 data-[state=active]:text-white"
                  >
                    Code
                  </TabsTrigger>
                  <TabsTrigger
                    value="specs"
                    className="text-stone-400 data-[state=active]:bg-stone-900 data-[state=active]:text-white"
                  >
                    Specs
                  </TabsTrigger>
                </TabsList>

                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleLiveDemoClick}
                    className="border-stone-700 text-stone-300 hover:bg-stone-800 hover:text-white"
                  >
                    <Eye className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                </div>
              </div>

              <TabsContent value="preview" className="mt-0">
                <div className="flex min-h-[600px] items-center justify-center rounded-xl border border-stone-800 bg-stone-900 p-6">
                  {/* Different design previews based on experiment type */}
                  {experiment.type === 'card' && <GlassmorphismPreview />}
                  {experiment.type === 'widget' && <NeumorphicPreview />}
                  {experiment.type === 'fullpage' && <BrutalistPreview />}
                  {experiment.type === 'component' && <MicroInteractionsPreview />}
                  {experiment.type === 'theme' && <DarkModePreview />}
                </div>
              </TabsContent>

              <TabsContent value="code" className="mt-0">
                <div className="min-h-[600px] overflow-auto rounded-xl border border-stone-800 bg-stone-950 p-6">
                  <pre className="font-mono text-sm text-stone-300">
                    {`// ${experiment.title} Example Code
import React from 'react';
import { motion } from 'framer-motion';

export default function ${experiment.title.replace(/\s+/g, '')}() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">${experiment.title}</h1>
      <p className="mb-6">${experiment.description}</p>
      
      {/* Component implementation */}
      <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 shadow-xl">
        <h2 className="text-xl font-semibold mb-2">Example Component</h2>
        <p className="text-sm opacity-70">This is a sample implementation of the ${experiment.title} design pattern.</p>
        
        <div className="mt-4 grid grid-cols-2 gap-4">
          <div className="p-4 rounded-lg bg-white/5 border border-white/10">
            <h3 className="font-medium">Feature One</h3>
            <p className="text-xs opacity-60">Description of the first feature</p>
          </div>
          <div className="p-4 rounded-lg bg-white/5 border border-white/10">
            <h3 className="font-medium">Feature Two</h3>
            <p className="text-xs opacity-60">Description of the second feature</p>
          </div>
        </div>
      </div>
    </div>
  );
}`}
                  </pre>
                </div>
              </TabsContent>

              <TabsContent value="specs" className="mt-0">
                <div className="min-h-[600px] rounded-xl border border-stone-800 bg-stone-900 p-6">
                  <h2 className="mb-4 text-xl font-bold text-white">Design Specifications</h2>

                  <div className="space-y-6">
                    <div>
                      <h3 className="mb-2 text-lg font-medium text-white">Colors</h3>
                      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                        <div className="space-y-2">
                          <div className="h-12 w-full rounded-md bg-white"></div>
                          <p className="text-sm text-stone-300">#FFFFFF</p>
                          <p className="text-xs text-stone-500">Primary</p>
                        </div>
                        <div className="space-y-2">
                          <div className="h-12 w-full rounded-md bg-stone-900"></div>
                          <p className="text-sm text-stone-300">#1c1917</p>
                          <p className="text-xs text-stone-500">Background</p>
                        </div>
                        <div className="space-y-2">
                          <div className="h-12 w-full rounded-md bg-stone-800"></div>
                          <p className="text-sm text-stone-300">#292524</p>
                          <p className="text-xs text-stone-500">Border</p>
                        </div>
                        <div className="space-y-2">
                          <div className="h-12 w-full rounded-md bg-stone-400"></div>
                          <p className="text-sm text-stone-300">#a8a29e</p>
                          <p className="text-xs text-stone-500">Text</p>
                        </div>
                      </div>
                    </div>

                    <Separator className="bg-stone-800" />

                    <div>
                      <h3 className="mb-2 text-lg font-medium text-white">Typography</h3>
                      <div className="space-y-4">
                        <div>
                          <p className="mb-1 text-sm text-stone-500">Heading</p>
                          <p className="text-2xl font-bold text-white">Inter / 24px / Bold</p>
                        </div>
                        <div>
                          <p className="mb-1 text-sm text-stone-500">Subheading</p>
                          <p className="text-lg font-medium text-white">Inter / 18px / Medium</p>
                        </div>
                        <div>
                          <p className="mb-1 text-sm text-stone-500">Body</p>
                          <p className="text-base text-stone-300">Inter / 16px / Regular</p>
                        </div>
                        <div>
                          <p className="mb-1 text-sm text-stone-500">Caption</p>
                          <p className="text-sm text-stone-400">Inter / 14px / Regular</p>
                        </div>
                      </div>
                    </div>

                    <Separator className="bg-stone-800" />

                    <div>
                      <h3 className="mb-2 text-lg font-medium text-white">Spacing</h3>
                      <div className="grid grid-cols-4 gap-4">
                        <div className="space-y-2">
                          <div className="h-4 w-4 rounded-md bg-stone-700"></div>
                          <p className="text-xs text-stone-500">4px</p>
                        </div>
                        <div className="space-y-2">
                          <div className="h-6 w-6 rounded-md bg-stone-700"></div>
                          <p className="text-xs text-stone-500">8px</p>
                        </div>
                        <div className="space-y-2">
                          <div className="h-8 w-8 rounded-md bg-stone-700"></div>
                          <p className="text-xs text-stone-500">16px</p>
                        </div>
                        <div className="space-y-2">
                          <div className="h-12 w-12 rounded-md bg-stone-700"></div>
                          <p className="text-xs text-stone-500">24px</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            <div className="rounded-xl border border-stone-800 bg-stone-900 p-6">
              <h2 className="mb-4 text-xl font-bold text-white">Related Experiments</h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {Object.entries(getExperimentData('glassmorphism-ui'))
                  .filter(
                    ([key]) => key !== params.slug && key !== 'title' && key !== 'description',
                  )
                  .slice(0, 3)
                  .map(([slug, data]: [string, any], index) => (
                    <Link href={`/experiments/${slug}`} key={index} className="group block">
                      <div className="overflow-hidden rounded-lg border border-stone-800 bg-stone-900 transition-colors hover:border-stone-700">
                        <div
                          className={`h-32 bg-stone-${800 - index * 100} relative overflow-hidden`}
                        >
                          <div className="absolute inset-0">
                            <svg
                              viewBox="0 0 200 200"
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-full w-full opacity-30"
                            >
                              <path
                                fill="#FFFFFF"
                                d={
                                  [
                                    'M42.8,-68.2C54.9,-62.3,64.2,-49.6,70.9,-35.6C77.6,-21.6,81.8,-6.2,79.3,8.1C76.8,22.4,67.7,35.7,56.7,45.9C45.7,56.1,32.8,63.3,18.8,68.1C4.7,72.9,-10.5,75.4,-24.8,72.1C-39.1,68.8,-52.5,59.7,-62.3,47.5C-72.1,35.3,-78.3,20,-78.9,4.7C-79.5,-10.6,-74.5,-21.2,-67.1,-30.5C-59.7,-39.8,-49.9,-47.8,-38.8,-53.9C-27.7,-60,-13.9,-64.2,0.8,-65.5C15.5,-66.8,30.7,-74.1,42.8,-68.2Z',
                                    'M47.7,-79.1C62.3,-71.9,75.1,-59.5,83.2,-44.5C91.3,-29.5,94.7,-11.9,91.4,4.2C88.2,20.2,78.3,34.7,67.1,46.7C55.9,58.7,43.3,68.3,29.3,74.8C15.3,81.3,-0.1,84.8,-15.8,82.5C-31.5,80.2,-47.5,72.1,-59.9,60.1C-72.3,48.1,-81.1,32.2,-84.3,15.1C-87.5,-2,-85.1,-20.3,-77.6,-35.9C-70.1,-51.5,-57.5,-64.4,-43,-73.1C-28.5,-81.8,-12.1,-86.3,2.9,-90.9C17.8,-95.5,33.1,-86.3,47.7,-79.1Z',
                                    'M39.9,-65.7C51.1,-60.5,59.5,-48.8,65.6,-36.1C71.7,-23.4,75.6,-9.7,74.8,3.9C74,17.4,68.5,30.9,59.8,41.3C51.1,51.7,39.1,59.1,26.2,64.4C13.2,69.8,-0.8,73.1,-14.9,71.7C-29,70.3,-43.2,64.1,-54.6,54.1C-66,44,-74.6,30,-77.8,14.7C-81,-0.7,-78.8,-17.3,-71.8,-30.8C-64.8,-44.3,-53,-54.7,-40,-60.2C-27,-65.7,-12.8,-66.3,0.8,-67.6C14.5,-68.9,28.7,-70.9,39.9,-65.7Z',
                                  ][index % 3]
                                }
                                transform="translate(100 100)"
                              />
                            </svg>
                          </div>
                        </div>
                        <div className="p-4">
                          <h3 className="font-medium text-white group-hover:text-stone-300">
                            {
                              ['Neumorphic Design', 'Brutalist Web Design', 'Micro Interactions'][
                                index
                              ]
                            }
                          </h3>
                          <p className="mt-1 line-clamp-2 text-sm text-stone-400">
                            {
                              [
                                'Soft UI elements with subtle shadows and highlights for depth.',
                                'Raw, bold interfaces with unconventional layouts and typography.',
                                'Subtle animations and feedback for enhanced user experience.',
                              ][index]
                            }
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Different preview components based on experiment type
function GlassmorphismPreview() {
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

function NeumorphicPreview() {
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

function BrutalistPreview() {
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

function MicroInteractionsPreview() {
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

function DarkModePreview() {
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
