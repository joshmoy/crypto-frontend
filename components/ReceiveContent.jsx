import { useState } from "react";
import { Box, Input, Flex, Text, useClipboard } from "@chakra-ui/react";
import { AddWallet } from "./AddWallet";
const ReceiveContent = ({ wallet, setWallet, handleAdd }) => {
  const [value, setValue] = useState("asfas-34rtf-safe");
  const { hasCopied, onCopy } = useClipboard(value);
  return (
    <Box w="366px" m="0 auto">
      {wallet ? (
        <Box
          w="100%"
          boxShadow="0px 0px 15px rgba(163, 175, 191, 0.15)"
          borderRadius="2px"
          p="32px 32px 45px"
          mt="40px"
        >
          <Text
            color="rgba(6, 28, 91, 0.7)"
            fontFamily="Poppins"
            fontSize="14px"
            lineHeight="156%"
            mb="8px"
          >
            Your ETH wallet address
          </Text>
          <Flex h="42px" borderRadius="4px">
            <Input
              fontSize="14px"
              w="212px"
              id="amount"
              name="amount"
              type="text"
              isReadOnly
              border="1px solid rgba(6, 28, 91, 0.07)"
              borderRight="none"
              borderTopRightRadius="0"
              borderBottomRightRadius="0"
              h="42px"
              p="0 16px"
              value={value}
              fontFamily="Poppins"
              color="rgba(6, 28, 91, 0.7)"
              _focus={{ boxShadow: "none" }}
            />
            <Flex
              bgGradient="linear(267.92deg, brand.dark 21.35%, brand.light 77.27%)"
              w="90px"
              h="42px"
              borderTopRightRadius="4px"
              borderBottomRightRadius="4px"
              align="center"
              justify="center"
              onClick={onCopy}
              cursor="pointer"
            >
              <Text
                color="#fff"
                fontFamily="Poppins"
                fontSize="14px"
                lineHeight="156%"
                opacity="0.9"
              >
                {hasCopied ? "Copied" : "Copy"}
              </Text>
            </Flex>
          </Flex>
        </Box>
      ) : (
        <AddWallet handleAdd={handleAdd} />
      )}
    </Box>
  );
};

export { ReceiveContent };
