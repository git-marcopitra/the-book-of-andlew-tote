import { Div, Footer as FooterElement, Img } from '@stylin.js/elements';
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
