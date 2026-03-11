declare module '@jetbrains/kotlin-web-site-ui/dist/footer.js' {
  import { FC } from 'react';

  const Footer: FC;
  export default Footer;
}

declare module '@jetbrains/kotlin-web-site-ui/dist/header.js' {
  import { FC } from 'react';

  interface HeaderProps {
    productWebUrl: string;
    hasSearch: boolean;
    dropdownTheme: 'light' | 'dark';
    currentUrl: string;
  }

  const GlobalHeader: FC<HeaderProps>;
  export default GlobalHeader;
}

declare module '@jetbrains/kotlin-web-site-ui';
declare module '@rescui/*';
