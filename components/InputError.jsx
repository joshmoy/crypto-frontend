import { Text } from "@chakra-ui/react";

const InputError = ({ text }) => {
  return (
    <Text color="#E24D4D" fontFamily="Poppins" fontSize="1.2rem" mt=".5rem">
      {text}
    </Text>
  );
};

export { InputError };
