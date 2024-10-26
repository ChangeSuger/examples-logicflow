// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Example Site Template",
      social: {
        github: "https://github.com/ChangeSuger/example-site-template",
      },
      defaultLocale: "zh-CN",
      locales: {
        "zh-CN": {
          label: "简体中文",
          lang: "zh-CN",
        },
      },
      sidebar: [],
			customCss: ['./src/tailwind.css'],
    }),
    tailwind({ applyBaseStyles: false }),
  ],
});
