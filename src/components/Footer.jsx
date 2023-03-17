import React from 'react'
import { Box, Button, HStack, Heading, Input, Stack, Text, VStack } from '@chakra-ui/react'
import { AiOutlineSend } from 'react-icons/ai'

function Footer() {
    return (
        <Box bg={'blackAlpha.900'} minH={'35'} p={'16'} color={'white'}>

            <Stack direction={['column', 'row']}>

                <VStack 
                alignItems={'strech'}
                w={'full'}
                p={'4'}>

                    <Heading size={'md'}
                    textTransform={'uppercase'}
                    textAlign={['center','left']}
                    >
                        Subscribe to get updates
                    </Heading>

                    <HStack
                        borderBottom={'2px solid white'}
                        paddingY={'2'}
                    >

                        <Input
                            placeholder={'Enter email here...'}
                            border={'none'} borderRadius={'none'}
                            outline={'none'}
                            focusBorderColor='none'
                        />

                        <Button
                            p={'0'}
                            colorScheme={'purple'}
                            variant={'ghost'}
                            borderRadius={'0 20px 20px 0'}
                        >
                            <AiOutlineSend />
                        </Button>

                    </HStack>
                </VStack>

                <VStack
                w={'full'}
                borderLeft={['none','1px solid white']}
                borderRight={['none','1px solid white']}>

                    <Heading textTransform={'uppercase'} textAlign={'center'}>
                        VIDEO HUB
                    </Heading>

                    <Text>All right reserved</Text>
                </VStack>

                <VStack
                w={'full'}>
                    <Heading size={'md'} textTransform={'uppercase'}>
                        Social Media
                    </Heading>
                    <Button variant={'link'} color={'whiteAlpha'}>
                        <a href='www.github.com/TheKyban'>GitHub</a>
                    </Button>

                    <Button variant={'link'} color={'whiteAlpha'}>
                        <a href='www.instagram.com/aditya_kr_chaudhary'>Instagram</a>
                    </Button>

                    <Button variant={'link'} color={'whiteAlpha'}>
                        <a href='www.linkdin.com/TheKyban'>Linkdin</a>
                    </Button>
                </VStack>

            </Stack>

        </Box>
    )
}

export default Footer