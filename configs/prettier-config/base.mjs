/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
  tabWidth: 2,
  singleQuote: true,
  plugins: [import.meta.resolve("prettier-plugin-organize-imports")],
};

export default config;
