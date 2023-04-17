// import { Stack, useColorModeValue } from "@chakra-ui/react"
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormErrorMessage,
  Heading,
  Input,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useForm } from 'react-hook-form'
import Image from 'next/image'
import susuAuthPic from '../../../assets/susu_auth.svg'
import { ToggleColor } from '../../../lib/colorMode'

const Login = () => {
  const bg = useColorModeValue('white', 'susuDarkBg')
  const color = useColorModeValue('susuColor', 'white')

  type ILoginInputs = {
    username: string
    pwd: string
  }

  const loginSchema = yup.object().shape({
    username: yup.string().required('Username is required'),
    pwd: yup
      .string()
      .required('Please Enter your password')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        'Must Contain 8 Characters, At Least; One Uppercase, One Lowercase, One Number and One Special Case Character'
      ),
  })

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting, isSubmitted },
  } = useForm<ILoginInputs>({
    resolver: yupResolver(loginSchema),
    mode: 'onBlur',
  })

  const onSubmit: SubmitHandler<ILoginInputs> = (data) => {
    console.log('data', data)
  }
  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex flex={1} mx={{ base: 4, md: 0 }} bg={bg} color={color}>
        <Stack
          spacing={8}
          w={'full'}
          height={'100%'}
          align={'center'}
          paddingTop={'15vh'}
        >
          <Box>
            <Heading
              textAlign={'center'}
              fontSize={20}
              fontWeight={'semibold'}
              marginBottom={5}
            >
              Welcome back
            </Heading>
            <Text>Please log in to your account.</Text>
          </Box>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl>
              <Stack spacing={10}>
                <Input
                  w={'300px'}
                  h={'60px'}
                  border={'1px'}
                  id="username"
                  placeholder="Enter your Username"
                  _focus={{
                    borderColor: '#20ddbe',
                  }}
                  _placeholder={{
                    color: 'gray.400',
                  }}
                  {...register('username', {
                    required: 'Username is required',
                  })}
                />

                {/* <Box> */}
                <Input
                  w={'300px'}
                  h={'60px'}
                  id="pwd"
                  placeholder="Password"
                  _placeholder={{
                    color: 'gray.400',
                  }}
                  _focus={{
                    borderColor: '#20ddbe',
                  }}
                  {...register('pwd', {
                    required: 'Password is required',
                  })}
                />
                <SimpleGrid columns={2} spacing={4}>
                  <Center
                    bg="rgba(32, 221, 190, 0.2)"
                    height="40px"
                    borderRadius={5}
                  >
                    <Text
                      textAlign={'left'}
                      fontSize={10}
                      fontWeight={'medium'}
                      color={'#718096'}
                    >
                      At least 8 characters
                    </Text>
                  </Center>
                  <Center
                    bg="rgba(32, 221, 190, 0.2)"
                    height="40px"
                    borderRadius={5}
                  >
                    <Text fontSize={10} fontWeight={'medium'} color={'#718096'}>
                      At least one number
                    </Text>
                  </Center>
                  <Center
                    bg="rgba(32, 221, 190, 0.2)"
                    height="40px"
                    borderRadius={5}
                  >
                    <Text fontSize={10} fontWeight={'medium'} color={'#718096'}>
                      At least one uppercase letter
                    </Text>
                  </Center>
                  <Center
                    bg="rgba(32, 221, 190, 0.2)"
                    height="40px"
                    borderRadius={5}
                  >
                    <Text fontSize={10} fontWeight={'medium'} color={'#718096'}>
                      At least one special character
                    </Text>
                  </Center>
                </SimpleGrid>
                <FormErrorMessage>
                  {errors.username && errors.username.message}
                </FormErrorMessage>
                {/* </Box> */}

                <Button
                  w={'300px'}
                  h={'60px'}
                  color="white"
                  _hover={{ bg: 'teal.400' }}
                  bg="#20ddbe"
                >
                  Continue
                </Button>
              </Stack>
            </FormControl>
          </form>
          <Text size="12px" fontWeight={500} color={'#20ddbe'}>
            New here? Create an account
          </Text>
        </Stack>
      </Flex>
      <Flex flex={1} pos={'relative'} display={{ base: 'none', md: 'block' }}>
        <Image
          style={{
            width: '100%',
            height: 'auto',
          }}
          alt="susu_auth"
          src={susuAuthPic}
          object-fit="cover"
        />
      </Flex>
      {/* <ToggleColor /> */}
    </Stack>
  )
}
export default Login
