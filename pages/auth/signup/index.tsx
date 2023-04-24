/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
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
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import Link from 'next/link'
import useToggle from '../../../hooks/useToggle'
import PwdHelper from '../../components/elements/PwdHelper'
const SignUp = () => {
  const [value, toggle] = useToggle()

  const bg = useColorModeValue('white', 'susuDarkBg')
  const color = useColorModeValue('susuColor', 'white')
  // const { data: session } = useSession()

  type ISignUpInputs = {
    username: string
    email: string
    pwd: string
    confirm_pwd: string
  }
  const signUpValues = {
    username: '',
    email: '',
    password: '',
    confirm_pwd: '',
  }

  const latestSignUpValues = {
    username: '',
    email: '',
    password: '',
    confirm_pwd: '',
  }

  const isError = signUpValues === signUpValues
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
      .oneOf([yup.ref('password')], 'Passwords do not match'),
  })

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting, isSubmitted },
  } = useForm<ISignUpInputs>({
    defaultValues: signUpValues,
    resolver: yupResolver(signUpSchema),
    mode: 'onBlur',
  })

  const onSubmit: SubmitHandler<ISignUpInputs> = (data) => {
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
          paddingTop={'5vh'}
        >
          <Box>
            <Heading textAlign={'center'} fontSize={20} fontWeight={'semibold'}>
              Create a new account
            </Heading>
            <Text>Your account is safe with us.</Text>
          </Box>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl isInvalid={isError}>
              <Stack spacing={6} align={'center'}>
                <Input
                  id="username"
                  w={['300px', null, '400px']}
                  h={'60px'}
                  border={'1px'}
                  _focus={{
                    borderColor: 'primary.500',
                  }}
                  _placeholder={{
                    color: 'gray.400',
                  }}
                  placeholder="Username"
                  {...register('username', {
                    required: 'Username is required',
                  })}
                />
                {isError && (
                  <FormErrorMessage fontSize={10} fontWeight={'medium'}>
                    {errors.username && errors.username.message}
                  </FormErrorMessage>
                )}
                <Input
                  id="email"
                  w={['300px', null, '400px']}
                  h={'60px'}
                  border={'1px'}
                  _focus={{
                    borderColor: '#20ddbe',
                  }}
                  _placeholder={{
                    color: 'gray.400',
                  }}
                  placeholder="Email Address"
                  {...register('email', {
                    required: 'Email is required',
                  })}
                />
                {isError && (
                  <FormErrorMessage fontSize={10} fontWeight={'medium'}>
                    {errors.email && errors.email.message}
                  </FormErrorMessage>
                )}
                <InputGroup w={['300px', null, '400px']}>
                  {value ? (
                    <InputRightElement
                      pr={5}
                      pt={5}
                      // eslint-disable-next-line react/no-children-prop
                      children={
                        <AiFillEyeInvisible
                          color="#20ddbe"
                          size={20}
                          onClick={toggle}
                        />
                      }
                    />
                  ) : (
                    <InputRightElement
                      pr={5}
                      pt={5}
                      // eslint-disable-next-line react/no-children-prop
                      children={
                        <AiFillEye color="#20ddbe" size={20} onClick={toggle} />
                      }
                    />
                  )}
                  <Input
                    id="pwd"
                    h={'60px'}
                    type={value ? 'text' : 'password'}
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
                </InputGroup>
                {!isError ? (
                  <PwdHelper unverified={false} />
                ) : (
                  <PwdHelper unverified={true} />
                )}

                <InputGroup w={['300px', null, '400px']}>
                  {value ? (
                    <InputRightElement
                      pr={5}
                      pt={5}
                      // eslint-disable-next-line react/no-children-prop
                      children={
                        <AiFillEyeInvisible
                          color="#20ddbe"
                          size={20}
                          onClick={toggle}
                        />
                      }
                    />
                  ) : (
                    <InputRightElement
                      pr={5}
                      pt={5}
                      // eslint-disable-next-line react/no-children-prop
                      children={
                        <AiFillEye color="#20ddbe" size={20} onClick={toggle} />
                      }
                    />
                  )}
                  <Input
                    id="confirm_pwd"
                    placeholder="Confirm Password"
                    {...register('confirm_pwd', {
                      required: 'Password does not match',
                    })}
                    h={'60px'}
                    type={value ? 'text' : 'password'}
                    _placeholder={{
                      color: 'gray.400',
                    }}
                    _focus={{
                      borderColor: '#20ddbe',
                    }}
                  />
                </InputGroup>
                {isError && (
                  <FormErrorMessage fontSize={10} fontWeight={'medium'}>
                    {errors.confirm_pwd && errors.confirm_pwd.message}
                  </FormErrorMessage>
                )}
                <Button
                  w={['300px', null, '400px']}
                  h={'60px'}
                  color="white"
                  _hover={{ bg: 'teal.400' }}
                  bg="#20ddbe"
                  type="submit"
                >
                  Continue
                </Button>
                <Box
                  fontSize={10}
                  fontWeight={'medium'}
                  color={'#718096'}
                  w={['300px', null, '400px']}
                >
                  By creating an account, you agree to Susu’s
                  <span
                    style={{
                      color: ' #20ddbe',
                      textDecoration: 'underline',
                      margin: '0 4px',
                    }}
                  >
                    Privacy Policy,
                  </span>
                  <span
                    style={{
                      color: ' #20ddbe',
                      textDecoration: 'underline',
                      margin: '0 4px',
                    }}
                  >
                    Terms of Use
                  </span>
                  and
                  <span
                    style={{
                      color: ' #20ddbe',
                      textDecoration: 'underline',
                      margin: '0 4px',
                    }}
                  >
                    Cookie Policy
                  </span>
                  .
                </Box>
                <Box textAlign={'center'}>
                  <Link href={'/auth/login'}>
                    <Text color="#20ddbe" _hover={{ color: 'teal.400' }}>
                      Login instead
                    </Text>
                  </Link>
                </Box>
              </Stack>
            </FormControl>
          </form>
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
    </Stack>
  )
}

export default SignUp
