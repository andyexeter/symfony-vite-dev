import { defineConfig } from "vite";
import symfonyPlugin from "vite-plugin-symfony";

/* if you're using React */
// import react from '@vitejs/plugin-react';

export default defineConfig({
    base: 'https://docker-subdirectory.symfony-vite-dev.localhost/public/build',
    plugins: [
        /* react(), // if you're using React */
        symfonyPlugin({
            viteDevServerHostname: 'localhost',
            // originOverride: 'http://localhost:5173'
        }),
    ],
    build: {
        assetsInlineLimit: 0,
        rollupOptions: {
            input: {
                app: "./assets/app.js"
            },
        }
    },
    server: {
        host: '0.0.0.0',
        // hmr: {
        //     protocol: "ws"
        // }
    }
});
