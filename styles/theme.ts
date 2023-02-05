import { extendTheme } from '@chakra-ui/react'

const susuColors = {
  primary: '#20ddbe',
  secondary: ' #209edd',
  config: {
    initialColorMode: 'light',
  },
}

export const theme = extendTheme({ susuColors })
