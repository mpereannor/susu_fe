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
  VStack,
} from '@chakra-ui/react'
import { Fragment, useCallback, useState } from 'react'
import { AiOutlineArrowRight, AiOutlineEdit } from 'react-icons/ai'
import { BsFillTrashFill } from 'react-icons/bs'
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io'
import useToggle from '../../hooks/useToggle'
import { ButtonData } from '../../types/dashboard'

const defaultButtons: ButtonData[] = [
  { id: 1, name: 'Baba Loki', balance: 'GHS 2,500,000' },
  { id: 2, name: 'Marcus Gray', balance: 'GHS 800, 000' },
  { id: 3, name: 'Selasi Gran', balance: 'GHS 6, 700, 00' },
]

const Tables = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [value, toggle] = useToggle()

  const [toggledButtonId, setToggledButtonId] = useState<number | null>(null)
  const toggleButton = useCallback((button: ButtonData) => {
    setToggledButtonId((prevState) =>
      prevState === button.id ? null : button.id
    )
  }, [])

  return (
    <TableContainer maxWidth={'100%'}>
      <Table variant="simple" colorScheme="telegram">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Balance</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {defaultButtons.map((button) => {
            const isToggled = button.id === toggledButtonId
            return (
              <Fragment key={button.id}>
                <Tr>
                  <Td
                    _hover={{
                      color: 'secondary.500',
                      cursor: 'pointer',
                    }}
                    onClick={() => toggleButton(button)}
                  >
                    {isToggled ? (
                      <HStack onClick={toggle}>
                        <Text>{button.name}</Text>
                        <IoIosArrowDown />
                      </HStack>
                    ) : (
                      <HStack onClick={toggle}>
                        <Text>{button.name}</Text>
                        <IoIosArrowForward />
                      </HStack>
                    )}
                  </Td>{' '}
                  <Td fontWeight={'semibold'}>{button.balance}</Td>
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
                <Tr
                  bg={'secondary.50'}
                  display={isToggled ? 'table-row' : 'none'}
                >
                  <Td>
                    <VStack w={'100%'} gap={2} align={'flex-start'}>
                      <HStack
                        _hover={{
                          color: 'secondary.500',
                          cursor: 'pointer',
                        }}
                      >
                        <Text>View Profile</Text>
                        <AiOutlineArrowRight />
                      </HStack>
                      <HStack
                        _hover={{
                          color: 'secondary.500',
                          cursor: 'pointer',
                        }}
                      >
                        <Text>View Deposits</Text>
                        <AiOutlineArrowRight />
                      </HStack>
                      <HStack
                        _hover={{
                          color: 'secondary.500',
                          cursor: 'pointer',
                        }}
                      >
                        <Text>View Withdrawals</Text>
                        <AiOutlineArrowRight />
                      </HStack>
                      <HStack
                        _hover={{
                          color: 'secondary.500',
                          cursor: 'pointer',
                        }}
                      >
                        <Text>View Savings</Text>
                        <AiOutlineArrowRight />
                      </HStack>
                    </VStack>
                  </Td>
                  <Td></Td>
                  <Td></Td>
                </Tr>
              </Fragment>
            )
          })}
        </Tbody>
      </Table>
    </TableContainer>
  )
}

export default Tables
