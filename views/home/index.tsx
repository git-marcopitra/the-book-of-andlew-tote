import { Button, Div, H1, H2, Header, Img, Main, P } from '@stylin.js/elements';
import { FC } from 'react';

import { Footer, Layout } from '@/components';

const Home: FC = () => (
  <Layout>
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
          <Img
            width="15rem"
            height="15rem"
            objectFit="cover"
            borderRadius="50%"
            src="/img/andlew-tote.webp"
            alt="The Book of Andlew Tote with Background"
          />
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
          <P fontSize="1.8rem">The book with the best Andlew Tote Quotes</P>
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
      <Img
        top="15%"
        left="6%"
        width="10rem"
        position="absolute"
        alt="You are F broke"
        src="/img/youre-f-broke.webp"
      />
      <Img
        top="6%"
        right="3%"
        width="10rem"
        position="absolute"
        alt="Winners never quit"
        src="/img/winners-never-quit.webp"
      />
      <Img
        bottom="0%"
        left="10%"
        width="10rem"
        position="absolute"
        alt="Winners never quit"
        src="/img/what-color-is-your-bugatti.webp"
      />
      <Img
        right="10%"
        bottom="10%"
        width="10rem"
        position="absolute"
        alt="Winners never quit"
        src="/img/youre-broke.webp"
      />
    </Header>
    <Main flex="1" p="5rem">
      <Div
        mx="auto"
        gap="2rem"
        display="flex"
        maxWidth="1024px"
        alignItems="center"
        flexDirection="column"
      >
        <H2 textAlign="center" fontSize="3rem">
          About
        </H2>
        <P>The book with the best Andlew Tote Quotes</P>
        <Img
          width="100%"
          maxWidth="50rem"
          objectFit="cover"
          borderRadius="1rem"
          alt="Book on the table"
          src="/img/table-book.webp"
          height={['30rem ', '50rem']}
        />
      </Div>
    </Main>
    <Footer />
  </Layout>
);

export default Home;
