import { withThemeByClassName } from '@storybook/addon-themes'

export const withThemes = withThemeByClassName({
  themes: {
    // nameOfTheme: 'classNameForTheme',
    light: '',
    dark: 'dark',
  },
  defaultTheme: 'light',
})
