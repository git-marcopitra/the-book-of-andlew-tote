import { Button, Code, Div, H1, Header, Img, P } from '@stylin.js/elements';
import { FC } from 'react';

import HeroAnimation from './hero-animation';

const Hero: FC = () => (
  <Header
    my="5rem"
    mx="auto"
    gap="5rem"
    display="flex"
    maxWidth="1024px"
    alignItems="center"
    justifyContent="center"
  >
    <Div
      p="2rem"
      gap="2rem"
      display="flex"
      textAlign="center"
      alignItems="center"
      flexDirection="column"
    >
      <HeroAnimation />
      <H1 title="The Book of Andlew Tote" aria-label="The Book of Andlew Tote">
        <Img
          height="10rem"
          src="/img/logo.webp"
          alt="The Book of Andlew Tote"
        />
      </H1>
      <P fontSize="1.8rem" maxWidth="40rem">
        Book of Andlew Tote has no intrinsic value, it is a community and
        culture token. No Promises, No Utility, Purely For {"Brokie's "}
        Entertainment
      </P>
      <P>
        ✅ Contract:<Code> 7EGxmyu8DEvVVW3SxQBVeRh6ft3Qbtx2WNWxb2W7oxZ1</Code>
      </P>
      <Button
        all="unset"
        bg="#E80"
        py="1rem"
        px="2rem"
        cursor="pointer"
        fontSize="1.5rem"
        fontFamily="GochiHand"
        boxShadow="10px 10px 1px #000"
        transition="transform 300ms ease-in-out"
        nHover={{ transform: 'scale(1.1)' }}
      >
        Buy Now
      </Button>
    </Div>
  </Header>
);

export default Hero;
