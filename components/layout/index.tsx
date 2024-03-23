import { Div } from '@stylin.js/elements';
import { FC, PropsWithChildren } from 'react';

import SEO from '../seo';

const Layout: FC<PropsWithChildren> = ({ children }) => (
  <>
    <SEO />
    <Div display="flex" minHeight="100vh" flexDirection="column">
      {children}
    </Div>
  </>
);

export default Layout;
