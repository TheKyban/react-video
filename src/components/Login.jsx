import { Button, Container, Heading, Input, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <Container maxW={'container.xl'} h={'100vh'} p={'16'}>

            <form >

                <VStack alignItems={'stretch'} spacing={'8'}
                    w={['full','96']} m={'auto'} my={'16'} >

                    <Heading>Welcome Back</Heading>

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

                    <Button variant={'link'} alignSelf={'flex-end'}>
                        <Link to="/forgetpassword">Forget Password</Link>
                    </Button>

                    <Button type='submit' colorScheme='purple'>
                        Log In
                    </Button>

                    <Text textAlign={'right'}>New User?{' '}
                        <Button colorScheme='purple' variant={'link'} >
                            <Link to="/signup"> Sign Up</Link>
                        </Button>
                    </Text>
                </VStack>
            </form>
        </Container>
    )
}

export default Login