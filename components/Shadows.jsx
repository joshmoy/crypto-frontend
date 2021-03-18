import { Box } from "@chakra-ui/react";

const Shadows = ({ ...rest }) => {
  return <Box pos="absolute" opacity="0.6" filter="blur(100px)" borderRadius="50%" {...rest}></Box>;
};

export { Shadows };
