import { ILlmSchema } from "@samchon/openapi";
import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_llm_schema_ObjectRecursive = (): void => {
  const $defs: Record<string, ILlmSchema> = {};
  const schema: ILlmSchema = typia.llm.schema<ObjectRecursive>($defs);
  _test_llm_schema({
    name: "ObjectRecursive",
    schema,
    $defs,
  });
};
