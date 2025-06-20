import { defineConfig } from 'vite';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  css: {
    postcss: {
      plugins: [
        tailwindcss(), // Enable Tailwind CSS
        autoprefixer(), // Enable Autoprefixer
      ],
    },
  },
});
