import { ILlmSchema } from "@samchon/openapi";
import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { ObjectDescription } from "../../structures/ObjectDescription";

export const test_llm_schema_ObjectDescription = (): void => {
  const $defs: Record<string, ILlmSchema> = {};
  const schema: ILlmSchema = typia.llm.schema<ObjectDescription>($defs);
  _test_llm_schema({
    name: "ObjectDescription",
    schema,
    $defs,
  });
};
