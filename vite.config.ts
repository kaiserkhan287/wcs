import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import {defineConfig} from 'vite';
import tailwindcss from '@tailwindcss/vite';

const projectDir = path.dirname(fileURLToPath(import.meta.url));

function getHtmlEntries(dir = projectDir): Record<string, string> {
  const entries: Record<string, string> = {};
  function traverse(currentDir: string) {
    const files = fs.readdirSync(currentDir);
    for (const file of files) {
      if (file === 'node_modules' || file === 'dist' || file === '.git' || file.startsWith('.')) continue;
      const fullPath = path.join(currentDir, file);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        traverse(fullPath);
      } else if (file.endsWith('.html')) {
        const relative = path.relative(projectDir, fullPath).replace(/\\/g, '/');
        const entryName = relative === 'index.html' ? 'main' : relative.replace(/\.html$/, '').replace(/\//g, '_');
        entries[entryName] = fullPath;
      }
    }
  }
  traverse(dir);
  return entries;
}

export default defineConfig(() => {
  return {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(projectDir, '.'),
      },
    },
    build: {
      rollupOptions: {
        input: getHtmlEntries(),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});

