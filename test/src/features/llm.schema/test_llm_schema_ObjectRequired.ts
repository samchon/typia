import { ILlmSchema } from "@samchon/openapi";
import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_llm_schema_ObjectRequired = (): void => {
  const $defs: Record<string, ILlmSchema> = {};
  const schema: ILlmSchema = typia.llm.schema<ObjectRequired>($defs);
  _test_llm_schema({
    name: "ObjectRequired",
    schema,
    $defs,
  });
};
