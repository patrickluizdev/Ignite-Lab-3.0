import type { Preview } from "@storybook/react";
import { themes } from '@storybook/theming'
import '../src/styles/global.css';
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";


const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    viewport: {
      viewports: { ...INITIAL_VIEWPORTS },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme: themes.dark,
    },
  },
};

export default preview;
