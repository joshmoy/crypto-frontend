import { useState } from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { createWallet } from "../queries";
import { toast } from "react-toastify";
import { useSession } from "next-auth/client";
import { Shadows } from "./Shadows";
const AddWallet = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [session] = useSession();
  const handleAdd = async () => {
    try {
      setIsLoading(true);
      const { data } = await createWallet(session?.user?.token);
      data.status === 201
        ? toast.success("Wallet successfully created")
        : new Error();

      window.location.reload();
    } catch (error) {
      setIsLoading(false);
      toast.error("Something went wrong");
    }
  };

  return (
    <Flex
      w="100%"
      pos="relative"
      boxShadow="0px 0px 15px rgba(163, 175, 191, 0.15)"
      borderRadius="2px"
      align="center"
      px="30px"
      h="88px"
      cursor="pointer"
      onClick={handleAdd}
    >
      {isLoading && (
        <Flex
          top="0"
          left="0"
          pos="absolute"
          w="100%"
          px="30px"
          h="88px"
          alignItems="center"
          cursor="not-allowed"
          bg="white"
          opacity="0.8"
        >
          <Box className="spinner"></Box>
        </Flex>
      )}
      <Flex
        boxSize="41px"
        borderRadius="50%"
        bg="brand.dark"
        align="center"
        justify="center"
      >
        <Image src="/icons/plus.svg" w="15px" />
      </Flex>
      <Box ml="16px">
        <Text
          fontFamily="Poppins"
          fontSize="16px"
          fontWeight="600"
          lineHeight="24px"
          color="brand.dark"
          mb="6px"
        >
          Add ETH wallet
        </Text>
        <Text
          fontFamily="Poppins"
          fontSize="14px"
          fontWeight="500"
          lineHeight="21px"
          color="#979797"
        >
          Expand your digital asset
        </Text>
      </Box>
    </Flex>
  );
};

export { AddWallet };
