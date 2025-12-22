import { ILlmSchema } from "@samchon/openapi";
import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_llm_schema_ObjectUnionDouble = (): void => {
  const $defs: Record<string, ILlmSchema> = {};
  const schema: ILlmSchema = typia.llm.schema<ObjectUnionDouble>($defs);
  _test_llm_schema({
    name: "ObjectUnionDouble",
    schema,
    $defs,
  });
};
