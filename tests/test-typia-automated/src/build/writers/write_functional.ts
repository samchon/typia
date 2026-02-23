import { dedent } from "@typia/utils";

export const write_functional =
  (method: string) =>
  (structure: string): string => {
    const prefix: string = `test_functional_${method}`;
    return dedent`
      import { ${structure} } from "@typia/template";
      import typia from "typia";

      import { _${prefix} } from "../../internal/_${prefix}";

      export const ${prefix}_${structure} = (): void => _${prefix}(
        ${JSON.stringify(structure)}
      )(${structure})(
        (p: (input: ${structure}) => ${structure}) => typia.functional.${method}(p),
      );
    `;
  };
