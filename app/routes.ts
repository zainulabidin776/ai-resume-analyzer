import { type RouteConfig, index } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    { path: '/auth', file: 'routes/auth.tsx' },
    { path: '/upload', file: 'routes/upload.tsx' },
    { path: '/resume/:id', file: 'routes/resume.tsx' },
] satisfies RouteConfig;
