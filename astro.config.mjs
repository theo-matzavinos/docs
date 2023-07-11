import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://theo-matzavinos.github.io",
  base: "/docs",
  integrations: [
    starlight({
      title: "Docs",
      social: {
        github: "https://github.com/theo-matzavinos/docs",
      },
      sidebar: [
        {
          label: "Component Store",
          items: [
            {
              label: "Introduction",
              link: "component-store",
            },
            {
              label: "Reading state",
              link: "component-store/reading-state",
            },
            {
              label: "Updating state",
              link: "component-store/updating-state",
            },
            {
              label: "Side effects",
              link: "component-store/side-effects",
            },
          ],
        },
      ],
    }),
    tailwind(),
  ],
  // Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
  image: {
    service: {
      entrypoint: "astro/assets/services/sharp",
    },
  },
});
