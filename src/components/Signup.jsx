import { Avatar, Button, Container, Heading, Input, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

function Signup() {
    return (
        <Container maxW={'container.xl'} h={'100vh'} p={'16'}>

            <form >

                <VStack alignItems={'stretch'} spacing={'7'}
                    w={['full', '96']} m={'auto'} my={'10'} >

                    <Heading textAlign={'center'}>VIDEO HUB</Heading>
                    <Avatar alignSelf={'center'} boxSize={'32'} />

                    <Input
                        placeholder='Name'
                        type='text'
                        focusBorderColor='purple.500'
                        required />
                    <Input
                        placeholder='Email'
                        type='email'
                        focusBorderColor='purple.500'
                        required />

                    <Input
                        placeholder='Password'
                        type='password'
                        focusBorderColor='purple.500'
                        required />



                    <Button type='submit' colorScheme='purple'>
                        Sign Up
                    </Button>

                    <Text textAlign={'right'}>Already User?{' '}
                        <Button colorScheme='purple' variant={'link'} >
                            <Link to="/login">Log in</Link>
                        </Button>
                    </Text>
                </VStack>
            </form>
        </Container>
    )
}


export default Signup