import { useState } from "react";
import { useRouter } from "next/router";
import { InputError, Navbar, Shadows, CustomInput, Footer } from "../components";
import {
  Box,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  FormControl,
  Button,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { login, signUp } from "../queries";
import { toast } from "react-toastify";
import { signIn } from "next-auth/client";

const Auth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, errors } = useForm();
  const { register: register2, handleSubmit: handleSubmit2, errors: errors2 } = useForm();

  const router = useRouter();
  const handleLogin = async (inputData) => {
    try {
      setIsLoading(true);
      signIn("credentials", {
        ...inputData,
        callbackUrl: "http://localhost:3000/confirm",
      });
      // const { message, data } = await login(inputData);
      // toast.success(message || "Login successful");
      // window.localStorage.setItem("auth", data.token);
      // setIsLoading(false);
      // console.log(data);
      // setTimeout(() => {
      //   router.push(data.hasPin ? "/wallet" : "/confirm");
      // }, 2000);
    } catch (error) {
      console.log({ error });
      toast.error(error?.response?.data?.message || "Login Failed");
      setIsLoading(false);
    }
  };
  const handleSignup = async (inputData) => {
    try {
      setIsLoading(true);
      const { message } = await signUp(inputData);
      toast.success(message || "Registration Successful");
      setIsLoading(false);
      setTimeout(() => {
        window.location.replace("/auth");
      }, 2000);
    } catch (error) {
      toast.error(error.response.data.message || "Registration Failed");
      setIsLoading(false);
    }
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
        >
          <Tabs variant="unstyled" isFitted defaultIndex={0}>
            <TabList h="42px" borderBottom="1px solid #061C5B">
              <Tab
                color="brand.gray"
                fontFamily="Poppins"
                fontSize="15px"
                _selected={{
                  color: "white",
                  bgGradient: "linear(267.92deg, brand.dark 21.35%, brand.light 77.27%)",
                  boxShadow: "none",
                }}
              >
                LOG IN
              </Tab>
              <Tab
                color="brand.gray"
                fontFamily="Poppins"
                fontSize="15px"
                _selected={{
                  color: "white",
                  bgGradient: "linear(267.92deg, brand.dark 21.35%, brand.light 77.27%)",
                  boxShadow: "none",
                }}
              >
                REGISTER
              </Tab>
            </TabList>
            <TabPanels p="33px 24px">
              <TabPanel>
                <Box as="form" onSubmit={handleSubmit(handleLogin)}>
                  <FormControl>
                    <CustomInput
                      label="Email"
                      id="userEmail"
                      type="email"
                      name="login_details"
                      placeholder="Email"
                      inputRef={register({
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address",
                        },
                      })}
                    />
                  </FormControl>
                  {errors.login_details && <InputError text={errors.login_details.message} />}
                  <FormControl mt="16px">
                    <CustomInput
                      label="Password"
                      id="userPassword"
                      type="password"
                      name="password"
                      autoComplete="current-password"
                      placeholder="Password"
                      inputRef={register({
                        required: "Password is required",
                      })}
                    />
                  </FormControl>
                  {errors.password && <InputError text={errors.password.message} />}
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
                    Log in
                  </Button>
                </Box>
              </TabPanel>
              <TabPanel>
                <Box as="form" onSubmit={handleSubmit2(handleSignup)}>
                  <FormControl>
                    <CustomInput
                      label="First Name"
                      id="first_name"
                      type="text"
                      name="first_name"
                      placeholder="First Name"
                      inputRef={register2({
                        required: "First Name is required",
                      })}
                    />
                  </FormControl>
                  {errors2.first_name && <InputError text={errors2.first_name.message} />}
                  <FormControl mt="16px">
                    <CustomInput
                      label="Last Name"
                      id="last_name"
                      type="text"
                      name="last_name"
                      placeholder="Last Name"
                      inputRef={register2({
                        required: "Last Name is required",
                      })}
                    />
                  </FormControl>
                  {errors2.last_name && <InputError text={errors2.last_name.message} />}
                  <FormControl mt="16px">
                    <CustomInput
                      label="User Name"
                      id="username"
                      type="text"
                      name="username"
                      autoComplete="username"
                      placeholder="User Name"
                      inputRef={register2({
                        required: "User Name is required",
                      })}
                    />
                  </FormControl>
                  {errors2.username && <InputError text={errors2.username.message} />}
                  <FormControl mt="16px">
                    <CustomInput
                      label="Phone Number"
                      id="phone_number"
                      type="tel"
                      name="phone_number"
                      placeholder="Phone Number"
                      inputRef={register2({
                        required: "Phone Number is required",
                      })}
                    />
                  </FormControl>
                  {errors2.phone_number && <InputError text={errors2.phone_number.message} />}
                  <FormControl mt="16px">
                    <CustomInput
                      label="Address"
                      id="address"
                      type="text"
                      name="address"
                      placeholder="Address"
                      inputRef={register2({
                        required: "Address is required",
                      })}
                    />
                  </FormControl>
                  {errors2.address && <InputError text={errors2.address.message} />}
                  <FormControl mt="16px">
                    <CustomInput
                      label="Date of Birth"
                      id="date_of_birth"
                      type="date"
                      name="date_of_birth"
                      placeholder="Date of Birth"
                      inputRef={register2({
                        required: "Date of Birth is required",
                      })}
                    />
                  </FormControl>
                  {errors2.date_of_birth && <InputError text={errors2.date_of_birth.message} />}
                  <FormControl mt="16px">
                    <CustomInput
                      label="Email"
                      id="email"
                      type="email"
                      name="email"
                      placeholder="Email"
                      inputRef={register2({
                        required: "Email is required",
                      })}
                    />
                  </FormControl>
                  {errors2.email && <InputError text={errors2.email.message} />}
                  <FormControl mt="16px">
                    <CustomInput
                      label="Password"
                      id="password"
                      type="password"
                      name="password"
                      placeholder="Password"
                      autoComplete="new-password"
                      inputRef={register2({
                        required: "Password is required",
                      })}
                    />
                  </FormControl>
                  {errors2.password && <InputError text={errors2.password.message} />}
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
                    Register
                  </Button>
                </Box>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Auth;
