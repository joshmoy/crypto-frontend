import { useState } from "react";
import { InputError, Navbar, Shadows, CustomInput, Footer } from "../components";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { setPin as setPinApi } from "../queries";
const ReactCodeInput = dynamic(import("react-code-input"));
import { Box, Text, Button } from "@chakra-ui/react";

import { toast } from "react-toastify";
import { getSession, useSession } from "next-auth/client";

const Confirm = ({ token }) => {
  const [pin, setPin] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleChange = (value) => {
    setPin(value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const payload = { pin };
      const { message } = await setPinApi(payload, token);
      toast.success(message || "Pin successfully set");
      setIsLoading(false);
      setPin("");
      setTimeout(() => {
        router.push("/wallet");
      }, 2000);
    } catch (error) {
      toast.error(error.response.data.message || "Something went wrong");
      setIsLoading(false);
    }
  };
  const style = {
    border: "none",
    width: "32px",
    borderBottom: "1px solid rgba(163, 175, 191, 0.25)",
    marginRight: "8px",
    fontFamily: "Poppins",
    color: "#061C5B",
    fontSize: "15px",
    fontWeight: "500",
    outline: "none",
    textAlign: "center",
  };

  return (
    <Box minH="calc(100vh - 125px)" h="auto" pos="relative" bg="#FBFDFF">
      <Navbar />
      <Shadows top="14px" left="-148px" boxSize="269px" bgColor="#E0E8FF" />
      <Shadows bottom="50px" left="-37px" boxSize="309px" bgColor="#E9FBFF" />
      <Shadows
        bottom="100px"
        left="50%"
        boxSize="204px"
        bgGradient="linear(172.42deg, #0BB1D3 5.87%, #D9E4FF 35.16%)"
      />
      <Shadows top="-131px" right="-47px" boxSize="374px" bgColor="#E8FBFF" />
      <Box pos="relative" mt="125px" pt="87px" pb="200px">
        <Box
          w="318px"
          m="0 auto"
          bg="#fff"
          borderRadius="2px"
          boxShadow="0px 0px 15px rgba(163, 175, 191, 0.15)"
          minH="455px"
          p="32px 24px"
        >
          <Text
            fontFamily="Poppins"
            color="brand.dark"
            lineHeight="156%"
            fontSize="14px"
            fontWeight="500"
          >
            Enter the 4 digit pin to confirm all your transactions.
          </Text>
          <Text
            color="rgba(6, 28, 91, 0.7)"
            fontFamily="Poppins"
            my="24px"
            lineHeight="156%"
            fontSize="14px"
          >
            Enter Pin
          </Text>
          <Box as="form" onSubmit={handleSubmit}>
            <ReactCodeInput
              type="number"
              fields={4}
              autoFocus
              inputStyle={style}
              name="pin"
              onChange={handleChange}
              instanceId="pin"
            />
            <Button
              type="submit"
              h="42px"
              w="100%"
              mt="40px"
              color="#fff"
              fontFamily="Poppins"
              fontSize="15px"
              fontWeight="400"
              bgGradient="linear(267.92deg, brand.dark 21.35%, brand.light 77.27%)"
              transition=".5s"
              disabled={pin.length < 4}
              isLoading={isLoading}
              _focus={{ boxShadow: "none" }}
              _hover={{
                bg: "transparent",
                border: "1px solid #061C5B",
                color: "brand.dark",
                transition: ".5s",
              }}
            >
              Continue
            </Button>
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Confirm;

// export async function getStaticProps({ req }) {
//   const session = await getSession({ req });

//   console.log(session);

//   return {
//     props: {}, // will be passed to the page component as props
//   };
// }

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });

  if (session?.user?.hasPin) {
    return {
      redirect: {
        destination: "/wallet",
        permanent: false,
      },
    };
  }

  return {
    props: {
      ...session.user,
    }, // will be passed to the page component as props
  };
}
