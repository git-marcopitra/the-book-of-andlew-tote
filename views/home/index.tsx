import { FC } from 'react';

import { Footer, Layout } from '@/components';
import Hero from '@/components/hero';
import Tokenomics from '@/components/tokenomics';

const Home: FC = () => (
  <Layout>
    <Hero />
    <Tokenomics />
    <Footer />
  </Layout>
);

export default Home;
