export const write_functionalAsync =
  (method: string) =>
  (structure: string): string => {
    const prefix: string = `test_functional_${method}Async`;
    return [
      `import typia from "typia";`,
      "",
      `import { _${prefix} } from "../../internal/_${prefix}";`,
      `import { ${structure} } from "../../structures/${structure}";`,
      "",
      `export const ${prefix}_${structure} = _${prefix}(`,
      `  ${JSON.stringify(structure)}`,
      `)(${structure})(`,
      `  (p: (input: ${structure}) => Promise<${structure}>) =>`,
      `    typia.functional.${method}(p),`,
      `)`,
    ].join("\n");
  };
