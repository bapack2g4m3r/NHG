import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        tentangKami: resolve(__dirname, 'tentang-kami.html'),
        layanan: resolve(__dirname, 'layanan.html'),
        program: resolve(__dirname, 'program.html'),
        artikel: resolve(__dirname, 'artikel.html'),
        kontak: resolve(__dirname, 'kontak.html')
      }
    }
  }
});
