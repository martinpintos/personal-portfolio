import { ReactNode } from "react";

import {
  Flex,
  Container,
  Box,
  AspectRatio,
  Text,
  Link,
  Stack,
  HStack,
  VStack,
  Heading,
  Img,
} from "@chakra-ui/react";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";

const Index = () => {
  return (
    <>
      <AnimateSharedLayout type="crossfade">
        <Container maxW="container.xl">
          <Flex
            position="sticky"
            top="0"
            h={16}
            as="header"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Img maxWidth="50px" src="/images/logo.png" />
            </Box>
            <HStack as={"nav"} spacing={{ base: 4, sm: 8, md: 16, lg: 24 }}>
              <Link fontWeight="600">Works</Link>
              <Link fontWeight="600">Experience</Link>
              <Link fontWeight="600">Contact</Link>
            </HStack>
          </Flex>
          <Box maxW="container">
            <Heading as="h1" fontSize={{ base: 74, sm: 100, md: 140 }}>
              I&#x27;m Martín, a Creative Developer based in Buenos Aires.
            </Heading>
          </Box>
          <Box
            mt={16}
            h="1200px"
            backgroundColor="green.500"
            fontWeight="400"
          ></Box>
        </Container>
      </AnimateSharedLayout>
    </>
  );
};

export default Index;
