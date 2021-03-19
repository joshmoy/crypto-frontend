import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { createWallet } from "../queries";
import { toast } from "react-toastify";
import { useSession } from "next-auth/client";
const AddWallet = () => {
  const [session] = useSession();
  const handleAdd = async () => {
    try {
      const { data } = await createWallet(session?.user?.token);
      data.status === 201 ? toast.success("Wallet successfully created") : new Error();

      window.location.reload();
    } catch (error) {
      toast.error("Something went wrong");
    }
  };
  return (
    <Flex
      w="100%"
      boxShadow="0px 0px 15px rgba(163, 175, 191, 0.15)"
      borderRadius="2px"
      align="center"
      px="30px"
      h="88px"
      cursor="pointer"
      onClick={handleAdd}
    >
      <Flex boxSize="41px" borderRadius="50%" bg="brand.dark" align="center" justify="center">
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
