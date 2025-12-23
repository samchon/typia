import { ILlmSchema } from "@samchon/openapi";
import fs from "fs";

import { primitive_equal_to } from "../helpers/primitive_equal_to";

export const _test_llm_schema = (props: {
  name: string;
  schema: ILlmSchema;
  $defs: Record<string, ILlmSchema>;
}): void => {
  const actual: IEntry = JSON.parse(
    fs.readFileSync(
      `${__dirname}/../../schemas/llm.schema/${props.name}.json`,
      "utf8",
    ),
  );
  if (
    primitive_equal_to(actual, {
      schema: props.schema,
      $defs: props.$defs,
    }) === false
  )
    throw new Error(
      `Bug on typia.llm.schema<${props.name}>(): failed to understand the ${props.name} type.`,
    );
};

function sort(entry: IEntry): void {
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
  iterate(entry.schema);
  for (const value of Object.values(entry.$defs)) iterate(value);
}

interface IEntry {
  schema: ILlmSchema;
  $defs: Record<string, ILlmSchema>;
}
