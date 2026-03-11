import React, { lazy, Suspense } from 'react';
import { ThemeProvider } from '@rescui/ui-contexts';
import '@jetbrains/kotlin-web-site-ui/dist/footer.css';
const GlobalFooter = lazy(
  () => import('@jetbrains/kotlin-web-site-ui/dist/footer.js')
);

const FooterPlaceholder = () => {
  return <footer className="footer-placeholder"></footer>;
};

const Footer = () => {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <FooterPlaceholder />;
  }

  return (
    <Suspense fallback={<FooterPlaceholder />}>
      <ThemeProvider theme="dark">
        <GlobalFooter />
      </ThemeProvider>
    </Suspense>
  );
};

export default Footer;
