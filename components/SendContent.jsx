import { useState } from "react";
import { Box, Flex, Image, Input, Text, FormControl, Button } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { InputError, CustomInput } from "../components";
import { AddWallet } from "./AddWallet";
import { transfer } from "../queries";
import { toast } from "react-toastify";
import { useSession } from "next-auth/client";
const SendContent = ({ wallet, balance, handleAdd }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, errors, reset } = useForm();
  const [session] = useSession();
  const onSubmit = async (inputData) => {
    try {
      setIsLoading(true);
      const { data } = await transfer(inputData, session?.user?.token);
      toast.success(data?.message || "Successful");
      reset();
      setIsLoading(false);
      window.location.reload();
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      toast.error(error?.message || "Something went wrong");
    }
  };
  return (
    <Box w="366px" m="0 auto">
      {wallet ? (
        <>
          <Flex align="center" justify="center" direction="column" w="100%">
            <Flex boxSize="48px" borderRadius="50%" bg="#9100C5" align="center" justify="center">
              <Image src="/icons/naira.svg" w="18px" />
            </Flex>
            <Text
              m="12px 0 8px"
              fontFamily="Poppins"
              fontSize="32px"
              fontWeight="600"
              color="brand.dark"
              lineHeight="48px"
              opacity="0.8"
            >
              ETH {balance}
            </Text>
            <Text
              fontFamily="Poppins"
              fontSize="14px"
              color="brand.gray"
              lineHeight="21px"
              opacity="0.8"
            >
              ETH wallet
            </Text>
          </Flex>
          <Box
            as="form"
            w="100%"
            boxShadow="0px 0px 15px rgba(163, 175, 191, 0.15)"
            borderRadius="2px"
            p="32px 32px 45px"
            onSubmit={handleSubmit(onSubmit)}
            mt="40px"
          >
            <Text
              color="rgba(6, 28, 91, 0.7)"
              fontFamily="Poppins"
              fontSize="14px"
              lineHeight="156%"
              mb="8px"
            >
              I want to Send
            </Text>
            <Flex h="42px" borderRadius="4px">
              <Input
                fontSize="14px"
                w="212px"
                id="amount"
                name="amount"
                type="text"
                placeholder="00.00"
                border="1px solid rgba(6, 28, 91, 0.07)"
                borderRight="none"
                borderTopRightRadius="0"
                borderBottomRightRadius="0"
                h="42px"
                p="0 16px"
                fontFamily="Poppins"
                color="rgba(6, 28, 91, 0.7)"
                _focus={{ boxShadow: "none" }}
                ref={register({
                  required: "Amount is required",
                })}
              />
              <Flex
                bgGradient="linear(267.92deg, brand.dark 21.35%, brand.light 77.27%)"
                w="90px"
                h="42px"
                borderTopRightRadius="4px"
                borderBottomRightRadius="4px"
                align="center"
                justify="center"
              >
                <Text
                  color="#fff"
                  fontFamily="Poppins"
                  fontSize="14px"
                  lineHeight="156%"
                  opacity="0.9"
                >
                  ETH
                </Text>
              </Flex>
            </Flex>
            {errors.amount && <InputError text={errors.amount.message} />}
            <FormControl mt="16px">
              <CustomInput
                label="Recipient's wallet address"
                id="recipient"
                type="text"
                name="to"
                placeholder="Input address"
                inputRef={register({
                  required: "Recipient's wallet address is required",
                })}
              />
            </FormControl>
            {errors.to && <InputError text={errors.to.message} />}
            <FormControl mt="16px">
              <CustomInput
                label="Pin"
                id="pin"
                type="number"
                name="pin"
                placeholder="0000"
                inputRef={register({
                  required: "Pin is required",
                })}
              />
            </FormControl>
            {errors.pin && <InputError text={errors.pin.message} />}
            <Button
              type="submit"
              h="42px"
              w="100%"
              mt="24px"
              color="#fff"
              fontFamily="Poppins"
              fontSize="15px"
              fontWeight="400"
              bgGradient="linear(267.92deg, brand.dark 21.35%, brand.light 77.27%)"
              transition=".5s"
              isLoading={isLoading}
              _focus={{ boxShadow: "none" }}
              _hover={{
                bg: "transparent",
                border: "1px solid #061C5B",
                color: "brand.dark",
                transition: ".5s",
              }}
            >
              Send
            </Button>
          </Box>
        </>
      ) : (
        <AddWallet handleAdd={handleAdd} />
      )}
    </Box>
  );
};

export { SendContent };
