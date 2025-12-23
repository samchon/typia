import { ILlmSchema } from "@samchon/openapi";
import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { ObjectDynamic } from "../../structures/ObjectDynamic";

export const test_llm_schema_ObjectDynamic = (): void => {
  const $defs: Record<string, ILlmSchema> = {};
  const schema: ILlmSchema = typia.llm.schema<ObjectDynamic>($defs);
  _test_llm_schema({
    name: "ObjectDynamic",
    schema,
    $defs,
  });
};
