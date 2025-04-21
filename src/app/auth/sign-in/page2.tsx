///src/app/auth/sign-in/page.tsx
"use client";
import { useRouter } from "next/navigation";

import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();
  const router = useRouter();

  return (
    <Flex minH="100vh" align="center" justify="center" bg="gray.50">
      <Flex w="full" maxW="1200px" bg="white" borderRadius="lg" overflow="hidden" boxShadow="xl">
        {/* Left Side */}
        <Box flex="1" p={{ base: 8, md: 16 }}>
          <Link color="blue.500" onClick={() => router.push("/")}>
            ← Back to dashboard
          </Link>
          <Heading mb={4}>Login</Heading>
          <Text mb={6} color="gray.500">
            Enter your email and password to sign in!
          </Text>

          <FormControl id="username" mb={4} isRequired>
            <FormLabel>Username</FormLabel>
            <Input type="text" placeholder="Masukkan Username Anda" />
          </FormControl>

          <FormControl id="password" mb={4} isRequired>
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Min. 8 characters"
              />
              <InputRightElement>
                <IconButton
                  aria-label="Toggle password visibility"
                  icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
                  size="sm"
                  onClick={() => setShowPassword(!showPassword)}
                />
              </InputRightElement>
            </InputGroup>
          </FormControl>

          <Flex align="center" justify="space-between" mb={4}>
            <Checkbox defaultChecked>Keep me logged in</Checkbox>
            <Link color="blue.500">Forgot password?</Link>
          </Flex>

          <Button colorScheme="purple" width="full">
            Login
          </Button>
        </Box>

        {/* Right Side */}
        <Flex
          flex="1"
          align="center"
          justify="center"
          bgGradient="linear(to-br, blue.600, purple.600)"
          position="relative"
          display={{ base: "none", md: "flex" }}
        >
          <Flex direction="column" align="center" justify="center">
  <Box
    boxSize="200px"
    bg="white"
    borderRadius="full"
    display="flex"
    alignItems="center"
    justifyContent="center"
    overflow="hidden"
    mb={4}
    border="4px solid white"       
    boxShadow="md"
  >
    <Image
      src="/img/auth/auth.png"           
      alt="FinTrack Logo"
      boxSize="250px"
      objectFit="contain"            
    />
  </Box>

  <Text fontSize="3xl" fontWeight="bold" color="white">
    FinTrack
  </Text>
</Flex>


          <IconButton
            icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            position="absolute"
            bottom="4"
            right="4"
            onClick={toggleColorMode}
            aria-label="Toggle color mode"
          />
        </Flex>
      </Flex>
    </Flex>
  );
}
