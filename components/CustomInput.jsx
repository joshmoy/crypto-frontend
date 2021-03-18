import { FormLabel, Input } from "@chakra-ui/react";
const CustomInput = ({ label, id, value, inputRef, ...rest }) => {
  return (
    <>
      <FormLabel
        fontFamily="Poppins"
        fontSize="14px"
        lineHeight="156%"
        color="rgba(6, 28, 91, 0.7)"
        mb="6px"
        htmlFor={id}
      >
        {label}
      </FormLabel>
      <Input
        border="1px solid rgba(6, 28, 91, 0.07)"
        fontSize="14px"
        id={id}
        h="42px"
        p="0 16px"
        fontFamily="Poppins"
        ref={inputRef}
        color="rgba(6, 28, 91, 0.7)"
        _focus={{ boxShadow: "none" }}
        defaultValue={value}
        {...rest}
      />
    </>
  );
};

export { CustomInput };
