import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      css: {
        preprocessorOptions: {
          scss: {
            additionalData:
              '@import "./src/scss/variables.scss"; @import "./src/scss/mixins.scss";',
          },
        },
      },
    },
  },
  resolve: {
    alias: {
      components: "/src/assetscomponents",
      modules: "/src/modules",
      assets: "/src/assets",
      api: "/src/services/api",
      sercices: "/src/sercices",
    },
  },
});
