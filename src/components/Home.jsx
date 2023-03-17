import React from 'react'
import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'
import img4 from '../assets/4.jpg'
import img5 from '../assets/5.png'

const headingOptions = {
    pos: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%,-50%)',
    textTransform: 'uppercase',
    padding: '4',
    // size:'4xl'
}

function Home() {
    return (
        <Box>
            <MyCarousel />

            <Container maxW={'container.xl'} minH={'100vh'} p={'16'}>
                <Heading textTransform={'uppercase'} m={'auto'} py={'2'} w={'fit-content'} borderBottom={'2px solid'}>Services</Heading>
                <Stack
                    h={'full'}
                    alignItems={'center'}
                    direction={['column', 'row']}>

                    <Image src={img5} h={['40', '400']} marginTop={'3'} filter={'hue-rotate(-130deg)'} />

                    <Text
                        letterSpacing={'widest'}
                        lineHeight={'190%'}
                        p={['4', '16']}
                        textAlign={'center'}>
                        cumque architecto. Modi dolore alias animi eum accusamus magnam! Hic possimus ut sequi quidem nisi consectetur. Molestiae aliquam ipsum deleniti optio! Culpa, quam sint nostrum laudantium rerum, similique tempore quae aut ratione vel minima molestiae totam excepturi exercitationem harum eligendi, cum commodi ullam dicta ea odit impedit ab explicabo. Veritatis deserunt voluptatibus adipisci ratione rem cupiditate, incidunt dolorum vel? Earum impedit voluptas, delectus reprehenderit sit molestias iusto quisquam ullam beatae quibusdam aliquid expedita. Quia, ipsa eligendi voluptates illo natus quaerat quasi eaque? Obcaecati, veniam sit quis dignissimos laboriosam tenetur ipsum vero ratione error nostrum neque, facere asperiores nihil accusamus corrupti laudantium mollitia fuga? Ratione exercitationem totam dolorum dolores eos est consequuntur praesentium cupiditate a hic.
                    </Text>

                </Stack>
            </Container>
        </Box>
    )
}

const MyCarousel = () => {
    return (
        <Carousel
            autoPlay
            infiniteLoop
            interval={'1000'}
            showThumbs={false}
            showStatus={false}
            showArrows={false}>

            <Box w={'full'} h={'100vh'}>
                <Image src={img1} h={'full'} w="full" objectFit={'cover'} />
                <Heading bg={'blackAlpha.600'} color={'white'} {...headingOptions}>Watch The Future</Heading>
            </Box>

            <Box w={'full'} h={'100vh'}>
                <Image src={img2} h={'full'} w="full" objectFit={'cover'} />
                <Heading bg={'whiteAlpha.600'} color={'black'} {...headingOptions}>Future is Gaming</Heading>
            </Box>

            <Box w={'full'} h={'100vh'}>
                <Image src={img3} h={'full'} w="full" objectFit={'cover'} />
                <Heading bg={'whiteAlpha.600'} color={'black'} {...headingOptions}>Gaming on Console</Heading>
            </Box>

            <Box w={'full'} h={'100vh'}>
                <Image src={img4} h={'full'} w="full" objectFit={'cover'} />
                <Heading bg={'whiteAlpha.600'} color={'black'} {...headingOptions}>Night Life is good</Heading>
            </Box>

        </Carousel>
    )
}

export default Home