import { useContext } from "react";
import { Flex, Text, Box, Image, Avatar } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Link, ScrollContext, ScrollContextProvider } from "../utils";
import { getSession, useSession } from "next-auth/client";
const DashboardNavbar = () => {
  return (
    <ScrollContextProvider>
      <DashboardNavbarChild />
    </ScrollContextProvider>
  );
};
const DashboardNavbarChild = () => {
  const { scroll, setScroll } = useContext(ScrollContext);
  const [session] = useSession();
  const router = useRouter();

  return (
    <Box
      zIndex="1000"
      bgGradient="linear(267.92deg, brand.dark 21.35%, brand.light 77.27%)"
      pos="fixed"
      top="0"
      w="100vw"
      className={scroll ? "nav nav-scrolled" : "nav"}
    >
      <Flex className="container" align="center" justify="space-between">
        <Link href="/wallet">
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
                color={
                  router.pathname.split("/")[1] === "transactions"
                    ? "#fff"
                    : "rgba(255, 255, 255, 0.8)"
                }
                fontSize="15px"
                lineHeight="22px"
                pb="2px"
                opacity={router.pathname.split("/")[1] === "transactions" ? "1" : "0.8"}
                borderBottom={router.pathname.split("/")[1] === "transactions" && "2px solid #fff"}
              >
                Transactions
              </Text>
            </Link>
          </Flex>
          <Flex align="center" ml="98px">
            <Avatar
              name={`${session?.user?.first_name} ${session?.user?.last_name}`}
              bgColor="brand.light"
              boxSize="32px"
              color="rgba(255,255,255,0.8)"
              fontFamily="Poppins"
            />
            {scroll && (
              <Text
                fontFamily="poppins"
                color="rgba(255, 255, 255, 0.8)"
                opacity="0.8"
                fontSize="15px"
                lineHeight="22px"
                ml="10px"
              >
                {session?.user?.first_name}
              </Text>
            )}
          </Flex>
        </Flex>
      </Flex>
      {!scroll && (
        <Text
          mt="80.5"
          fontFamily="poppins"
          color="#fff"
          fontWeight="500"
          lineHeight="30px"
          fontSize="20px"
          className="container"
        >
          {router.pathname === "/wallet" ? `Hello, ${session?.user?.first_name}` : "History"}
        </Text>
      )}
    </Box>
  );
};

export { DashboardNavbar };
