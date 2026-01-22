import { ILlmSchema } from "@samchon/openapi";
import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_llm_schema_ObjectOptional = (): void => {
  const $defs: Record<string, ILlmSchema> = {};
  const schema: ILlmSchema = typia.llm.schema<ObjectOptional>($defs);
  _test_llm_schema({
    name: "ObjectOptional",
    schema,
    $defs,
  });
};
