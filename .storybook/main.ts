import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    // Bug fixes github pages ↓ 
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    // "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    '@storybook/addon-a11y'
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: true,
  },
  features: {
    "storyStoreV7": true,
  },
  viteFinal: (config, { configType }) => {
    if (configType == 'PRODUCTION'){
      config.base = '/ignite-lab-design-system/storybook-static/.'
    }
    return config
  }
};
export default config;
