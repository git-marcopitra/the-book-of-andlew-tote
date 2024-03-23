import { FC } from 'react';

import { Footer, Layout } from '@/components';
import Hero from '@/components/hero';

const Home: FC = () => (
  <Layout>
    <Hero />

    <Footer />
  </Layout>
);

export default Home;
