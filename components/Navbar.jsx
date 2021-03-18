import { Flex, Text, Box, Image } from "@chakra-ui/react";
import { Link } from "../utils";

const Navbar = () => {
  return (
    <Box zIndex="1000" bgColor="rgba(255, 255, 255, 0.8)" pos="fixed" top="0" w="100vw">
      <Flex className="container" h="125px" align="center" justify="space-between">
        <Link href="/">
          <Image src="/icons/crypto-logo.svg" />
        </Link>
        <Flex>
          <Link href="/">
            <Text
              fontFamily="poppins"
              p="12px 20px"
              bgGradient="linear(267.92deg, brand.dark 21.35%, brand.light 77.27%)"
              borderRadius="4px"
              color="#fff"
              fontSize="15px"
            >
              Sell/Receive crypto
            </Text>
          </Link>
          <Link href="/auth">
            <Flex align="center" p="12px" border="1px solid #A3AFBF" borderRadius="4px" ml="16px">
              <Image src="/icons/Profile.svg" alt="login/register" h="14px" w="11px" />
              <Text fontFamily="poppins" color="brand.dark" fontSize="15px" ml="10px">
                Login/Register
              </Text>
            </Flex>
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export { Navbar };
