import { Box } from '@chakra-ui/react';
import type { ReactNode } from 'react';

// import { Footer } from './footer';
// import { Header } from './header';
import { Navbar } from '../components/Navbar';

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Box margin="0 auto" transition="0.5s ease-out">
      <Box>
        <Navbar />
        <Box as="main" flex={1} w="100%">
          {children}
        </Box>
      </Box>
    </Box>
  );
};
