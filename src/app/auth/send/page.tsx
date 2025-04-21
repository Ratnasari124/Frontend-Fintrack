'use client';
import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import NextLink from 'next/link';

export default function ForgotPassword() {
  const bgColor = useColorModeValue('gray.50', 'gray.800');

  return (
    <Flex minH="100vh" bg={bgColor}>
      {/* Left Side - Message */}
      <Flex
        flex={1}
        direction="column"
        align="center"
        justify="center"
        px={8}
        py={12}
      >
        <Box maxW="sm" w="100%" textAlign="center">
          <Heading fontSize="2xl" fontWeight="bold" color="blue.900" mb={4}>
            Check Your Email and Reset Your Password. Log Back In Using the Button Below.
          </Heading>

          <NextLink href="/auth/sign-in" passHref>
             <Button
                          fontSize="sm"
                          variant="brand"
                          fontWeight="500"
                          w="100%"
                          h="50"
                          mb="24px"
                        >
                          Login
                        </Button>
          </NextLink>
        </Box>
      </Flex>

      {/* Right Side - Image + Branding */}
      <Flex
        flex={1}
        backgroundImage="url('/img/auth/auth.png')"
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        align="center"
        justify="center"
        borderBottomLeftRadius="200px"
        p={10}
      />
    </Flex>
  );
}
