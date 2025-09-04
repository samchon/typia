module.exports = {
  plugins: ["@typescript-eslint", "deprecation"],
  extends: ["plugin:@typescript-eslint/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ["tsconfig.json", "test/tsconfig.json", "benchmark/tsconfig.json"],
  },
  overrides: [
    {
      files: ["src/**/*.ts", "test/**/*.ts", "benchmark/**/*.ts"],
      rules: {
        "@typescript-eslint/consistent-type-definitions": "off",
        "@typescript-eslint/no-empty-function": "off",
        "@typescript-eslint/no-empty-interface": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-inferrable-types": "off",
        "@typescript-eslint/no-namespace": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/no-unused-vars": "off",
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/no-floating-promises": "error",
        "@typescript-eslint/no-require-imports": "off",
        "@typescript-eslint/no-empty-object-type": "off",
        "@typescript-eslint/no-unsafe-function-type": "off",
      },
    },
  ],
};
