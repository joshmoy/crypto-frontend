import Head from "next/head";
import { Flex, Image } from "@chakra-ui/react";
import { useSession } from "next-auth/client";

export default function Home() {
  const [session, loading] = useSession();

  return (
    <Flex className="landing" justify="center">
      <Image src="/icons/logo-white.svg" w="130px" />
    </Flex>
  );
}
