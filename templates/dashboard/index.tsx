import {
  Box,
  Button,
  Card,
  CardBody,
  Flex,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  Spacer,
  Stack,
  StackDivider,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tag,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { AiOutlineSearch } from 'react-icons/ai'
import Tables from '../tables'

const Dashboard = () => {
  const bg = useColorModeValue('white', 'susuColor')
  const panelBg = useColorModeValue('rgba(160, 174, 192, 0.2)', '#93a0b0')

  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      borderWidth={0}
      overflowX="auto"
    >
      <Tabs
        defaultIndex={0}
        borderBottomColor="transparent"
        isLazy
        colorScheme="telegram"
      >
        <TabList>
          <Tab
            py={4}
            m={0}
            _focus={{
              boxShadow: 'none',
            }}
            fontSize={'xl'}
            fontWeight={'medium'}
          >
            Clients
          </Tab>
          <Tab
            py={4}
            m={0}
            _focus={{
              boxShadow: 'none',
            }}
            fontSize={'xl'}
            fontWeight={'medium'}
          >
            Deposits
          </Tab>
          <Tab
            py={4}
            m={0}
            _focus={{
              boxShadow: 'none',
            }}
            fontSize={'xl'}
            fontWeight={'medium'}
          >
            Withdrawals
          </Tab>
          <Tab
            py={4}
            m={0}
            _focus={{
              boxShadow: 'none',
            }}
            fontSize={'xl'}
            fontWeight={'medium'}
          >
            Savings
          </Tab>
          <Tab
            py={4}
            m={0}
            _focus={{
              boxShadow: 'none',
            }}
            fontSize={'xl'}
            fontWeight={'medium'}
          >
            Loans
          </Tab>
          <Tab
            m={0}
            _focus={{
              boxShadow: 'none',
            }}
            fontSize={'xl'}
            fontWeight={'medium'}
          >
            Reports
          </Tab>
        </TabList>
        <TabIndicator bg="secondary.500" />
        <TabPanels>
          <TabPanel
            width="100vw"
            minH={'100vh'}
            paddingY={'40px'}
            bg={panelBg}
            display="flex"
            justifyContent="space-around"
          >
            <Flex
              flexDirection={'column'}
              bg={bg}
              borderRadius={15}
              width={'40%'}
            >
              <Flex padding={5}>
                <Button
                  h={'40px'}
                  color="white"
                  _hover={{ bg: 'teal.400' }}
                  bg="#20ddbe"
                  type="submit"
                >
                  Register New Client
                </Button>
                <Spacer />
                <InputGroup w={['200px']}>
                  <Input
                    type="text"
                    placeholder="Search for client"
                    _focus={{
                      borderColor: 'primary.500',
                    }}
                  />
                  <InputRightElement pointerEvents="none">
                    <AiOutlineSearch />
                  </InputRightElement>
                </InputGroup>
              </Flex>
              <Box padding={2}>
                <Tables />
              </Box>
            </Flex>

            <Flex
              flexDirection={'column'}
              bg={bg}
              borderRadius={15}
              width={'55%'}
            >
              <Card>
                <CardBody>
                  <Stack divider={<StackDivider />} spacing="4">
                    <Box>
                      <Heading size="xs" textTransform="uppercase">
                        Clients
                      </Heading>
                      <HStack alignItems={'baseline'}>
                        <Text pt="2" fontSize="sm">
                          Clients Today
                        </Text>
                        <Tag colorScheme={'telegram'} size={'sm'}>
                          24
                        </Tag>
                      </HStack>
                      <HStack mb={4} alignItems={'baseline'}>
                        <Text pt="2" fontSize="sm">
                          Total Clients
                        </Text>
                        <Tag colorScheme={'telegram'} size={'sm'}>
                          1200
                        </Tag>
                      </HStack>
                      <Text pt="2" mb={2} fontSize="sm">
                        View a summary of all your customers over the last
                        month.
                      </Text>
                      <Button colorScheme={'telegram'} size={'sm'}>
                        View Clients
                      </Button>
                    </Box>
                    <Box>
                      <Heading size="xs" textTransform="uppercase">
                        Deposits
                      </Heading>
                      <HStack alignItems={'baseline'}>
                        <Text pt="2" fontSize="sm">
                          Deposits Today
                        </Text>
                        <Tag colorScheme={'telegram'} size={'sm'}>
                          GHS 5, 200. 00
                        </Tag>
                      </HStack>
                      <HStack mb={4} alignItems={'baseline'}>
                        <Text pt="2" fontSize="sm">
                          Week&apos;s Deposit
                        </Text>
                        <Tag colorScheme={'telegram'} size={'sm'}>
                          GHS 110, 800. 00
                        </Tag>
                      </HStack>
                      <Text pt="2" mb={2} fontSize="sm">
                        View a summary of all your deposits over the last month.
                      </Text>
                      <Button colorScheme={'telegram'} size={'sm'}>
                        View Deposits
                      </Button>
                    </Box>
                    <Box>
                      <Heading size="xs" textTransform="uppercase">
                        Withdrawals
                      </Heading>
                      <HStack alignItems={'baseline'}>
                        <Text pt="2" fontSize="sm">
                          Withdrawals Today
                        </Text>
                        <Tag colorScheme={'telegram'} size={'sm'}>
                          GHS 5, 200. 00
                        </Tag>
                      </HStack>
                      <HStack mb={4} alignItems={'baseline'}>
                        <Text pt="2" fontSize="sm">
                          Week&apos;s Withdrawals
                        </Text>
                        <Tag colorScheme={'telegram'} size={'sm'}>
                          GHS 110, 800. 00
                        </Tag>
                      </HStack>
                      <Text pt="2" mb={2} fontSize="sm">
                        View a summary of all your deposits over the last month.
                      </Text>
                      <Button colorScheme={'telegram'} size={'sm'}>
                        View Deposits
                      </Button>
                    </Box>
                    <Box>
                      <Heading size="xs" textTransform="uppercase">
                        Savings
                      </Heading>
                      <HStack mb={4} alignItems={'baseline'}>
                        <Text pt="2" fontSize="sm">
                          Savings Today
                        </Text>
                        <Tag colorScheme={'telegram'} size={'sm'}>
                          GHS 6, 000. 00
                        </Tag>
                      </HStack>
                      <HStack mb={4} alignItems={'baseline'}>
                        <Text pt="2" fontSize="sm">
                          Week&apos;s Savings
                        </Text>
                        <Tag colorScheme={'telegram'} size={'sm'}>
                          GHS 4, 400, 000. 00
                        </Tag>
                      </HStack>
                      <Text pt="2" mb={2} fontSize="sm">
                        View a summary of all your savings over the last month.
                      </Text>
                      <Button colorScheme={'telegram'} size={'sm'}>
                        View Savings
                      </Button>
                    </Box>
                    <Box>
                      <Heading size="xs" textTransform="uppercase">
                        Loans
                      </Heading>
                      <HStack alignItems={'baseline'}>
                        <Text pt="2" fontSize="sm">
                          Loans Today
                        </Text>
                        <Tag colorScheme={'telegram'} size={'sm'}>
                          GHS 6, 000. 00
                        </Tag>
                      </HStack>

                      <HStack mb={4} alignItems={'baseline'}>
                        <Text pt="2" fontSize="sm">
                          Week&apos;s Loans
                        </Text>
                        <Tag colorScheme={'telegram'} size={'sm'}>
                          GHS 4, 400, 000. 00
                        </Tag>
                      </HStack>
                      <Text pt="2" mb={2} fontSize="sm">
                        View a summary of all your loans over the last month.
                      </Text>
                      <Button colorScheme={'telegram'} size={'sm'}>
                        View Loans
                      </Button>
                    </Box>
                  </Stack>
                </CardBody>
              </Card>
            </Flex>
          </TabPanel>
          <TabPanel>
            <Text>belong2</Text>
          </TabPanel>
          <TabPanel>
            <Text>belong3</Text>
          </TabPanel>
          <TabPanel>
            <Text>belong4</Text>
          </TabPanel>
          <TabPanel>
            <Text>belong5</Text>
          </TabPanel>
          <TabPanel>
            <Text>belong6</Text>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  )
}

export default Dashboard
