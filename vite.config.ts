import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import PurgeCSS from 'vite-plugin-purgecss';
import type { Plugin } from 'vite';

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        PurgeCSS({
            content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
        }) as unknown as Plugin,
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
