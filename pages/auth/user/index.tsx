import { Box, Center } from '@chakra-ui/react'
import { useSession } from 'next-auth/react'
import SimpleSpinner from '../../components/elements/spinner/SimpleSpinner'
import Login from '../login'

export default function User() {
  const { data, status } = useSession()
  if (status === 'loading') {
    return (
      <Center w="100%" h="100vh">
        <SimpleSpinner />
      </Center>
    )
  }
  if (status === 'authenticated') {
    return (
      <Center w="100%" h="100vh" >
        <Box display={"flex"} justifyContent="space-between">

        <h1>{data?.user?.name}</h1>

        <form method="post" action="/api/auth/signout">
          <button type="submit">Sign out</button>
        </form>
        </Box>
      </Center>
    )
  }
  return (
      <Login />
  )
}
