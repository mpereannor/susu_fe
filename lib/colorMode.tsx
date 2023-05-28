import { ButtonGroup, useColorMode } from '@chakra-ui/react'
import { BsMoon, BsSun } from 'react-icons/bs'

export function ToggleColor() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <ButtonGroup onClick={toggleColorMode}>
      {colorMode === 'light' ? <BsMoon /> : <BsSun />}
    </ButtonGroup>
  )
}
