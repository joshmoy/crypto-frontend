import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import theme from "../theme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <ToastContainer style={{ fontSize: "14px", fontFamily: "Poppins" }} />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
