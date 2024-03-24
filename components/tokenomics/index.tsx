import { H2, Li, Section, Strong, Ul } from '@stylin.js/elements';
import { FC } from 'react';

const Tokenomics: FC = () => (
  <Section
    my="5rem"
    mx="auto"
    gap="3rem"
    display="flex"
    maxWidth="1024px"
    alignItems="center"
    flexDirection="column"
    justifyContent="center"
  >
    <H2 fontSize="5rem">
      <Strong color="#8A3001">Token</Strong>omics
    </H2>
    <Ul fontSize="2rem">
      <Li>
        60%: <Strong>Liquidity</Strong>
      </Li>
      <Li>
        40%:{' '}
        <Ul ml="5rem">
          <Li>Airdrops</Li>
          <Li>Matrix Attacks</Li>
          <Li>CEX Listing</Li>
        </Ul>
      </Li>
    </Ul>
  </Section>
);

export default Tokenomics;
