import { Box, Text, Badge, Flex, Image } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { DashboardNavbar } from "../../components";
import { mock } from "../../data/mock";
import { useRouter } from "next/router";
import { Link } from "../../utils";

const SingleTx = () => {
  const router = useRouter();
  const { id } = router.query;
  const check = Number(id) - 1;
  const dataIdx = mock.findIndex((el, idx) => idx === check);
  const walletId = window.localStorage.getItem("wallet");

  const {
    value,
    valueInDollars,
    feeInDollars,
    hash,
    confirmations,
    to,
    isError,
    timeStamp,
    fee,
    from,
  } = mock[dataIdx];
  return (
    <Box>
      <DashboardNavbar />
      <Box pos="relative" bg="#FBFDFF">
        <Link href="/transactions">
          <Flex ml="205px" align="center" pos="fixed" zIndex="2001" mt="0" transition="all .2s">
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
        </Link>
        <Box
          m="284px auto"
          w="750px"
          py="36px "
          bg="#ffffff"
          border="0.5px solid rgba(163, 175, 191, 0.5)"
        >
          <Text
            as="p"
            m="0 auto 56px"
            opacity="0.8"
            color="brand.dark"
            letterSpacing="-0.025em"
            lineHeight="36px"
            fontSize="24px"
            textAlign="center"
            fontWeight="600"
            fontFamily="Poppins"
            fontStyle="normal"
          >
            {from === walletId
              ? `You sent ${value} ETH to ${to}`
              : `You received ${value} ETH from ${to}`}
          </Text>
          <Box mx="77px">
            <Box mb="16px">
              <TxKey fontFamily="Poppins" color="brand.gray">
                Amount
              </TxKey>

              <TxValue fontFamily="Poppins" color="brand.dark">
                {`${value} ETH ($${valueInDollars.toFixed(2)})`}
              </TxValue>
            </Box>
            <Box mb="16px">
              <TxKey fontFamily="Poppins" color="brand.gray">
                Transaction Hash
              </TxKey>
              <TxValue fontFamily="Poppins" color="brand.dark">
                {hash}
              </TxValue>
            </Box>
            <Box mb="16px">
              <TxKey fontFamily="Poppins" color="brand.gray">
                Timestamp
              </TxKey>

              <TxValue fontFamily="Poppins" color="brand.dark">
                {timeStamp}
              </TxValue>
            </Box>
            <Box mb="16px">
              <TxKey fontFamily="Poppins" color="brand.gray">
                Fee
              </TxKey>

              <TxValue fontFamily="Poppins" color="brand.dark">
                {`${fee} ETH ($${feeInDollars.toFixed(2)})`}
              </TxValue>
            </Box>
            <Box mb="16px">
              <TxKey fontFamily="Poppins" color="brand.gray">
                Status
              </TxKey>

              <TxValue fontFamily="Poppins" color="brand.dark">
                {isError === "0" ? (
                  <Badge
                    colorScheme="green"
                    p="10px 15px"
                    borderRadius="10%"
                    fontFamily="Poppins"
                    color="brand.dark"
                    fontSize="16px"
                  >
                    {" "}
                    Success
                  </Badge>
                ) : (
                  <Badge
                    colorScheme="red"
                    p="15px"
                    borderRadius="10%"
                    fontFamily="Poppins"
                    color="brand.dark"
                    fontSize="16px"
                  >
                    {" "}
                    Failed
                  </Badge>
                )}
              </TxValue>
            </Box>
            <Box mb="16px">
              <TxKey fontFamily="Poppins" color="brand.gray">
                Block confirmations
              </TxKey>{" "}
              <TxValue fontFamily="Poppins" color="brand.dark">
                {`${confirmations} confirmations`}
              </TxValue>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SingleTx;

const TxKey = styled(Text)`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  color: #a3afbf;
  opacity: 0.8;
`;

const TxValue = styled(Text)`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #061c5b;
  opacity: 0.8;
`;
