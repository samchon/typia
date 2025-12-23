import { ILlmSchema } from "@samchon/openapi";
import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { ObjectUnionNonPredictable } from "../../structures/ObjectUnionNonPredictable";

export const test_llm_schema_ObjectUnionNonPredictable = (): void => {
  const $defs: Record<string, ILlmSchema> = {};
  const schema: ILlmSchema = typia.llm.schema<ObjectUnionNonPredictable>($defs);
  _test_llm_schema({
    name: "ObjectUnionNonPredictable",
    schema,
    $defs,
  });
};
