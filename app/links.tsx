import type { Route } from "./+types/root";

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
  {
    rel: "preload",
    href: "/fonts/JetBrainsMono/JetBrainsMono-Regular.woff2",
    as: "font",
    type: "font/woff2",
    crossOrigin: "anonymous",
  },
  {
    rel: "preload",
    href: "/fonts/JetBrainsMono/JetBrainsMono-Bold.woff2",
    as: "font",
    type: "font/woff2",
    crossOrigin: "anonymous",
  },
  {
    rel: "preload",
    href: "/fonts/JetBrainsMono/JetBrainsMono-Italic.woff2",
    as: "font",
    type: "font/woff2",
    crossOrigin: "anonymous",
  },
  { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
  { rel: "alternate icon", href: "/favicon.ico" },
  { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
  {
    rel: "apple-touch-icon",
    sizes: "72x72",
    href: "/apple-touch-icon-72x72.png",
  },
  {
    rel: "apple-touch-icon",
    sizes: "114x114",
    href: "/apple-touch-icon-114x114.png",
  },
  {
    rel: "apple-touch-icon",
    sizes: "144x144",
    href: "/apple-touch-icon-144x144.png",
  },
];
