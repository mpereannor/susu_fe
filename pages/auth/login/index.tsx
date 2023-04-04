// import { Stack, useColorModeValue } from "@chakra-ui/react"
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
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
        <Stack spacing={4} w={'full'}>
          <Heading textAlign={'center'} fontSize={20} fontWeight={'semibold'}>
            Welcome back{' '}
          </Heading>
          <Text>Please log in to your account.</Text>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl>
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

              <FormErrorMessage>
                {errors.username && errors.username.message}
              </FormErrorMessage>
              <Button w={'300px'}
                h={'60px'} color="white" _hover={{bg:"teal.400"}} bg='#20ddbe'>Continue</Button>
            </FormControl>
          </form>
          <Text size="12px" fontWeight={500} color={"#20ddbe"}>New here? Create an account</Text>
        </Stack>
      </Flex>
      <Flex flex={1} pos={'relative'} display={{ base: 'none', md: 'block' }}>
        <Image fill alt="susu_auth" src={susuAuthPic} object-fit="cover" />
      </Flex>
      {/* <ToggleColor /> */}
    </Stack>
  )
}
export default Login
