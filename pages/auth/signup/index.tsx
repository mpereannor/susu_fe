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
import Image from 'next/image'
import React from 'react'
import susuAuthPic from '../../../assets/susu_auth.svg'
// import { useSession } from 'next-auth/react'
import { useForm, SubmitHandler } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const SignUp = () => {
  const bg = useColorModeValue('white', 'susuDarkBg')
  const color = useColorModeValue('susuColor', 'white')
  // const { data: session } = useSession()

  type ISignUpInputs = {
    username: string
    email: string
    pwd: string
    confirm_pwd: string
  }
  const signUpSchema = yup.object().shape({
    email: yup
      .string()
      .email('Please check the email format')
      .required('Email is required'),
    username: yup.string().required('Username is required'),
    pwd: yup
      .string()
      .required('Please Enter your password')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        'Must Contain 8 Characters, At Least; One Uppercase, One Lowercase, One Number and One Special Case Character'
      ),
    confirm_pwd: yup
      .string()
      .required('Repeat password')
      .oneOf([yup.ref('password')], 'Passwords does not match'),
  })

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting, isSubmitted },
  } = useForm<ISignUpInputs>({
    resolver: yupResolver(signUpSchema),
    mode: 'onBlur',
  })

  const onSubmit: SubmitHandler<ISignUpInputs> = (data) => {
    console.log('data', data)
  }
  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex flex={1} mx={{ base: 4, md: 0 }} bg={bg} color={color}>
        <Stack spacing={4} w={'full'}>
          <Heading textAlign={'center'} fontSize={20} fontWeight={'semibold'}>
            Create a new account
          </Heading>
          <Text>Your account is safe with us.</Text>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl>
              <FormLabel htmlFor="email">Email Address</FormLabel>
              <Input
                id="username"
                placeholder="Username"
                {...register('username', {
                  required: 'Username is required',
                })}
              />
              <Input
                id="email"
                placeholder="Email Address"
                {...register('email', {
                  required: 'Email is required',
                })}
              />
              <Input
                id="pwd"
                placeholder="Password"
                {...register('pwd', {
                  required: 'Password is required',
                })}
              />
              <Input
                id="confirm_pwd"
                placeholder="Confirm Password"
                {...register('confirm_pwd', {
                  required: 'Password does not match',
                })}
              />
              <FormErrorMessage>
                {errors.email && errors.email.message}
              </FormErrorMessage>
              <Button>Continue</Button>
              <Text>
                By creating an account, you agree to Susu’s Privacy Policy,
                Terms of Use, and Cookie Policy.
              </Text>
            </FormControl>
          </form>
          <Text>Sign in instead</Text>

        </Stack>
      </Flex>
      <Flex flex={1} pos={'relative'} display={{ base: 'none', md: 'block' }}>
        <Image fill alt="susu_auth" src={susuAuthPic} object-fit="cover" />
      </Flex>
    </Stack>
  )
}

export default SignUp
