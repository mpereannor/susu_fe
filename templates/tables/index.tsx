import {
  Table,
  TableContainer,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  ButtonGroup,
  Flex,
  IconButton,
  HStack,
  Text,
} from '@chakra-ui/react'
import { AiOutlineEdit } from 'react-icons/ai'
import { BsFillTrashFill } from 'react-icons/bs'
import { IoIosArrowForward } from 'react-icons/io'

const Tables = () => {
  return (
    <TableContainer>
      <Table variant="simple" colorScheme="telegram">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Balance</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td
              _hover={{
                color: 'secondary.500',
                cursor: 'pointer',
              }}
            >
              <HStack>
                <Text>Baba Loki</Text>
                <IoIosArrowForward />
              </HStack>
            </Td>
            <Td fontWeight={'semibold'}>GHS 2, 500, 000</Td>
            <Td
              _hover={{
                color: 'secondary.500',
                cursor: 'pointer',
              }}
            >
              <Flex
                justify={{
                  md: 'end',
                }}
              >
                <ButtonGroup variant="outline" size="sm" spacing={3}>
                  <IconButton
                    colorScheme="gray"
                    icon={<AiOutlineEdit />}
                    aria-label="Edit"
                  />
                  <IconButton
                    colorScheme="gray"
                    variant="outline"
                    icon={<BsFillTrashFill />}
                    aria-label="Delete"
                  />
                </ButtonGroup>
              </Flex>
            </Td>
          </Tr>
          <Tr>
            <Td
              _hover={{
                color: 'secondary.500',
                cursor: 'pointer',
              }}
            >
              <HStack>
                <Text>John Kwofie</Text>
                <IoIosArrowForward />
              </HStack>
            </Td>
            <Td fontWeight={'semibold'}>GHS 9,000,000</Td>
            <Td>
              <Flex
                justify={{
                  md: 'end',
                }}
              >
                <ButtonGroup variant="outline" size="sm" spacing={3}>
                  <IconButton
                    colorScheme="gray"
                    icon={<AiOutlineEdit />}
                    aria-label="Edit"
                  />
                  <IconButton
                    colorScheme="gray"
                    variant="outline"
                    icon={<BsFillTrashFill />}
                    aria-label="Delete"
                  />
                </ButtonGroup>
              </Flex>
            </Td>
          </Tr>
          <Tr>
            <Td
              _hover={{
                color: 'secondary.500',
                cursor: 'pointer',
              }}
            >
              {' '}
              <HStack>
                <Text>George Mensah</Text>
                <IoIosArrowForward />
              </HStack>
            </Td>
            <Td fontWeight={'semibold'}>GHS 8, 000, 000</Td>
            <Td>
              <Flex
                justify={{
                  md: 'end',
                }}
              >
                <ButtonGroup variant="outline" size="sm" spacing={3}>
                  <IconButton
                    colorScheme="gray"
                    icon={<AiOutlineEdit />}
                    aria-label="Edit"
                  />
                  <IconButton
                    colorScheme="gray"
                    variant="outline"
                    icon={<BsFillTrashFill />}
                    aria-label="Delete"
                  />
                </ButtonGroup>
              </Flex>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  )
}

export default Tables
