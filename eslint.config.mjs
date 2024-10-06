import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    languageOptions: {
      globals: globals.browser,
    },
  },
  {
    ignores: ["server/public/*", "tailwind.config.js", "postcss.config.js"],
  },
  pluginJs.configs.recommended,
];
