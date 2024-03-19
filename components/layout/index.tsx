import { Div } from '@stylin.js/elements';
import { FC, PropsWithChildren } from 'react';

import SEO from '../seo';

const Layout: FC<PropsWithChildren> = ({ children }) => (
  <>
    <SEO />
    <Div
      minHeight="100vh"
      display="flex"
      flexDirection="column"
      backgroundImage="url(/img/background.webp)"
      backgroundPosition="center center"
      backgroundSize="cover"
    >
      {children}
    </Div>
  </>
);

export default Layout;
