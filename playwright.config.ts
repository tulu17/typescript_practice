import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testMatch: ["basicInteractions.test.ts"],
  use: {
    headless: false,
    screenshot: "only-on-failure",
    video: "retain-on-failure"
  },
  retries: 0,
  reporter: [["dot"], ["json", {
    outputFile: "test-results/jsonReport.json"
  }], ["html", {
    open: "always"
  }]]
};

export default config;