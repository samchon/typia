import { ILlmSchema } from "@samchon/openapi";
import fs from "fs";

import { primitive_equal_to } from "../helpers/primitive_equal_to";

export const _test_llm_parameters =
  (name: string) =>
  (expected: ILlmSchema.IParameters): void => {
    const actual: ILlmSchema.IParameters = JSON.parse(
      fs.readFileSync(
        `${__dirname}/../../schemas/llm.parameters/${name}.json`,
        "utf8",
      ),
    );
    sort(expected);
    sort(actual);

    if (primitive_equal_to(actual, expected) === false)
      throw new Error(
        `Bug on typia.llm.parameters<${name}>(): failed to understand the ${name} type.`,
      );
  };

function sort(params: ILlmSchema.IParameters): void {
  function object(elem: object) {
    for (const value of Object.values(elem)) iterate(value);
  }
  function array(elem: Array<any>) {
    for (const v of elem) iterate(v);
    elem.sort((x, y) => {
      const alpha = JSON.stringify(x);
      const beta = JSON.stringify(y);
      return alpha < beta ? -1 : alpha === beta ? 0 : 1;
    });
  }
  function iterate(elem: any) {
    if (elem === null || elem === undefined) return;
    else if (Array.isArray(elem)) array(elem);
    else if (typeof elem === "object") object(elem);
  }
  iterate(params);
}
