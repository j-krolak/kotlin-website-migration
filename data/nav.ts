export type NavItem = {
  url: string;
  title: string;
  urlPattern?: string;
};

export type SubNavSection = {
  url: string;
  content: NavItem[];
};

export type NavigationConfig = {
  main: {
    content: NavItem[];
  };
  subnav: {
    type: 'tab' | 'dropdown'; // Dodajemy unię typów dla bezpieczeństwa
    content: SubNavSection[];
  };
};

export const navigation: NavigationConfig = {
  main: {
    content: [
      { url: '/docs/home.html', title: 'Docs' },
      { url: '/community/', title: 'Community' },
      { url: '/education/', title: 'Teach' },
      { url: 'https://play.kotlinlang.org', title: 'Play' },
    ],
  },
  subnav: {
    type: 'tab',
    content: [
      {
        url: '/community/',
        content: [
          {
            url: '/community/',
            urlPattern: '^\\/community\\/$',
            title: 'Overview',
          },
          {
            url: '/user-groups/user-group-list.html',
            urlPattern: '/user-groups.*',
            title: 'User Groups',
          },
          {
            url: '/community/events.html',
            urlPattern: '^\\/community\\/(events\\.html|kotlin-nights.*)',
            title: 'Events',
          },
          {
            url: '/community/talks.html',
            title: 'Talks & Speakers',
          },
        ],
      },
    ],
  },
};

export default navigation;
