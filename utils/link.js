import { Link as ChakraLink } from "@chakra-ui/react";
import NextLink from "next/link";

const Link = ({ children, href, ...rest }) => {
  return (
    <NextLink passHref href={href}>
      <ChakraLink {...rest} _focus={{ boxShadow: "none" }} _hover={{ textDecoration: "none" }}>
        {children}
      </ChakraLink>
    </NextLink>
  );
};

export { Link };
