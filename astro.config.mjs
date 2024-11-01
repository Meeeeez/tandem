import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

const owner = "astrojs";
// https://astro.build/config
export default defineConfig({
  site: "https://meeeeez.github.io",
  base: "/tandem",
  integrations: [tailwind(), react()],
});