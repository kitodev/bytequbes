import { defineConfig } from "vite";
import path from "path";

export default defineConfig(({ mode }) => ({
    server: {
        host: "::",
        port: 8080,
        proxy: {
            "/api": {
                target: "http://localhost:3001",
                changeOrigin: true,
            },
        },
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
}));
