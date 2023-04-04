import { Button, useColorMode } from '@chakra-ui/react'

export function ToggleColor() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Button onClick={toggleColorMode}>
      Toggle{colorMode === 'light' ? 'dark' : 'light'}
    </Button>
  )
}
