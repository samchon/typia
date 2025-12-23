import { ILlmSchema } from "@samchon/openapi";
import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_llm_schema_ObjectGenericArray = (): void => {
  const $defs: Record<string, ILlmSchema> = {};
  const schema: ILlmSchema = typia.llm.schema<ObjectGenericArray>($defs);
  _test_llm_schema({
    name: "ObjectGenericArray",
    schema,
    $defs,
  });
};
