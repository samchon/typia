import { ILlmSchema } from "@samchon/openapi";
import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";

export const test_llm_schema_ObjectPrimitive = (): void => {
  const $defs: Record<string, ILlmSchema> = {};
  const schema: ILlmSchema = typia.llm.schema<ObjectPrimitive>($defs);
  _test_llm_schema({
    name: "ObjectPrimitive",
    schema,
    $defs,
  });
};
