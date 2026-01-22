import { ILlmSchema } from "@samchon/openapi";
import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_llm_schema_ObjectGenericAlias = (): void => {
  const $defs: Record<string, ILlmSchema> = {};
  const schema: ILlmSchema = typia.llm.schema<ObjectGenericAlias>($defs);
  _test_llm_schema({
    name: "ObjectGenericAlias",
    schema,
    $defs,
  });
};
