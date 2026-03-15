import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home/index.tsx"),
  // would be a TODO in the future:
  // route("docs/getting-started", "<route_here>"),
  // route("docs/multiplatform", "<route_here>"),
  // route("docs/data-science-overview", "<route_here>"),
  // route("lp/server-side", "<route_here>"),
  // route("multiplatform", "<route_here>"),
  // route("community", "<route_here>"),
] satisfies RouteConfig;
