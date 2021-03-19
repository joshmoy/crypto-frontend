import "../styles/globals.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider as AuthProvider } from "next-auth/client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import theme from "../theme";

const queryClient = new QueryClient();
function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider session={pageProps.session}>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider resetCSS theme={theme}>
          <ToastContainer style={{ fontSize: "14px", fontFamily: "Poppins" }} />
          <Component {...pageProps} />
        </ChakraProvider>
      </QueryClientProvider>
    </AuthProvider>
  );
}

export default MyApp;
