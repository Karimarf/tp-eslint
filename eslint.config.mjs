import js from "@eslint/js";
import globals from "globals";

export default [
  // Config de base (@eslint/js)
  js.configs.recommended,  // <-- On l'inclut directement dans le tableau

  // Vos règles personnalisées
  {
    files: ["**/*.{js,mjs,cjs}"],
    rules: {
      "indent": ["error", 2],
      "no-console": "warn",
      "semi": ["error", "always"],
      "quotes": ["error", "single"],
      "eqeqeq": "error",
      "no-unused-vars": "warn"
    }
  },

  // Config CommonJS
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs"
    }
  },

  // Globaux
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      }
    }
  }
];