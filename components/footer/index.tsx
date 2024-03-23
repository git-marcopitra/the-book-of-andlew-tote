import { Div, Footer as FooterElement, H2, Img, P } from '@stylin.js/elements';
import { FC } from 'react';

const Footer: FC = () => (
  <FooterElement px="2rem" py="4rem">
    <Div
      mx="auto"
      gap="2rem"
      width="100%"
      display="flex"
      maxWidth="1024px"
      textAlign="center"
      alignItems="center"
      flexDirection="column"
    >
      <H2 textTransform="uppercase" fontSize="3rem">
        Contract:
      </H2>
      <P>✅ Contract: 7EGxmyu8DEvVVW3SxQBVeRh6ft3Qbtx2WNWxb2W7oxZ1</P>
      <P>
        $RICHBYMEME is a memecoin with no intrinsic value, and is not a
        investment and simply a community/culture token similar to $pepe. No
        Promises, No Utility, Purely For Entertainment Purposes
      </P>
      <Img
        width="10rem"
        height="10rem"
        objectFit="cover"
        borderRadius="50%"
        src="/img/obliquo-book.webp"
        alt="The Book of Andlew Tote with Background"
      />
    </Div>
  </FooterElement>
);

export default Footer;
