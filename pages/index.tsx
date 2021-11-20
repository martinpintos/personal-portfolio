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
  Divider,
  useColorMode,
  useColorModeValue,
  SimpleGrid,
} from "@chakra-ui/react";

import { ExternalLinkIcon } from "@chakra-ui/icons";

import Head from "next/head";

import {
  motion,
  AnimatePresence,
  AnimateSharedLayout,
  useAnimation,
} from "framer-motion";

const Index = () => {
  const { toggleColorMode } = useColorMode();
  const textShadowHeading = useColorModeValue(
    "rgba(0, 0, 0, 0.8) 0px 0px 3px",
    "#fff 0px 0px 3px"
  );
  const textShadowBody = useColorModeValue(
    "rgba(0, 0, 0, 0.6) 0px 0px 1px",
    "#fff 0px 0px 2px"
  );
  const backgroundCardColor = useColorModeValue("brand.500", "brand.800");
  const logoStyle = useColorModeValue(
    "drop-shadow(rgba(0, 0, 0, 0.8) 0px 0px 1px)",
    "drop-shadow(#fff 0px 0px 2px) invert(1)"
  );
  const shadowCard = useColorModeValue(
    "rgba(189, 218, 87, 1) 0px 0px 4px",
    "rgba(60, 72, 16, 1) 0px 0px 6px"
  );
  const dividerColor = useColorModeValue("black", "white");

  return (
    <>
      <Head>
        <title>Martín Pintos</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <AnimateSharedLayout>
        <Container
          maxW="container.xl"
          position="relative"
          left={{ base: "0", lg: "75px" }}
        >
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
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                as={motion.div}
                whileHover={{ scale: 1.2 }}
                onClick={toggleColorMode}
              >
                <Image
                  filter={logoStyle}
                  maxWidth="48px"
                  src="/images/logo2.svg"
                  alt="Logo"
                />
              </Box>
            </Link>
            <HStack
              textShadow={textShadowBody}
              initial={{ y: -100 }}
              animate={{ y: 0 }}
              as={motion.nav}
              spacing={{ base: 4, sm: 8, md: 16, lg: 24 }}
            >
              <Link
                fontWeight="500"
                fontSize={{ md: 18, xl: 20 }}
                as={motion.a}
                whileHover={{ scale: 1.2 }}
              >
                Works
              </Link>
              <Link
                fontSize={{ md: 18, xl: 20 }}
                fontWeight="500"
                as={motion.a}
                whileHover={{ scale: 1.2 }}
              >
                Experience
              </Link>
              <Link
                fontSize={{ md: 18, xl: 20 }}
                fontWeight="500"
                as={motion.a}
                whileHover={{ scale: 1.2 }}
              >
                Contact
              </Link>
            </HStack>
          </Flex>
          {/* <Image
            position="absolute"
            filter="saturate(40%)"
            maxW={{ base: "92%", md: "auto" }}
            h={{ base: "15%", md: "auto" }}
            top={{ base: 470, sm: 400 }}
            zIndex="-1"
            src="/images/graffiti.png"
            alt="Background graffiti"
          /> */}
          <Box maxW="container" mt={{ base: 8, sm: 0 }}>
            <Heading
              textShadow={textShadowHeading}
              lineHeight="1.15"
              letterSpacing="0px"
              initial={{ y: -200 }}
              animate={{ y: 0 }}
              as={motion.h1}
              fontSize={{ base: 79, sm: 100, md: 144 }}
              fontWeight="600"
            >
              I&#x27;m Martín, a creative developer based in Buenos Aires.
            </Heading>
          </Box>
          <Box
            mt="220px"
            fontWeight="400"
            initial={{ y: -200 }}
            animate={{ y: 0 }}
            as={motion.h1}
          >
            <Divider
              border="solid"
              borderColor={dividerColor}
              opacity="100"
              background={dividerColor}
              boxShadow="rgba(0, 0, 0, 0.8) 0px 0px 3px"
            />
            <Heading
              mt={0}
              mb={5}
              as="h2"
              fontWeight="medium"
              size="4xl"
              letterSpacing="-3px"
              textShadow={textShadowHeading}
            >
              Selected works
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
              <Box
                backgroundColor={backgroundCardColor}
                p={4}
                boxShadow={shadowCard}
              >
                <VStack>
                  <Image
                    mb={4}
                    src="https://place-hold.it/400x300"
                    alt="Project"
                  />
                  <Link
                    alignSelf="start"
                    href="https://chakra-ui.com"
                    isExternal
                  >
                    <Heading>
                      Todo App <ExternalLinkIcon mx="2px" fontSize="20px" />
                    </Heading>{" "}
                  </Link>
                  <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laudantium quia pariatur quidem unde, iusto explicabo,
                    quisquam magni ipsam maiores natus assumenda!
                  </Text>
                </VStack>
              </Box>
              <Box
                backgroundColor={backgroundCardColor}
                p={4}
                boxShadow={shadowCard}
              >
                <VStack>
                  <Image
                    mb={4}
                    src="https://place-hold.it/400x300"
                    alt="Project"
                  />
                  <Link
                    alignSelf="start"
                    href="https://chakra-ui.com"
                    isExternal
                  >
                    <Heading>
                      Todo App <ExternalLinkIcon mx="2px" fontSize="20px" />
                    </Heading>{" "}
                  </Link>
                  <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laudantium quia pariatur quidem unde, iusto explicabo,
                    quisquam magni ipsam maiores natus assumenda!
                  </Text>
                </VStack>
              </Box>
              <Box
                backgroundColor={backgroundCardColor}
                p={4}
                boxShadow={shadowCard}
              >
                <VStack>
                  <Image
                    mb={4}
                    src="https://place-hold.it/400x300"
                    alt="Project"
                  />
                  <Link
                    alignSelf="start"
                    href="https://chakra-ui.com"
                    isExternal
                  >
                    <Heading>
                      Todo App <ExternalLinkIcon mx="2px" fontSize="20px" />
                    </Heading>{" "}
                  </Link>
                  <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laudantium quia pariatur quidem unde, iusto explicabo,
                    quisquam magni ipsam maiores natus assumenda!
                  </Text>
                </VStack>
              </Box>
              <Box
                backgroundColor={backgroundCardColor}
                p={4}
                boxShadow={shadowCard}
              >
                <VStack>
                  <Image
                    mb={4}
                    src="https://place-hold.it/400x300"
                    alt="Project"
                  />
                  <Link
                    alignSelf="start"
                    href="https://chakra-ui.com"
                    isExternal
                  >
                    <Heading>
                      Todo App <ExternalLinkIcon mx="2px" fontSize="20px" />
                    </Heading>{" "}
                  </Link>
                  <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laudantium quia pariatur quidem unde, iusto explicabo,
                    quisquam magni ipsam maiores natus assumenda!
                  </Text>
                </VStack>
              </Box>
              <Box
                backgroundColor={backgroundCardColor}
                p={4}
                boxShadow={shadowCard}
              >
                <VStack>
                  <Image
                    mb={4}
                    src="https://place-hold.it/400x300"
                    alt="Project"
                  />
                  <Link
                    alignSelf="start"
                    href="https://chakra-ui.com"
                    isExternal
                  >
                    <Heading>
                      Todo App <ExternalLinkIcon mx="2px" fontSize="20px" />
                    </Heading>{" "}
                  </Link>
                  <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laudantium quia pariatur quidem unde, iusto explicabo,
                    quisquam magni ipsam maiores natus assumenda!
                  </Text>
                </VStack>
              </Box>
            </SimpleGrid>
          </Box>
          <Box
            mt="100px"
            fontWeight="400"
            initial={{ y: -200 }}
            animate={{ y: 0 }}
            as={motion.h1}
          >
            <Divider
              border="solid"
              borderColor={dividerColor}
              opacity="100"
              background={dividerColor}
              boxShadow="rgba(0, 0, 0, 0.8) 0px 0px 3px"
            />
            <Heading
              mt={0}
              mb={5}
              as="h2"
              fontWeight="medium"
              size="4xl"
              letterSpacing="-3px"
              textShadow={textShadowHeading}
            >
              Experience
            </Heading>
          </Box>
        </Container>
      </AnimateSharedLayout>
    </>
  );
};

export default Index;
