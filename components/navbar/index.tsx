import { A, Div, H1, Img, Nav } from '@stylin.js/elements';
import { FC } from 'react';

const Navbar: FC = () => (
  <Div
    my="2rem"
    mx="auto"
    width="100%"
    display="flex"
    maxWidth="1048px"
    alignItems="center"
    justifyContent="space-between"
  >
    <H1 title="The Book of Andlew Tote" aria-label="The Book of Andlew Tote">
      <Img height="5rem" src="/img/logo.webp" alt="The Book of Andlew Tote" />
    </H1>
    <Nav display="flex" gap="3rem" fontSize="1.6rem">
      <A href="https://chart.com">Chart</A>
      <A href="https://telegram.com">Telegram</A>
      <A href="https://x.com">Twitter</A>
    </Nav>
  </Div>
);

export default Navbar;
