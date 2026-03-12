import React, { Suspense } from 'react';
import { lazy } from 'react';
import '@jetbrains/kotlin-web-site-ui/dist/header.css';
import './index.scss';
const GlobalHeader = lazy(
  () => import('@jetbrains/kotlin-web-site-ui/dist/header.js')
);
import releases from 'data/releases';
import navigation from 'data/nav';
import { useLocation } from 'react-router';

const HeaderPlaceholder = () => (
  <nav className="header-placeholder">
    {/* Render a hidden navigation list so crawlers can home header links while the real header is lazy-loaded.
        The list is visually hidden to avoid affecting layout or UX. */}
    <ul style={{ display: 'none' }}>
      {navigation.main.content.map((item) => (
        <li key={item.url}>
          <a href={item.url}>{item.title}</a>
        </li>
      ))}
    </ul>
  </nav>
);

type HeaderProps = {
  hasSearch?: boolean;
  dropdownTheme?: 'light' | 'dark';
};

const Header: React.FC<HeaderProps> = ({ dropdownTheme, hasSearch }) => {
  const [isMounted, setIsMounted] = React.useState(false);
  const location = useLocation();
  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <HeaderPlaceholder />;
  }

  return (
    <Suspense fallback={<HeaderPlaceholder />}>
      <GlobalHeader
        productWebUrl={releases.latest.url}
        hasSearch={hasSearch ?? false}
        dropdownTheme={dropdownTheme ?? 'light'}
        currentUrl={location.pathname}
      />
    </Suspense>
  );
};

export default Header;
