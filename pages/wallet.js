import { useState } from "react";
import { Box, Flex, Text, Image } from "@chakra-ui/react";
import { Link } from "../utils/link";
import { toast } from "react-toastify";
import {
  DashboardNavbar,
  Receive,
  ReceiveContent,
  Send,
  SendContent,
  WalletContent,
} from "../components";

const Wallet = () => {
  const [showWallet, setShowWallet] = useState(true);
  const [showSend, setShowSend] = useState(false);
  const [showReceive, setShowReceive] = useState(false);
  const [wallet, setWallet] = useState(false);

  const handleAdd = () => {
    setTimeout(() => {
      toast.success("Wallet successfully created");
      setWallet(true);
    }, 2000);
  };
  const handleShow = (el) => {
    if (el === "wallet") {
      setShowSend(false);
      setShowReceive(false);
      setShowWallet(true);
    } else if (el === "send") {
      setShowReceive(false);
      setShowWallet(false);
      setShowSend(true);
    } else if (el === "receive") {
      setShowSend(false);
      setShowWallet(false);
      setShowReceive(true);
    }
  };
  return (
    <Box pos="relative" minH="100vh" bg="#FBFDFF">
      <DashboardNavbar />
      <Box pt="56px" pos="relative" mt="224px">
        {!showWallet && (
          <Flex
            ml="205px"
            align="center"
            cursor="pointer"
            onClick={() => handleShow("wallet")}
            pos="fixed"
            zIndex="2001"
          >
            <Image src="/icons/leftArrow.svg" w="6px" h="10px" />
            <Text
              ml="7px"
              fontFamily="Poppins"
              fontSize="14px"
              lineHeight="21px"
              color="brand.gray"
            >
              Back
            </Text>
          </Flex>
        )}
        <Box
          pos={showSend || showReceive ? "fixed" : "relative"}
          w="100vw"
          mt={showSend || showReceive ? "-100px" : "0"}
          zIndex={(showSend || showReceive) && "2000"}
          transition="all .1s"
        >
          <Flex
            border="0.5px solid rgba(163, 175, 191, 0.5)"
            width="-webkit-fit-content"
            m="0 auto"
            bg="#fff"
          >
            <Box
              py="24px"
              className={showSend ? "wallet-card wallet-active" : "wallet-card"}
              cursor="pointer"
              onClick={() => handleShow("send")}
            >
              <Flex
                direction="column"
                justify="center"
                align="center"
                px="58px"
                borderRight="1px solid rgba(163, 175, 191, 0.2)"
                h="72px"
              >
                <Send />
                <Text
                  color="brand.dark"
                  fontSize="15px"
                  lineHeight="22px"
                  fontWeight="600"
                  fontFamily="Poppins"
                  mt="10px"
                >
                  SEND
                </Text>
              </Flex>
            </Box>
            <Box
              py="24px"
              className={showReceive ? "wallet-card wallet-active" : "wallet-card"}
              cursor="pointer"
              onClick={() => handleShow("receive")}
            >
              <Flex
                direction="column"
                justify="center"
                align="center"
                px="58px"
                borderRight="1px solid rgba(163, 175, 191, 0.2)"
                h="72px"
              >
                <Receive />
                <Text
                  color="brand.dark"
                  fontSize="15px"
                  lineHeight="22px"
                  fontWeight="600"
                  fontFamily="Poppins"
                  mt="10px"
                >
                  RECEIVE
                </Text>
              </Flex>
            </Box>
          </Flex>
        </Box>
        <Box pos="relative" mt="100px">
          {showWallet && (
            <WalletContent wallet={wallet} setWallet={setWallet} handleAdd={handleAdd} />
          )}
          {showSend && <SendContent wallet={wallet} setWallet={setWallet} handleAdd={handleAdd} />}
          {showReceive && (
            <ReceiveContent wallet={wallet} setWallet={setWallet} handleAdd={handleAdd} />
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Wallet;
