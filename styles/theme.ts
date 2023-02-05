import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}
const susuColors = {
  primary: '#20ddbe',
  secondary: ' #209edd',
  susuDarkBg: '#1F2023',
  susuColor: '#1A202C', 
  config,
}

export const theme = extendTheme({ susuColors })
