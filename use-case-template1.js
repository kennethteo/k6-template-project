import { browser } from 'k6/experimental/browser';

import { UserScenario } from "./scenarios/user-scenario.js";

export const options = {
  scenarios: {
    ui: {
      executor: 'shared-iterations',
      options: {
        browser: {
          type: 'chromium',
        },
      },
    },
  },
  thresholds: {
    checks: ['rate==1.0'],
  },
};

export default async function () {
  const context = browser.newContext();

  //Put in Scenarios to run
  UserScenario()
  
  page.close()
}