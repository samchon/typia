export const write_functional =
  (method: string) =>
  (structure: string): string => {
    const prefix: string = `test_functional_${method}`;
    return [
      `import typia from "typia";`,
      "",
      `import { _${prefix} } from "../../internal/_${prefix}";`,
      `import { ${structure} } from "../../structures/${structure}";`,
      "",
      `export const ${prefix}_${structure} = _${prefix}(`,
      `  ${JSON.stringify(structure)}`,
      `)(${structure})(`,
      `  (p: (input: ${structure}) => ${structure}) => typia.functional.${method}(p),`,
      `)`,
    ].join("\n");
  };
