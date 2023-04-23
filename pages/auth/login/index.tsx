// import { Stack, useColorModeValue } from "@chakra-ui/react"
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
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useForm } from 'react-hook-form'
import Image from 'next/image'
import susuAuthPic from '../../../assets/susu_auth.svg'
import useToggle from '../../../hooks/useToggle'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import Link from 'next/link'

const Login = () => {
  const [value, toggle] = useToggle()

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
              <Stack spacing={10} align={'center'}>
                <Input
                  w={['300px', null, '400px']}
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
                    h={'60px'}
                    id="pwd"
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

                <FormErrorMessage>
                  {errors.username && errors.username.message}
                </FormErrorMessage>

                <Button
                  w={['300px', null, '400px']}
                  h={'60px'}
                  color="white"
                  _hover={{ bg: 'teal.400' }}
                  bg="#20ddbe"
                >
                  Continue
                </Button>
                <Box display={'flex'} justifyContent="center">
                  <Text size="12px" fontWeight={500} marginRight={4}>
                    New here?
                  </Text>
                  <Link href={'/auth/signup'}>
                    <Text color="#20ddbe" _hover={{ color: 'teal.400' }}>
                      Create an account
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
export default Login
