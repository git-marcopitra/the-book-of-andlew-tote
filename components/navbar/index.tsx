import { Div, H1, Img } from '@stylin.js/elements';
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
  </Div>
);

export default Navbar;
