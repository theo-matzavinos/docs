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
      sidebar: [
        {
          label: "Component Store",
          autogenerate: { directory: "component-store" },
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
