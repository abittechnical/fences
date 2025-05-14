'use client'

import { useRouter } from 'next/navigation'
import { Button } from '@/ui/button'
import { X } from 'lucide-react'

// Import the preview components from the main page
// This is a simplified version for demonstration
const LiveDemoPage = ({ params }: { params: { slug: string } }) => {
  const router = useRouter()
  const slug = params.slug

  // This would normally come from a database
  const getExperimentType = (slug: string) => {
    const experimentTypes = {
      'glassmorphism-ui': 'card',
      'neumorphic-design': 'widget',
      'brutalist-web-design': 'fullpage',
      'micro-interactions': 'component',
      'dark-mode-patterns': 'theme',
    }
    return experimentTypes[slug as keyof typeof experimentTypes] || 'card'
  }

  const experimentType = getExperimentType(slug)

  const handleExit = () => {
    router.back()
  }

  return (
    <div className="flex min-h-screen flex-col bg-stone-50">
      <div className="fixed top-4 right-4 z-10">
        <Button variant="outline" size="sm" onClick={handleExit} className="bg-white shadow-md">
          <X className="mr-2 h-4 w-4" />
          Exit Live Demo
        </Button>
      </div>
      <div className="flex flex-1 items-center justify-center p-4">
        {/* This would render the appropriate preview component based on experiment type */}
        <div className="rounded-xl border border-stone-200 bg-white p-8 text-center shadow-lg">
          <h2 className="mb-4 text-2xl font-bold text-stone-900">Live Demo: {slug}</h2>
          <p className="mb-6 text-stone-600">
            This is a placeholder for the {experimentType} live demo. In a real implementation, this
            would render the full {experimentType} component.
          </p>
          <div className="rounded-lg bg-stone-100 p-8">
            <p className="text-stone-800">
              The actual UI experiment would be rendered here in full screen mode.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LiveDemoPage
