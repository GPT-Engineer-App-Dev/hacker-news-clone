import React from "react";
import { Box, Flex, Heading, Spacer, Link, Button, Text } from "@chakra-ui/react";

const Index = () => {
  return (
    <Box bg="white" minHeight="100vh">
      {/* Header */}
      <Flex as="header" align="center" py={4} px={8} borderBottomWidth={1} borderColor="gray.200">
        <Heading as="h1" size="lg" color="orange.500">
          Hacker News
        </Heading>
        <Spacer />
        <Flex as="nav" align="center" gap={4}>
          <Link href="#" color="orange.500">
            new
          </Link>
          <Link href="#" color="orange.500">
            past
          </Link>
          <Link href="#" color="orange.500">
            comments
          </Link>
          <Link href="#" color="orange.500">
            ask
          </Link>
          <Link href="#" color="orange.500">
            show
          </Link>
          <Link href="#" color="orange.500">
            jobs
          </Link>
          <Link href="#" color="orange.500">
            submit
          </Link>
        </Flex>
        <Spacer />
        <Button colorScheme="orange" size="sm">
          login
        </Button>
      </Flex>

      {/* Main Content */}
      <Box as="main" py={8} px={12}>
        {/* Stories list will be added here */}
        <Text>Stories list goes here</Text>
      </Box>

      {/* Footer */}
      <Flex as="footer" justify="center" py={4} borderTopWidth={1} borderColor="gray.200">
        <Text fontSize="sm" color="gray.500">
          &copy; {new Date().getFullYear()} Hacker News
        </Text>
      </Flex>
    </Box>
  );
};

export default Index;
