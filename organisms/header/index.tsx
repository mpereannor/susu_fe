import {
  Avatar,
  Box,
  Button,
  chakra,
  CloseButton,
  Flex,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  useColorModeValue,
  useDisclosure,
  VisuallyHidden,
  VStack,
} from '@chakra-ui/react'
import { Fragment } from 'react'
import {
  AiFillBell,
  AiFillHome,
  AiOutlineMenu,
  AiOutlineSearch,
} from 'react-icons/ai'
import { ToggleColor } from '../../lib/colorMode'

const Header = () => {
  const bg = useColorModeValue('gray.300', 'susuDarkBg')
  // const borderColor = useColorModeValue('susuDarkBg', 'susuDarkBg')
  const mobileNav = useDisclosure()
  return (
    <Fragment>
      <chakra.header
        bg={bg}
        w="full"
        px={{
          base: 2,
          sm: 4,
        }}
        py={4}
        shadow="md"
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <HStack display="flex" spacing={3} alignItems="center">
            <Box
              display={{
                base: 'inline-flex',
                md: 'none',
              }}
            >
              <IconButton
                display={{
                  base: 'flex',
                  md: 'none',
                }}
                aria-label="Open menu"
                fontSize="20px"
                color="gray.800"
                _dark={{
                  color: 'inherit',
                }}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />
              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? 'flex' : 'none'}
                flexDirection="column"
                p={2}
                pb={4}
                m={2}
                bg={bg}
                spacing={3}
                rounded="sm"
                shadow="sm"
              >
                <CloseButton
                  aria-label="Close menu"
                  justifySelf="self-start"
                  onClick={mobileNav.onClose}
                />
                <Button w="full" variant="ghost" leftIcon={<AiFillHome />}>
                  Dashboard
                </Button>
              </VStack>
            </Box>
            <chakra.a
              href="/"
              title="Micro Ventures Home Page"
              display="flex"
              alignItems="center"
            >
              <VisuallyHidden>Choc</VisuallyHidden>
            </chakra.a>

            <HStack
              spacing={3}
              display={{
                base: 'none',
                md: 'inline-flex',
              }}
            >
              <Button variant="ghost" leftIcon={<AiFillHome />} size="sm">
                Micro Ventures
              </Button>
            </HStack>
          </HStack>
          <HStack
            spacing={3}
            display={mobileNav.isOpen ? 'none' : 'flex'}
            alignItems="center"
          >
            <InputGroup>
              <Input
                borderColor={"#93a0b0"}
                type="tel"
                placeholder="Search..."
              />
              <InputRightElement pointerEvents="none">
                <AiOutlineSearch />
              </InputRightElement>
            </InputGroup>
            <chakra.a
              p={3}
              color="gray.800"
              _dark={{
                color: 'inherit',
              }}
              rounded="sm"
              _hover={{
                color: 'gray.800',
                _dark: {
                  color: 'gray.600',
                },
              }}
            >
              <AiFillBell />
              <VisuallyHidden>Notifications</VisuallyHidden>
            </chakra.a>
            <Avatar
              size="sm"
              name="Dan Abrahmov"
              src="https://bit.ly/dan-abramov"
            />
            <ToggleColor />
          </HStack>
        </Flex>
      </chakra.header>
    </Fragment>
  )
}

export default Header
