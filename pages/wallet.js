import { useState, useEffect, useContext } from "react";
import { Box, Flex, Text, Image } from "@chakra-ui/react";
import { Link, ScrollContext, ScrollContextProvider } from "../utils";

import {
  DashboardNavbar,
  Receive,
  ReceiveContent,
  Send,
  SendContent,
  WalletContent,
  Footer,
} from "../components";
import { getBalance } from "../queries";
import { useQuery } from "react-query";
import { getSession, useSession } from "next-auth/client";

const Wallet = (props) => {
  return (
    <ScrollContextProvider>
      <WalletChild {...props} />
    </ScrollContextProvider>
  );
};
const WalletChild = ({ hasWallet, balance, balanceInDollars, ethAddress }) => {
  const [showWallet, setShowWallet] = useState(true);
  const [showSend, setShowSend] = useState(false);
  const [showReceive, setShowReceive] = useState(false);
  const [wallet, setWallet] = useState(hasWallet);
  const { scroll, setScroll } = useContext(ScrollContext);

  useEffect(() => {
    window.localStorage.setItem("walletId", ethAddress);
  }, []);
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

  const handleMargin = () => {
    if (showSend || showReceive) {
      if (scroll) {
        return "-220px";
      } else {
        return "-100px";
      }
    } else {
      return "0";
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
            mt={scroll && "-120px"}
            transition="all .2s"
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
          mt={handleMargin}
          zIndex={(showSend || showReceive) && "2000"}
          transition="all .2s"
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
            <WalletContent
              wallet={wallet}
              setWallet={setWallet}
              data={{ balance, balanceInDollars }}
            />
          )}
          {showSend && <SendContent wallet={wallet} balance={balance} />}
          {showReceive && (
            <ReceiveContent wallet={wallet} setWallet={setWallet} walletAddress={ethAddress} />
          )}
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Wallet;

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });
  try {
    const data = await getBalance(session.user.token);
    return {
      props: {
        hasWallet: true,
        ...data.data.data,
      },
    };
  } catch (error) {
    return {
      props: {
        balance: 0,
        balanceInDollars: 0,
        ethAddress: "",
        hasWallet: false,
      },
    };
  }
}
