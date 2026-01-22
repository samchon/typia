import { ILlmSchema } from "@samchon/openapi";
import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

export const test_llm_schema_ObjectUnionImplicit = (): void => {
  const $defs: Record<string, ILlmSchema> = {};
  const schema: ILlmSchema = typia.llm.schema<ObjectUnionImplicit>($defs);
  _test_llm_schema({
    name: "ObjectUnionImplicit",
    schema,
    $defs,
  });
};
