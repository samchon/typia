module.exports = {
  parser: "typescript",
  printWidth: 80,
  semi: true,
  tabWidth: 2,
  trailingComma: "all",
  plugins: [
    require.resolve("@trivago/prettier-plugin-sort-imports"),
    require.resolve("prettier-plugin-jsdoc"),
  ],
  importOrder: ["<THIRD_PARTY_MODULES>", "^[./]"],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderParserPlugins: ["decorators-legacy", "typescript"],
};
