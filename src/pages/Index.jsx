import React, { useState, useEffect } from 'react';
import { Box, Text, Flex } from '@chakra-ui/react';

const Index = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Flex
      height="100vh"
      align="center"
      justify="center"
      bg="gray.900"
      color="white"
    >
      <Box textAlign="center">
        <Text fontSize={{ base: "6xl", md: "9xl" }} fontFamily="monospace">
          {time.toLocaleTimeString()}
        </Text>
      </Box>
    </Flex>
  );
};

export default Index;