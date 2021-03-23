import { useState, useEffect } from "react";
import { Box, Flex, Text, Image } from "@chakra-ui/react";
import { Link } from "../../utils/link";
import { DashboardNavbar, Footer } from "../../components";
import { getTx } from "../../queries";
import { getSession } from "next-auth/client";

const Transactions = ({ data }) => {
  const [walletId, setWalletId] = useState(null);

  useEffect(() => {
    setWalletId(() => window?.localStorage.getItem("walletId"));
  }, []);

  return (
    <Box pos="relative" minH="80vh" bg="#FBFDFF">
      <DashboardNavbar />
      <Box pt="56px" pos="relative" mt="224px">
        <Box m="0 auto" w="750px">
          <Text
            color="rgba(6, 28, 91, 0.8)"
            fontFamily="Poppins"
            fontSize="15px"
            lineHeight="22px"
            fontWeight="500"
            mb="24px"
          >
            All Transactions
          </Text>
          <Box
            bg="#fff"
            border="0.5px solid rgba(163, 175, 191, 0.5)"
            p="16px 56px 40px 32px"
            w="100%"
            maxH="500px"
            overflowY="scroll"
          >
            {data?.map((el, id) => {
              return (
                <Link href={`/transactions/${el.hash}`} key={id}>
                  <Flex
                    py="24px"
                    align="center"
                    justify="space-between"
                    borderBottom="1px solid rgba(163, 175, 191, 0.2)"
                  >
                    <Flex align="center">
                      <Image
                        src={el.from === walletId ? "/icons/sendtx.svg" : "/icons/receivetx.svg"}
                        boxSize="20px"
                      />
                      <Box ml="24px">
                        <Text
                          fontFamily="Poppins"
                          fontSize="16px"
                          lineHeight="24px"
                          fontWeight="500"
                          color="brand.dark"
                          opacity="0.8"
                          mb="6px"
                        >
                          ETH {el.value}
                        </Text>
                        <Text
                          w="256px"
                          className="ellipsis"
                          fontFamily="Poppins"
                          fontSize="14px"
                          lineHeight="21px"
                          color="brand.gray"
                          opacity="0.8"
                        >
                          {el.from === walletId
                            ? `Sent ETH to ${el.to}`
                            : `Received ETH from ${el.from}`}
                        </Text>
                      </Box>
                    </Flex>
                    <Text
                      fontFamily="Poppins"
                      fontSize="16px"
                      lineHeight="24px"
                      fontWeight="500"
                      color="rgba(6, 28, 91, 0.7)"
                      opacity="0.8"
                    >
                      {el.timeStamp.split("(")[1].split(" ")[1]}
                    </Text>
                    <Text
                      fontFamily="Poppins"
                      fontSize="16px"
                      lineHeight="24px"
                      fontWeight="500"
                      color={el.isError === "0" ? "#1E9123" : "#E70000"}
                      opacity="0.8"
                    >
                      {el.isError === "0" ? "Successful" : "Pending"}
                    </Text>
                  </Flex>
                </Link>
              );
            })}
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Transactions;

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });
  try {
    const {
      data: { data },
    } = await getTx(session.user.token);
  
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    return {
      props: {
        data: null,
        ...error
      },
    };
  }
}
