import { Flex, Text, Box, Image, Button } from "@chakra-ui/react";
import { Link } from "../utils";
import { signout, signOut } from "next-auth/client";
import { getSession, useSession } from "next-auth/client";

const Footer = () => {
  const [session] = useSession();
  return (
    <Box w="100vw" pos="absolute" bottom="0">
      <Flex className="container" h="125px" align="center" justify="space-between">
        <Link href="/">
          <Image src="/icons/crypto-logo.svg" />
        </Link>
        <Flex>
          <Link href="/">
            <Text fontFamily="poppins" color="brand.dark" fontSize="14px">
              Send/Receive crypto
            </Text>
          </Link>
          {session ? (
            <Text
              fontFamily="poppins"
              color="brand.dark"
              fontSize="15px"
              ml="10px"
              cursor="pointer"
              ml="16px"
              onClick={() => signOut({ callbackUrl: `${process.env.NEXT_PUBLIC_URL}/auth` })}
            >
              Logout
            </Text>
          ) : (
            <Link href="/auth">
              <Text fontFamily="poppins" color="brand.dark" fontSize="15px" ml="10px" ml="16px">
                Login/Register
              </Text>
            </Link>
          )}
        </Flex>
      </Flex>
    </Box>
  );
};

export { Footer };
