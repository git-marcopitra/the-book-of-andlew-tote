import { Div, Footer as FooterElement, H2, P } from '@stylin.js/elements';
import { FC } from 'react';

const Footer: FC = () => (
  <FooterElement px="2rem" py="4rem" bg="rgb(209, 230, 255)">
    <Div
      mx="auto"
      gap="2rem"
      width="100%"
      display="flex"
      maxWidth="1024px"
      textAlign="center"
      flexDirection="column"
    >
      <H2 textTransform="uppercase" fontSize="3rem">
        Contract:
      </H2>
      <P>✅ Contract: 8qk86aJUJpUuVV3jfwLPjFaTX9QV9FbK13TM8G2sU38K</P>
      <P>
        $RICHBYMEME is a memecoin with no intrinsic value, and is not a
        investment and simply a community/culture token similar to $pepe. No
        Promises, No Utility, Purely For Entertainment Purposes
      </P>
    </Div>
  </FooterElement>
);

export default Footer;
