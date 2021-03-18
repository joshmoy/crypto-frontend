import { Image } from "@chakra-ui/image";
import { Box, Flex, Text } from "@chakra-ui/layout";
import { DashboardNavbar, WalletContent } from "../components";

const Wallet = () => {
  return (
    <Box pos="relative" minH="100vh" bg="#FBFDFF">
      <DashboardNavbar />
      <Box pt="56px" pos="relative" mt="224px">
        <Flex
          border="0.5px solid rgba(163, 175, 191, 0.5)"
          width="-webkit-fit-content"
          m="0 auto"
          bg="#fff"
        >
          <Box py="24px" className="wallet-card">
            <Flex
              direction="column"
              justify="center"
              align="center"
              px="58px"
              borderRight="1px solid rgba(163, 175, 191, 0.2)"
              h="72px"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 2.57812V4.29688H9.28125V2.57812H11ZM9.28125 12.6758V15.125H11V12.6758H9.28125ZM14.4375 22V20.2812H12.7188V18.5625H11V22H14.4375ZM17.875 9.23828H12.7188V10.957H17.875V9.23828ZM17.875 12.6758H20.2812V10.957H17.875V12.6758ZM17.875 15.125V16.8438H22V12.6758H20.2812V15.125H17.875ZM12.7188 0H11V2.57812H12.7188V0ZM11 7.73438H12.7188V4.29688H11V6.01562H9.28125V10.957H11V7.73438ZM0 9.23828V12.6758H1.71875V10.957H4.29688V9.23828H0ZM12.7188 12.6758V10.957H11V12.6758H12.7188ZM16.1562 14.3945H17.875V12.6758H16.1562V14.3945ZM20.2812 10.957H22V9.23828H20.2812V10.957ZM14.4375 12.6758H12.7188V15.125H11V16.8438H14.4375V12.6758ZM9.28125 18.5625H11V16.8438H9.28125V18.5625ZM14.4375 16.8438V18.5625H17.875V16.8438H14.4375ZM19.5938 20.2812V18.5625H17.875V20.2812H19.5938ZM22 22V20.2812H19.5938V22H22ZM16.1562 22H17.875V20.2812H16.1562V22ZM7.73438 10.957V9.23828H6.01562V10.957H4.29688V12.6758H9.28125V10.957H7.73438ZM7.73438 7.73438H0V0H7.73438V7.73438ZM6.01562 1.71875H1.71875V6.01562H6.01562V1.71875ZM4.72656 3.00781H3.00781V4.72656H4.72656V3.00781ZM22 0V7.73438H14.2656V0H22ZM20.2812 1.71875H15.9844V6.01562H20.2812V1.71875ZM18.9922 3.00781H17.2734V4.72656H18.9922V3.00781ZM0 14.2656H7.73438V22H0V14.2656ZM1.71875 20.2812H6.01562V15.9844H1.71875V20.2812ZM3.00781 18.9922H4.72656V17.2734H3.00781V18.9922Z"
                  fill="#061C5B"
                />
              </svg>

              <Text
                color="brand.dark"
                fontSize="15px"
                lineHeight="22px"
                fontWeight="600"
                fontFamily="Poppins"
                mt="10px"
              >
                SEND
              </Text>
            </Flex>
          </Box>
          <Box py="24px" className="wallet-card">
            <Flex
              direction="column"
              justify="center"
              align="center"
              px="58px"
              borderRight="1px solid rgba(163, 175, 191, 0.2)"
              h="72px"
            >
              <svg
                width="26"
                height="22"
                viewBox="0 0 26 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25.5544 12.4487C25.5544 12.4486 25.5544 12.4485 25.5543 12.4484L20.7227 0.31677C20.6202 0.0590039 20.328 -0.0668336 20.0703 0.0357077C20.0701 0.0357705 20.0699 0.0358332 20.0697 0.0359588L0.468688 7.8409C0.388752 7.87543 0.319429 7.93057 0.26775 8.00064C0.104739 8.08535 0.00175821 8.25301 0 8.43668V21.4977C0 21.7751 0.224925 22 0.502345 22H21.6008C21.8783 22 22.1032 21.7751 22.1032 21.4977V14.3644L25.274 13.1015C25.5317 12.9987 25.6572 12.7064 25.5544 12.4487ZM21.0985 20.9953H1.00469V8.93902H21.0985V20.9953ZM8.38163 7.93685L16.7929 4.5852C17.5436 5.37426 18.5838 5.82273 19.6728 5.827L20.5118 7.93685H8.38163ZM22.1032 13.2853V8.43668C22.1032 8.15926 21.8783 7.93433 21.6008 7.93433H21.5928L20.5283 5.26085C20.5165 5.23856 20.5028 5.21734 20.4871 5.19756C20.4333 4.95561 20.2092 4.79053 19.9622 4.81075C18.9488 4.90312 17.9575 4.47625 17.3284 3.67646C17.1719 3.48324 16.8967 3.4352 16.6839 3.56393C16.66 3.56676 16.6364 3.57115 16.6131 3.57699L6.34412 7.66608C6.21985 7.71481 6.12045 7.81145 6.06833 7.93433H2.94977L19.9753 1.15518L24.4356 12.355L22.1032 13.2853Z"
                  fill="#061C5B"
                />
                <path
                  d="M2.36746 17.604C3.34277 17.8923 4.10596 18.6545 4.39543 19.6294C4.45892 19.8422 4.65464 19.988 4.87668 19.9881C4.90274 19.9865 4.92861 19.9826 4.95404 19.9765C4.97658 19.983 4.99963 19.9877 5.02286 19.9906H17.0791C17.0999 19.9879 17.1203 19.9837 17.1404 19.9781C17.3914 20.0391 17.6443 19.8852 17.7054 19.6342C17.7056 19.6333 17.7059 19.6324 17.7061 19.6314C17.9948 18.6555 18.7581 17.8922 19.734 17.6035C19.9707 17.5311 20.1178 17.2953 20.0787 17.0509C20.0854 17.0265 20.0902 17.0017 20.0932 16.9765V12.9578C20.0903 12.9326 20.0852 12.9077 20.0781 12.8834C20.1175 12.639 19.9704 12.403 19.7335 12.3309C18.7576 12.0422 17.9945 11.2786 17.7066 10.3024C17.6339 10.0641 17.3957 9.91665 17.15 9.95778C17.1267 9.95131 17.1031 9.9466 17.0791 9.94371H5.02286C4.99756 9.94672 4.9725 9.95175 4.94801 9.95878C4.70368 9.91985 4.46796 10.0668 4.39543 10.3034C4.10652 11.2791 3.34327 12.0422 2.36746 12.3309C2.1308 12.4032 1.98373 12.639 2.02285 12.8834C2.01632 12.9079 2.01161 12.9327 2.00879 12.9578V16.9765C2.01168 17.0002 2.01639 17.0235 2.02285 17.0464C1.98166 17.2923 2.12904 17.5308 2.36746 17.604ZM3.01348 13.1617C4.02219 12.7566 4.82167 11.9571 5.22681 10.9484H16.8747C17.28 11.9571 18.0797 12.7566 19.0885 13.1617V16.7726C18.0801 17.1782 17.2808 17.9775 16.8752 18.9859H5.22681C4.82123 17.9775 4.02187 17.1782 3.01348 16.7726V13.1617Z"
                  fill="#061C5B"
                />
                <path
                  d="M11.0512 17.9812C12.7158 17.9812 14.0653 16.6318 14.0653 14.9672C14.0653 13.3025 12.7158 11.9531 11.0512 11.9531C9.38653 11.9531 8.03711 13.3025 8.03711 14.9672C8.03874 16.6311 9.38723 17.9796 11.0512 17.9812ZM11.0512 12.9578C12.1609 12.9578 13.0606 13.8574 13.0606 14.9672C13.0606 16.0769 12.1609 16.9765 11.0512 16.9765C9.94144 16.9765 9.0418 16.0769 9.0418 14.9672C9.0418 13.8574 9.94144 12.9578 11.0512 12.9578Z"
                  fill="#061C5B"
                />
                <path
                  d="M5.525 15.7207C5.94113 15.7207 6.27852 15.3833 6.27852 14.9672C6.27852 14.551 5.94113 14.2136 5.525 14.2136C5.10887 14.2136 4.77148 14.551 4.77148 14.9672C4.77148 15.3834 5.10887 15.7207 5.525 15.7207ZM5.525 14.716C5.66371 14.716 5.77617 14.8285 5.77617 14.9672C5.77617 15.1059 5.66371 15.2183 5.525 15.2183C5.38629 15.2183 5.27383 15.1059 5.27383 14.9672C5.27383 14.8285 5.38629 14.716 5.525 14.716Z"
                  fill="#061C5B"
                />
                <path
                  d="M16.5768 15.7207C16.9929 15.7207 17.3303 15.3833 17.3303 14.9672C17.3303 14.551 16.9929 14.2136 16.5768 14.2136C16.1606 14.2136 15.8232 14.551 15.8232 14.9672C15.8232 15.3834 16.1606 15.7207 16.5768 15.7207ZM16.5768 14.716C16.7155 14.716 16.8279 14.8285 16.8279 14.9672C16.8279 15.1059 16.7155 15.2183 16.5768 15.2183C16.438 15.2183 16.3256 15.1059 16.3256 14.9672C16.3256 14.8285 16.438 14.716 16.5768 14.716Z"
                  fill="#061C5B"
                />
              </svg>

              <Text
                color="brand.dark"
                fontSize="15px"
                lineHeight="22px"
                fontWeight="600"
                fontFamily="Poppins"
                mt="10px"
              >
                RECEIVE
              </Text>
            </Flex>
          </Box>
        </Flex>
        <WalletContent />
      </Box>
    </Box>
  );
};

export default Wallet;
