import { reactRouter } from '@react-router/dev/vite';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [reactRouter(), tsconfigPaths()],
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true,
      },
    },
  },
  resolve: {
    alias: {
      // package.json for @rescui/card is invalid
      // so force the import to go to the compiled js file instead of index.ts
      '@rescui/card': '@rescui/card/lib/index.js',
    },
  },
  ssr: {
    noExternal: ['@rescui/*'],
  },
});
