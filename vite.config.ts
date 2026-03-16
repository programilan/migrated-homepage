import path from "path";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

import tailwindcss from "@tailwindcss/vite";
import { reactRouter } from "@react-router/dev/vite";

export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
  define: {
    global: "globalThis",
  },
  resolve: {
    alias: {
      "@app": path.resolve(__dirname, "./app"),
      "@assets": path.resolve(__dirname, "./assets"),
      "@react-hook/resize-observer": path.resolve(
        __dirname,
        "./app/hooks/ssr-safe/resize-observer.ts",
      ),
    },
  },
  ssr: {
    noExternal: [
      "@jetbrains/kotlin-web-site-ui",
      "@rescui/button",
      "@rescui/card",
      "@rescui/typography",
      "@rescui/tab-list",
      "@rescui/focus-manager",
      "@rescui/icons",
      "@rescui/input",
      "@rescui/switcher",
    ], // prevents these packages from being externalized so Vite can handle their CSS/SCSS (or any other deps) during SSR
  },
});
