import { Box, SimpleGrid, Text } from '@chakra-ui/react'
import { IoMdCheckmarkCircle } from 'react-icons/io'

const PwdHelper = ({ unverified }: { unverified: boolean }) => {
  return (
    <SimpleGrid spacing={1} columns={[1, null, 2]}>
      <Box
        bg={unverified ? '' : 'rgba(32, 221, 190, 0.2)'}
        borderRadius={5}
        display={'flex'}
        paddingY={1}
        paddingX={2}
        alignItems={'center'}
      >
        <Text
          textAlign={'left'}
          fontSize={10}
          fontWeight={'medium'}
          color={'#718096'}
          mr={2}
        >
          At least 8 characters
        </Text>
        <IoMdCheckmarkCircle color={unverified ? '#718096' : '#20ddbe'} />
      </Box>
      <Box
        bg={unverified ? '' : 'rgba(32, 221, 190, 0.2)'}
        display={'flex'}
        paddingY={1}
        paddingX={2}
        borderRadius={5}
        alignItems={'center'}
      >
        <Text
          textAlign={'left'}
          fontSize={10}
          fontWeight={'medium'}
          color={'#718096'}
          mr={2}
        >
          At least one number
        </Text>
        <IoMdCheckmarkCircle color={unverified ? '#718096' : '#20ddbe'} />
      </Box>
      <Box
        bg={unverified ? '' : 'rgba(32, 221, 190, 0.2)'}
        display={'flex'}
        paddingY={1}
        paddingX={2}
        borderRadius={5}
        alignItems={'center'}
      >
        <Text
          textAlign={'left'}
          fontSize={10}
          fontWeight={'medium'}
          color={'#718096'}
          mr={2}
        >
          At least one uppercase letter
        </Text>
        <IoMdCheckmarkCircle color={unverified ? '#718096' : '#20ddbe'} />
      </Box>
      <Box
        bg={unverified ? '' : 'rgba(32, 221, 190, 0.2)'}
        borderRadius={5}
        display={'flex'}
        paddingY={1}
        paddingX={2}
        alignItems={'center'}
      >
        <Text
          textAlign={'left'}
          fontSize={10}
          fontWeight={'medium'}
          color={'#718096'}
          mr={2}
        >
          At least one special character
        </Text>
        <IoMdCheckmarkCircle color={unverified ? '#718096' : '#20ddbe'} />
      </Box>
    </SimpleGrid>
  )
}

export default PwdHelper
