import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests', // Ruta donde están tus archivos .spec.ts
  retries: 0,
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    video: 'retain-on-failure',
  },
  reporter: [['html', { outputFolder: 'playwright-report' }]],
});
