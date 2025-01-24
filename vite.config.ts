import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),

        svgr({
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            exportAsDefault: true,
            include: '**/*.svg',
            exclude: '',
        }),
    ],
    css: {
        postcss: {},
    },
});
