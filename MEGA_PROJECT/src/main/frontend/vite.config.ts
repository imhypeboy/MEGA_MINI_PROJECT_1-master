import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // 원하는 포트 번호
    proxy: {
      "/api": {
        target: "http://localhost:8080", // Spring Boot 서버 주소
        changeOrigin: true,
        secure: false,
      },
    },
  },
});