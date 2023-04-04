import { extendTheme, type ThemeConfig } from '@chakra-ui/react'
import nextFont from './fonts'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}


const customTheme = {
  config,
  fonts: {
    body: nextFont.style.fontFamily,
    heading: nextFont.style.fontFamily,
  },
  colors: {
    primary: {
      500: '#20ddbe',
    },
    secondary: {
      500: ' #209edd',
    },
    susuDarkBg: '#1F2023',
    susuColor: '#1A202C',
  },
}
export const theme = extendTheme({ customTheme })