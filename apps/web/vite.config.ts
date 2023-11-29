import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

const PROJECT_DIRECTORY = __dirname;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@assets': resolve(PROJECT_DIRECTORY, 'src/assets'),
      '@components': resolve(PROJECT_DIRECTORY, 'src/components'),
      '@features': resolve(PROJECT_DIRECTORY, 'src/features'),
      '@hooks': resolve(PROJECT_DIRECTORY, 'src/hooks'),
      '@providers': resolve(PROJECT_DIRECTORY, 'src/providers'),
      '@shared': resolve(PROJECT_DIRECTORY, 'src/shared'),
    },
  },
});
