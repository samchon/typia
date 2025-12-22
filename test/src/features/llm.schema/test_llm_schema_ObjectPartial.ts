import { ILlmSchema } from "@samchon/openapi";
import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_llm_schema_ObjectPartial = (): void => {
  const $defs: Record<string, ILlmSchema> = {};
  const schema: ILlmSchema = typia.llm.schema<ObjectPartial>($defs);
  _test_llm_schema({
    name: "ObjectPartial",
    schema,
    $defs,
  });
};
