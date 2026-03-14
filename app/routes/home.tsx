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
import { getRandomTabIndex } from '~/components/home/why-kotlin-section/programming-language/index';

export const loader = async (): Promise<{ randomTabIndex: number }> => {
  return {
    randomTabIndex: getRandomTabIndex(),
  };
};

export const meta: Route.MetaFunction = () => {
  const baseUrl = 'https://kotlinlang.org';
  const title = 'Kotlin Programming Language';
  const description =
    'Kotlin is a cross-platform, statically typed, general-purpose programming language with type inference.';

  return [
    { title: title },
    { name: 'description', content: description },
    { charSet: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { httpEquiv: 'X-UA-Compatible', content: 'IE=edge,chrome=1' },

    {
      property: 'og:image',
      content: `${baseUrl}/images/open-graph/general.png`,
    },
    { property: 'og:description', content: description },
    { property: 'og:site_name', content: 'Kotlin Programming Language' },

    {
      name: 'twitter:image:src',
      content: `${baseUrl}/images/twitter/general.png`,
    },
    { property: 'og:title', content: title },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: baseUrl },

    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: '@kotlin' },
    { name: 'twitter:title', content: title },
  ];
};

function OverviewPageContent({ randomTabIndex }: { randomTabIndex: number }) {
  return (
    <main className="overview-page">
      <HeaderSection />
      <LatestFromKotlinSection />
      <WhyKotlinSection tabIndex={randomTabIndex} />
      <UsageSection />
      <StartSection />
    </main>
  );
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return (
    <>
      <Header dropdownTheme="dark" />
      <ThemeProvider theme="dark">
        <OverviewPageContent randomTabIndex={loaderData.randomTabIndex} />
      </ThemeProvider>

      <Footer />
    </>
  );
}
