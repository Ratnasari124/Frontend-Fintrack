'use client';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  useColorModeValue,
  Link,
} from '@chakra-ui/react';
import { useState } from 'react';
import NextLink from 'next/link';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const bgColor = useColorModeValue('gray.50', 'gray.800');
  const textColor = useColorModeValue('gray.700', 'white');

  const handleSubmit = () => {
    if (!email) {
      alert('Please enter your email');
      return;
    }
    console.log('Send reset link to:', email);
    // Call your API here
  };

  return (
    <Flex minH="100vh" bg={bgColor}>
      {/* Left Side - Form */}
      <Flex
        flex={1}
        direction="column"
        align="center"
        justify="center"
        px={8}
        py={12}
      >
        <Box maxW="sm" w="100%">
          <Heading fontSize="2xl" fontWeight="bold" color="blue.900" mb={2}>
            Forgot Password
          </Heading>
          <Text color="gray.500" mb={6}>
            Enter your Active Email
          </Text>

          <FormControl mb={4}>
            <FormLabel fontWeight="medium" color={textColor}>
              Email
            </FormLabel>
            <Input
              placeholder="Enter Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              bg="white"
            />
          </FormControl>

          <Text fontSize="sm" color="gray.500" mb={4}>
            We will send you a link to reset your password via email
          </Text>

          <NextLink href="/auth/send" passHref>
           <Button
                        fontSize="sm"
                        variant="brand"
                        fontWeight="500"
                        w="100%"
                        h="50"
                        mb="24px"
                      >
                        Send
          </Button>
          </NextLink>

          <Text fontSize="sm" color="gray.600" textAlign="center">
            <NextLink href="/auth/sign-in" passHref>
              <Link color="blue.500" fontWeight="medium">
                ← Back to Login
              </Link>
            </NextLink>
          </Text>
        </Box>
      </Flex>

      {/* Right Side - Image + Branding */}
      <Flex
  flex={1}
  backgroundImage="url('/img/auth/auth.png')" // ini bisa kamu ganti dengan file baru kalau perlu
  backgroundSize="cover"
  backgroundPosition="center"
  backgroundRepeat="no-repeat"
  align="center"
  justify="center"
  borderBottomLeftRadius="200px"
  p={10}
  direction="column"
>
</Flex>

    </Flex>
  );
}
