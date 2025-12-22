import { ILlmSchema } from "@samchon/openapi";
import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_llm_schema_ObjectSimple = (): void => {
  const $defs: Record<string, ILlmSchema> = {};
  const schema: ILlmSchema = typia.llm.schema<ObjectSimple>($defs);
  _test_llm_schema({
    name: "ObjectSimple",
    schema,
    $defs,
  });
};
