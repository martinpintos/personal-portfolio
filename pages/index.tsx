import { ReactNode } from "react";

import {
  Flex,
  Container,
  Box,
  AspectRatio,
  Image,
  Text,
  Link,
  Stack,
  HStack,
  VStack,
  Heading,
} from "@chakra-ui/react";

const Index = () => {
  return (
    <>
      <Container maxW="container.xl">
        <Flex
          position="sticky"
          top="0"
          h={16}
          as="header"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box>Logo</Box>
          <HStack as={"nav"} spacing={{ base: 4, sm: 8, md: 16, lg: 24 }}>
            <Link fontWeight="500">Works</Link>
            <Link fontWeight="500">Experience</Link>
            <Link fontWeight="500">Contact</Link>
          </HStack>
        </Flex>
        <Box maxW="container">
          <Heading as="h1" fontSize={{ base: 74, sm: 100, md: 140 }}>
            I'm Martín, a Creative Developer based in Buenos Aires.
          </Heading>
        </Box>
        <Box
          mt={8}
          h="1200px"
          backgroundColor="green.500"
          fontWeight="400"
        ></Box>
      </Container>
    </>
  );
};

export default Index;
