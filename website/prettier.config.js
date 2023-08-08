module.exports = {
  printWidth: 80,
  semi: true,
  tabWidth: 2,
  trailingComma: "all",
  importOrder: [
    "<THIRD_PARTY_MODULES>",
    "(.*)factories/(.*)$",
    "(.*)functional/(.*)$",
    "(.*)(metadata|schemas)/(.*)$",
    "(.*)programmers/(.*)$",
    "(.*)transformers/(.*)$",
    "(.*)typings/(.*)$",
    "(.*)utils/(.*)$",
    "^[./]",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
