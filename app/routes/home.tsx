import '@rescui/typography/lib/font-jb-sans-auto.css';

import { ThemeProvider } from '@rescui/ui-contexts';

import type { Route } from './+types/home';
import { HeaderSection } from '~/components/home/header-section';
import { LatestFromKotlinSection } from '~/components/home/latest-from-kotlin-section';
import { WhyKotlinSection } from '~/components/home/why-kotlin-section';
import { UsageSection } from '~/components/home/usage-section';
import { StartSection } from '~/components/home/start-section';

import '~/components/home/index.scss';
import '~/styles/grid.scss';
import Header from '~/components/layout/header';
import Footer from '~/components/layout/footer';

export const meta: Route.MetaFunction = () => {
  const title = 'Kotlin Programming Language';
  const baseUrl = 'https://kotlinlang.org';

  return [
    { title },

    { property: 'og:title', content: title },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: baseUrl },

    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: '@kotlin' },
    { name: 'twitter:title', content: title },
  ];
};

function OverviewPageContent() {
  return (
    <div className="overview-page">
      <HeaderSection />
      <LatestFromKotlinSection />
      <WhyKotlinSection />
      <UsageSection />
      <StartSection />
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Header dropdownTheme="dark" />
      <ThemeProvider theme="dark">
        <OverviewPageContent />
      </ThemeProvider>

      <Footer />
    </>
  );
}
