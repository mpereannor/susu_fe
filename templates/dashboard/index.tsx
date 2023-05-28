import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Spacer,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
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
        defaultIndex={1}
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

            <Box bg={bg} borderRadius={15} width={'55%'}>
              <Text>Hello</Text>
            </Box>
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
        </TabPanels>
      </Tabs>
    </Flex>
  )
}

export default Dashboard
