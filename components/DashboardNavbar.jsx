import { Flex, Text, Box, Image, Avatar } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Link } from "../utils";

const DashboardNavbar = () => {
  const router = useRouter();
  console.log(router);
  return (
    <Box
      zIndex="1000"
      bgGradient="linear(267.92deg, brand.dark 21.35%, brand.light 77.27%)"
      pos="fixed"
      top="0"
      w="100vw"
      h="224px"
      pt="45px"
    >
      <Flex className="container" align="center" justify="space-between">
        <Link href="/">
          <Image src="/icons/logo-white.svg" />
        </Link>
        <Flex align="center">
          <Flex align="top">
            <Link href="/wallet">
              <Text
                fontFamily="poppins"
                color={router.pathname === "/wallet" ? "#fff" : "rgba(255, 255, 255, 0.8)"}
                fontSize="15px"
                lineHeight="22px"
                opacity={router.pathname === "/wallet" ? "1" : "0.8"}
                borderBottom={router.pathname === "/wallet" && "2px solid #fff"}
                pb="2px"
                mr="32px"
              >
                Wallet
              </Text>
            </Link>
            <Link href="/transactions">
              <Text
                fontFamily="poppins"
                color={router.pathname === "/transactions" ? "#fff" : "rgba(255, 255, 255, 0.8)"}
                fontSize="15px"
                lineHeight="22px"
                pb="2px"
                opacity={router.pathname === "/transactions" ? "1" : "0.8"}
                borderBottom={router.pathname === "/transactions" && "2px solid #fff"}
              >
                Transactions
              </Text>
            </Link>
          </Flex>
          <Flex align="center" ml="98px">
            <Avatar
              name="Emmanuel Mang"
              bgColor="brand.light"
              boxSize="32px"
              color="rgba(255,255,255,0.8)"
              fontFamily="Poppins"
            />
            {/* <Text
                fontFamily="poppins"
                color="rgba(255, 255, 255, 0.8)"
                opacity="0.8"
                fontSize="15px"
                lineHeight="22px"
                ml="10px"
              >
                Emmanuel
              </Text> */}
          </Flex>
        </Flex>
      </Flex>
      <Text
        mt="80.5"
        fontFamily="poppins"
        color="#fff"
        fontWeight="500"
        lineHeight="30px"
        fontSize="20px"
        className="container"
      >
        Hello, Emmanuel
      </Text>
    </Box>
  );
};

export { DashboardNavbar };
