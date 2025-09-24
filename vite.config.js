import { defineConfig } from "vite";

export default defineConfig({
  base: "/arch-studio/",
  build: {
    rollupOptions: {
      input: {
        main: "./index.html",
        portfolio: "./src/pages/portfolio.html",
        about: "./src/pages/about.html",
        contact: "./src/pages/contact.html",
      },
    },
  },
});
