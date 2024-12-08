import { ILlmSchema } from "@samchon/openapi";
import fs from "fs";

import { primitive_equal_to } from "../helpers/primitive_equal_to";

export const _test_llm_schema =
  <Model extends ILlmSchema.Model>(props: { model: Model; name: string }) =>
  (expected: ILlmSchema.ModelSchema[Model]): void => {
    const actual: ILlmSchema.ModelSchema[Model] = JSON.parse(
      fs.readFileSync(
        `${__dirname}/../../schemas/llm.schema/${props.model}/${props.name}.json`,
        "utf8",
      ),
    );
    sort(expected);
    sort(actual);

    if (primitive_equal_to(actual, expected) === false)
      throw new Error(
        `Bug on typia.llm.schema<${props.name}, "${props.model}">(): failed to understand the ${props.name} type.`,
      );
  };

function sort<Model extends ILlmSchema.Model>(
  app: ILlmSchema.ModelSchema[Model],
): void {
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
  iterate(app);
}
