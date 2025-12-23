import { ILlmSchema } from "@samchon/openapi";
import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";

export const test_llm_schema_ArrayRecursiveUnionExplicit = (): void => {
  const $defs: Record<string, ILlmSchema> = {};
  const schema: ILlmSchema =
    typia.llm.schema<ArrayRecursiveUnionExplicit>($defs);
  _test_llm_schema({
    name: "ArrayRecursiveUnionExplicit",
    schema,
    $defs,
  });
};
