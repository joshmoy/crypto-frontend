import { Box, Text, Badge } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { DashboardNavbar } from "../../components";

const SingleTx = () => {
  const {
    value,
    hash,
    confirmations,
    to,
    isError,
    timeStamp,
    fee
  } = {
    blockNumber: "12017239",
    timeStamp: "13:18:54 GMT+0100 (West Africa Standard Time)",
    hash: "0x559a01a7b26aa0038de670b4d2af72e4899aa9d7b814695c1ba21afd9cac59dc",
    nonce: "884489",
    blockHash:
      "0xfe4c7564832f69e89ae53d553ca63978817dce9ec4bae6e2f08516a957aff90b",
    transactionIndex: "7",
    from: "0x416299aade6443e6f6e8ab67126e65a7f606eef5",
    to: "0x9993e504cb62541361c7798575d33fd24cfbf618",
    value: 0.00040844,
    fee: "50000",
    gasPrice: "132000010000",
    isError: "0",
    txreceipt_status: "1",
    input: "0x",
    contractAddress: "",
    cumulativeGasUsed: "238406",
    gasUsed: "21000",
    confirmations: "44786",
  };
  return (
    <Box>
      <DashboardNavbar />
      <Box
        m="284px auto"
        h="555px"
        w="750px"
        bg="#ffffff"
        border="0.5px solid rgba(163, 175, 191, 0.5)"
      >
        <Text
          as="p"
          m="36px auto 56px"
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
          {`You sent ${value} ETH to`} <br />
          {`${to}`}
        </Text>
        <Box ml="77px">
          <Box mb="16px">
            <TxKey fontFamily="Poppins" color="brand.gray" as="span">
              Amount
            </TxKey>{" "}
            <br />
            <TxValue fontFamily="Poppins" color="brand.dark" as="span">
              {value + ' ETH'}
            </TxValue>
          </Box>
          <Box mb="16px">
            <TxKey fontFamily="Poppins" color="brand.gray" as="span">
              Transaction Hash
            </TxKey>{" "}
            <br />
            <TxValue fontFamily="Poppins" color="brand.dark">
              {hash}
            </TxValue>
          </Box>
          <Box mb="16px">
            <TxKey fontFamily="Poppins" color="brand.gray" as="span">
              Timestamp
            </TxKey>{" "}
            <br />
            <TxValue fontFamily="Poppins" color="brand.dark" as="span">
              {timeStamp}
            </TxValue>
          </Box>
          <Box mb="16px">
            <TxKey fontFamily="Poppins" color="brand.gray" as="span">
              Fee
            </TxKey>{" "}
            <br />
            <TxValue fontFamily="Poppins" color="brand.dark" as="span">
              {`${fee} ETH`}
            </TxValue>
          </Box>
          <Box mb="16px">
            <TxKey fontFamily="Poppins" color="brand.gray" as="span">
              Status
            </TxKey>{" "}
            <br />
            <TxValue fontFamily="Poppins" color="brand.dark" as="span">
              {isError === "0" ? (
                <Badge
                  colorScheme="green"
                  p="15px"
                  borderRadius='10%'
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
                  borderRadius='10%'
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
            <TxKey fontFamily="Poppins" color="brand.gray" as="span">
              Block confirmations
            </TxKey>{" "}
            <br />
            <TxValue fontFamily="Poppins" color="brand.dark" as="span">
              {`${confirmations} confirmations`}
            </TxValue>
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
