import {
    Box,
    Flex,
    HStack,
    Link,
    IconButton,
    useDisclosure,
    useColorModeValue,
    Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { NavLink, useNavigate } from 'react-router-dom';

const Links = [ 'Dashboard', 'Find Job', 'Post Job' ,"Applied Job", "Posted Job"];


export const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const navigate = useNavigate();

    return (
        <>
            <Box bg={ useColorModeValue('gray.100', 'gray.900') } px={ 4 }>
                <Flex h={ 16 } alignItems={ 'center' } justifyContent={ 'space-between' }>
                    <IconButton
                        size={ 'md' }
                        icon={ isOpen ? <CloseIcon /> : <HamburgerIcon /> }
                        aria-label={ 'Open Menu' }
                        display={ { md: 'none' } }
                        onClick={ isOpen ? onClose : onOpen }
                    />
                    <HStack spacing={ 8 } alignItems={ 'center' }>
                        {/* <Box>Logo</Box> */}
                        <HStack
                            as={ 'nav' }
                            spacing={ 4 }
                            display={ { base: 'none', md: 'flex' } }>
                            {/* <Link px={ 2 }
                                py={ 1 }
                                rounded={ 'md' }
                                _hover={ {
                                    textDecoration: 'none',
                                    bg: useColorModeValue('gray.200', 'gray.700'),
                                } } key={ 1 } onClick={ () => { navigate('/'); } }>{ 'Dashboard' }</Link> */}
                            <Link px={ 2 }
                                py={ 1 }
                                rounded={ 'md' }
                                _hover={ {
                                    textDecoration: 'none',
                                    bg: useColorModeValue('gray.200', 'gray.700'),
                                } } key={ 2 } onClick={ () => { navigate('/jobs'); } }>{ "Find Job" }</Link>
                            <Link px={ 2 }
                                py={ 1 }
                                rounded={ 'md' }
                                _hover={ {
                                    textDecoration: 'none',
                                    bg: useColorModeValue('gray.200', 'gray.700'),
                                } } key={ 3 } onClick={ () => { navigate('/post/job'); } }>{ "Post Job" }</Link>
                            <Link px={ 2 }
                                py={ 1 }
                                rounded={ 'md' }
                                _hover={ {
                                    textDecoration: 'none',
                                    bg: useColorModeValue('gray.200', 'gray.700'),
                                } } key={ 3 } onClick={ () => { navigate('/'); } }>{ "Applied Job" }</Link>
                            <Link px={ 2 }
                                py={ 1 }
                                rounded={ 'md' }
                                _hover={ {
                                    textDecoration: 'none',
                                    bg: useColorModeValue('gray.200', 'gray.700'),
                                } } key={ 3 } onClick={ () => { navigate('/'); } }>{ "Posted Job" }</Link>
                        </HStack>
                    </HStack>
                </Flex>

                { isOpen ? (
                    <Box pb={ 4 } display={ { md: 'none' } }>
                        <Stack as={ 'nav' } spacing={ 4 }>
                            { Links.map((link) => (
                                <NavLink key={ link }>{ link }</NavLink>
                            )) }
                        </Stack>
                    </Box>
                ) : null }
            </Box>

        </>
    );
}