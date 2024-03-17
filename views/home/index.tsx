import { Div, H2, Header, Img, Main, P } from '@stylin.js/elements';
import { FC } from 'react';

import { Footer, Layout, Navbar } from '@/components';

const Home: FC = () => (
  <Layout>
    <Header bg="rgb(255, 225, 194)">
      <Navbar />
      <Div my="5rem" mx="auto" display="flex" justifyContent="center">
        <Img
          width="15rem"
          height="15rem"
          objectFit="cover"
          borderRadius="50%"
          src="/img/book.webp"
          alt="The Book of Andlew Tote with Background"
        />
      </Div>
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
