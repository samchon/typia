import { ILlmSchema } from "@samchon/openapi";
import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { ObjectPartialAndRequired } from "../../structures/ObjectPartialAndRequired";

export const test_llm_schema_ObjectPartialAndRequired = (): void => {
  const $defs: Record<string, ILlmSchema> = {};
  const schema: ILlmSchema = typia.llm.schema<ObjectPartialAndRequired>($defs);
  _test_llm_schema({
    name: "ObjectPartialAndRequired",
    schema,
    $defs,
  });
};
