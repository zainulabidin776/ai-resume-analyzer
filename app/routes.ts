import { type RouteConfig, index } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    { path: '/auth', file: 'routes/auth.tsx' },

] satisfies RouteConfig;
