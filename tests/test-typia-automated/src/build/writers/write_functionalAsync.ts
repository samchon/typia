import { dedent } from "@typia/utils";

export const write_functionalAsync =
  (method: string) =>
  (structure: string): string => {
    const prefix: string = `test_functional_${method}Async`;
    return dedent`
      import { ${structure} } from "@typia/template";
      import typia from "typia";

      import { _${prefix} } from "../../internal/_${prefix}";

      export const ${prefix}_${structure} = (): Promise<void> => _${prefix}(
        ${JSON.stringify(structure)}
      )(${structure})(
        (p: (input: ${structure}) => Promise<${structure}>) =>
          typia.functional.${method}(p),
      );
    `;
  };
