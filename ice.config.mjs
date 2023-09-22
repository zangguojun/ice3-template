import { defineConfig } from '@ice/app';

const minify = process.env.NODE_ENV === 'production' ? 'swc' : false;
export default defineConfig(() => ({
  devPublicPath: '/appCode',
  publicPath: '/appCode',
  alias: {
    pages: './src/pages',
    components: './src/components',
    utils: './src/utils',
  },
  define: {
    IS_TDI: true,
  },
  minify,
  dropLogLevel: 'log',
  server: {
    onDemand: true,
    format: 'esm',
  },
}));
