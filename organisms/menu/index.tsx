import {
  MenuButton,
  MenuList,
  MenuItem,
  Menu,
  IconButton,
  MenuGroup,
  useColorModeValue,
} from '@chakra-ui/react'
import { AiFillPlusCircle } from 'react-icons/ai'

const ActionMenu = () => {
  const bg = useColorModeValue('white', 'susuColor')
  const color = useColorModeValue('susuColor', 'white')
  return (
    <Menu>
      <>
        <MenuButton
          as={IconButton}
          icon={<AiFillPlusCircle size={36} />}
          borderRadius={'3xl'}
          color={'primary.500'}
          colorScheme={'primary.500'}
        />

        <MenuList bg={bg}>
          <MenuGroup bg={bg} borderColor={color} borderWidth={1}>
            <MenuItem
              bg={bg}
              _hover={{
                color: 'primary.500',
                fontWeight: 'semibold',
                background: 'primary.50',
              }}
            >
              Register New User
            </MenuItem>
            <MenuItem
              bg={bg}
              _hover={{
                color: 'primary.500',
                fontWeight: 'semibold',
                background: 'primary.50',
              }}
            >
              Create an Account
            </MenuItem>
          </MenuGroup>
          <MenuGroup bg={bg}>
            <MenuItem
              bg={bg}
              _hover={{
                color: 'primary.500',
                fontWeight: 'semibold',
                background: 'primary.50',
              }}
            >
              Approve Deposit
            </MenuItem>
            <MenuItem
              bg={bg}
              transition="all 0.2s"
              _hover={{
                color: 'primary.500',
                fontWeight: 'semibold',
                background: 'primary.50',
              }}
            >
              PayIn / PayOut
            </MenuItem>
            <MenuItem
              bg={bg}
              _hover={{
                color: 'primary.500',
                fontWeight: 'semibold',
                background: 'primary.50',
              }}
            >
              Initiate Transfer
            </MenuItem>
          </MenuGroup>
        </MenuList>
      </>
    </Menu>
  )
}

export default ActionMenu
