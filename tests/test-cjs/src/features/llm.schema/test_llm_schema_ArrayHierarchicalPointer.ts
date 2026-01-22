import { ILlmSchema } from "@samchon/openapi";
import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

export const test_llm_schema_ArrayHierarchicalPointer = (): void => {
  const $defs: Record<string, ILlmSchema> = {};
  const schema: ILlmSchema = typia.llm.schema<ArrayHierarchicalPointer>($defs);
  _test_llm_schema({
    name: "ArrayHierarchicalPointer",
    schema,
    $defs,
  });
};
