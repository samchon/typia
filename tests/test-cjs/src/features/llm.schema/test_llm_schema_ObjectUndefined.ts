import { ILlmSchema } from "@samchon/openapi";
import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { ObjectUndefined } from "../../structures/ObjectUndefined";

export const test_llm_schema_ObjectUndefined = (): void => {
  const $defs: Record<string, ILlmSchema> = {};
  const schema: ILlmSchema = typia.llm.schema<ObjectUndefined>($defs);
  _test_llm_schema({
    name: "ObjectUndefined",
    schema,
    $defs,
  });
};
