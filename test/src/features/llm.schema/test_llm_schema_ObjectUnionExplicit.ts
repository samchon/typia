import { ILlmSchema } from "@samchon/openapi";
import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

export const test_llm_schema_ObjectUnionExplicit = (): void => {
  const $defs: Record<string, ILlmSchema> = {};
  const schema: ILlmSchema = typia.llm.schema<ObjectUnionExplicit>($defs);
  _test_llm_schema({
    name: "ObjectUnionExplicit",
    schema,
    $defs,
  });
};
