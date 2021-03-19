import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { createWallet } from "../queries";
import { toast } from "react-toastify";
const AddWallet = () => {
  const handleAdd = async () => {
    try {
      const res = await createWallet();
      console.log(res);
      toast.success("Wallet successfully created");
    } catch (error) {
      console.log({ error });
      toast.error(error.message || "Something went wrong");
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
