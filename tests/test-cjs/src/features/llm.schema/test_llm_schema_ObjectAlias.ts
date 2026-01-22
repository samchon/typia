import { ILlmSchema } from "@samchon/openapi";
import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_llm_schema_ObjectAlias = (): void => {
  const $defs: Record<string, ILlmSchema> = {};
  const schema: ILlmSchema = typia.llm.schema<ObjectAlias>($defs);
  _test_llm_schema({
    name: "ObjectAlias",
    schema,
    $defs,
  });
};
