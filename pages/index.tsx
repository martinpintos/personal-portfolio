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
  Image,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  motion,
  AnimatePresence,
  AnimateSharedLayout,
  useAnimation,
} from "framer-motion";

const Index = () => {
  return (
    <>
      <AnimateSharedLayout type="crossfade">
        <Container maxW="container.xl">
          <Flex
            position="sticky"
            top="0"
            h={{ base: 16, lg: "88px" }}
            as="header"
            justifyContent="space-between"
            alignItems="center"
          >
            <Link textDecoration="none">
              <Box
                alignItems="center"
                initial={{ y: -50 }}
                animate={{ y: 0 }}
                as={motion.div}
              >
                <Image maxWidth="48px" src="/images/logo2.svg" alt="Logo" />
              </Box>
            </Link>
            <HStack
              initial={{ y: -50 }}
              animate={{ y: 0 }}
              as={motion.nav}
              spacing={{ base: 4, sm: 8, md: 16, lg: 24 }}
            >
              <Link fontSize={{ md: 18, xl: 20 }} fontWeight="500">
                Works
              </Link>
              <Link fontSize={{ md: 18, xl: 20 }} fontWeight="500">
                Experience
              </Link>
              <Link fontSize={{ md: 18, xl: 20 }} fontWeight="500">
                Contact
              </Link>
            </HStack>
          </Flex>
          <Box maxW="container" mt={{ base: 8, sm: 0 }}>
            <Heading
              lineHeight="1.15"
              initial={{ y: -50 }}
              animate={{ y: 0 }}
              as={motion.h1}
              fontSize={{ base: 74, sm: 100, md: 144 }}
              fontWeight="600"
            >
              I&#x27;m Martín, a Creative Developer based in Buenos Aires.
            </Heading>
          </Box>
          <Box mt="140px" fontWeight="400">
            <Heading my={6} as="h2" fontWeight="medium" size="4xl">
              Selected works
            </Heading>
          </Box>
        </Container>
        <Container h="600px" backgroundColor="green.500" maxWidth="100%">
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box>asda</Box>
            <Box>sadas</Box>
          </Stack>
        </Container>
      </AnimateSharedLayout>
    </>
  );
};

export default Index;
