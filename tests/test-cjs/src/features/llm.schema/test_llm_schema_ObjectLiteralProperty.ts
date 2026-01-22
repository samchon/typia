import { ILlmSchema } from "@samchon/openapi";
import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { ObjectLiteralProperty } from "../../structures/ObjectLiteralProperty";

export const test_llm_schema_ObjectLiteralProperty = (): void => {
  const $defs: Record<string, ILlmSchema> = {};
  const schema: ILlmSchema = typia.llm.schema<ObjectLiteralProperty>($defs);
  _test_llm_schema({
    name: "ObjectLiteralProperty",
    schema,
    $defs,
  });
};
