import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
  ssr: {
    noExternal: [
      "@rescui/button",
      "@rescui/card",
      "@rescui/typography",
      "@rescui/tab-list",
    ], // prevents these packages from being externalized so Vite can handle their CSS/SCSS during SSR
  },
});
