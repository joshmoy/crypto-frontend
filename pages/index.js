import Head from "next/head";
import { Flex, Image, Text } from "@chakra-ui/react";
import { useSession } from "next-auth/client";
import { Link } from "../utils";

export default function Home() {
  const [session, loading] = useSession();

  return (
    <Flex className="landing" justify="center" align="center" direction="column">
      <Image src="/icons/logo-white.svg" w="130px" />
      <Text fontFamily="Poppins" fontSize="50px" color="#fff" m="100px 0 50px">
        Since you are here...
      </Text>
      <Link href="/auth">
        <Text
          p="10px 20px"
          border="1px solid #fff"
          fontFamily="Poppins"
          fontSize="40px"
          borderRadius="4px"
          color="#fff"
        >
          Log in/Register
        </Text>
      </Link>
    </Flex>
  );
}
