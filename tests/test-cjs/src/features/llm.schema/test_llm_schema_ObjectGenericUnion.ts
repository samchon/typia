import { ILlmSchema } from "@samchon/openapi";
import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_llm_schema_ObjectGenericUnion = (): void => {
  const $defs: Record<string, ILlmSchema> = {};
  const schema: ILlmSchema = typia.llm.schema<ObjectGenericUnion>($defs);
  _test_llm_schema({
    name: "ObjectGenericUnion",
    schema,
    $defs,
  });
};
