import { defineConfig, loadEnv, UserConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import dotenv from 'dotenv';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(({ mode }): UserConfig => {
  // eslint-disable-next-line no-undef
  const env = loadEnv(mode, process.cwd());
  const isProduction = mode === 'production';
  return {
    plugins: [ reactRefresh(), tsconfigPaths() ],
    define: {
      'process.env': {},
      'import.meta.env': JSON.stringify(dotenv.config().parsed),
    },
    resolve: {
      extensions: [ '.js', '.jsx', '.json', '.ts', '.tsx', '.mjs' ],
      alias: {
        '@': '/src',
      },
    },
    server: {
      host: true,
      port: Number(env.VITE_APP_PORT),
      open: true,
    },
    css: {
      devSourcemap: true,
      modules: {
        scopeBehaviour: 'local',
      },
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/styles/variables.scss";',
        },
      },
    },
    build: {
      sourcemap: true,
      outDir: 'build',
      manifest: true,
      minify: isProduction,
      emptyOutDir: true,
    },
  };
});
