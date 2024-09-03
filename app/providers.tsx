'use client';

import { ThemeProvider } from '@/components/Theme-Provider';
import { PropsWithChildren } from 'react';

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        {children}
      </ThemeProvider>
    </>
  );
};
export default Providers;
