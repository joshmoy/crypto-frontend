import { useState } from "react";
import { Box, Text, Flex, Image } from "@chakra-ui/react";
import { Link } from "../utils";

import { AddWallet } from "./AddWallet";
const WalletContent = ({ wallet, setWallet, handleAdd }) => {
  return (
    <Box m="48px auto 0" w="345px">
      <Box>
        <Text
          fontFamily="Poppins"
          fontSize="14px"
          lineHeight="21px"
          color="brand.gray"
          opacity="0.8"
          mb="16px"
        >
          Local currency
        </Text>
        <Flex
          w="100%"
          boxShadow="0px 0px 15px rgba(163, 175, 191, 0.15)"
          borderRadius="2px"
          align="center"
          px="30px"
          h="88px"
        >
          <Flex boxSize="41px" borderRadius="50%" bg="#399B66" align="center" justify="center">
            <Image src="/icons/newNaira.svg" w="15px" />
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
              ETH 0.0000500
            </Text>
            <Text
              fontFamily="Poppins"
              fontSize="14px"
              fontWeight="500"
              lineHeight="21px"
              color="#979797"
            >
              NGN 0.0000
            </Text>
          </Box>
        </Flex>
      </Box>
      <Box mt="40px">
        <Text
          fontFamily="Poppins"
          fontSize="14px"
          lineHeight="21px"
          color="brand.gray"
          opacity="0.8"
          mb="16px"
        >
          Crypto currency
        </Text>
        {wallet ? (
          <Link href="/transactions">
            <Flex
              w="100%"
              boxShadow="0px 0px 15px rgba(163, 175, 191, 0.15)"
              borderRadius="2px"
              align="center"
              px="30px"
              h="88px"
            >
              <Flex boxSize="41px" borderRadius="50%" bg="#9100C5" align="center" justify="center">
                <Image src="/icons/naira.svg" w="13px" />
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
                  ETH 0.0000500
                </Text>
                <Text
                  fontFamily="Poppins"
                  fontSize="14px"
                  fontWeight="500"
                  lineHeight="21px"
                  color="#979797"
                >
                  NGN 0.0000
                </Text>
              </Box>
            </Flex>
          </Link>
        ) : (
          <AddWallet handleAdd={handleAdd} />
        )}
      </Box>
    </Box>
  );
};

export { WalletContent };
