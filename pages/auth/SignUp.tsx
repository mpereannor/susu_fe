import {
  Flex,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import susuAuthPic from '../../assets/susu_auth.svg'

const SignUp = () => {

  const bg = useColorModeValue('white', 'susuDarkBg')
  const color = useColorModeValue('susuColor', 'white')
  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex flex={1} mx={{ base: 4, md: 0 }} bg={bg} color={color}></Flex>
      <Flex flex={1} pos={'relative'} display={{ base: 'none', md: 'block' }}>
        <Image fill alt="susu_auth" src={susuAuthPic} object-fit="cover" />
      </Flex>
    </Stack>
  )
}

export default SignUp
