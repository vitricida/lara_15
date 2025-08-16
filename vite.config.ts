import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  root: "invitation-app",
  build: {
    outDir: "../dist",
    assetsDir: "assets",
    copyPublicDir: true,
  },
  publicDir: "public",
});
