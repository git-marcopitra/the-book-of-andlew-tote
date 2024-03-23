import { Button, Div, H1, Header, Img, P } from '@stylin.js/elements';
import { FC } from 'react';

import HeroAnimation from './hero-animation';

const Hero: FC = () => (
  <Header position="relative">
    <Div
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
        <H1
          title="The Book of Andlew Tote"
          aria-label="The Book of Andlew Tote"
        >
          <Img
            height="10rem"
            src="/img/logo.webp"
            alt="The Book of Andlew Tote"
          />
        </H1>
        <P fontSize="1.8rem">
          Book of Andlew Tote has no intrinsic value, it is a community and
          culture token. No Promises, No Utility, Purely For {"Brokie's"}
          Entertainment
        </P>
        <Button
          all="unset"
          py="1rem"
          px="2rem"
          fontSize="1.5rem"
          borderRadius="2rem"
          bg="#E80"
          fontFamily="GochiHand"
          boxShadow="3px 3px 1px #C60"
        >
          Buy Now
        </Button>
      </Div>
    </Div>
  </Header>
);

export default Hero;
