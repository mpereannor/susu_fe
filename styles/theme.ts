import { extendTheme, type ThemeConfig } from '@chakra-ui/react'
import nextFont from './fonts'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

export const theme = extendTheme({
  config,
  fonts: {
    body: nextFont.style.fontFamily,
    subHeading: nextFont.style.fontFamily,
    heading: nextFont.style.fontFamily,
  },
  colors: {
    primary: {
      500: '#20ddbe',
      400: '#40e3c8',
      300: '#7fecda',
      200: '#bff5ec',
      100: '#bff5ec80',
      50: '#bdf5eb33'
    },
    secondary: {
    50: "rgba(32, 158, 221, 0.2)",
    100: "rgba(32, 158, 221, 0.4)",
      500: ' #209edd',

    },
    susuDarkBg: '#1F2023',
    susuColor: '#1A202C',

  },
})
