import { withThemeByClassName } from '@storybook/addon-themes'
import type { Preview } from '@storybook/react'

import { withThemes } from './decorators'

import '@/styles/globals.css'

import { AppProvider } from '@/components/app-provider'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export const decorators = [
  withThemes,
  (Story) => {
    return (
      <AppProvider
        defaultThemeAccentColor="lime"
        defaultTheme="system"
        defaultThemeGrayColor="sand"
      >
        <Story />
      </AppProvider>
    )
  },
]
export default preview
