import { Flex, Text, Box, Image } from "@chakra-ui/react";
import { Link } from "../utils";

const Footer = () => {
  return (
    <Box w="100vw" pos="absolute" bottom="0">
      <Flex className="container" h="125px" align="center" justify="space-between">
        <Link href="/">
          <Image src="/icons/crypto-logo.svg" />
        </Link>
        <Flex>
          <Link href="/">
            <Text fontFamily="poppins" color="brand.dark" fontSize="14px">
              Sell/Receive crypto
            </Text>
          </Link>
          <Link href="/auth">
            <Text fontFamily="poppins" color="brand.dark" fontSize="15px" ml="10px" ml="16px">
              Login/Register
            </Text>
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export { Footer };
