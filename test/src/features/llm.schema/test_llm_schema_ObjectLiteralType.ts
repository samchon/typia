import { ILlmSchema } from "@samchon/openapi";
import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { ObjectLiteralType } from "../../structures/ObjectLiteralType";

export const test_llm_schema_ObjectLiteralType = (): void => {
  const $defs: Record<string, ILlmSchema> = {};
  const schema: ILlmSchema = typia.llm.schema<ObjectLiteralType>($defs);
  _test_llm_schema({
    name: "ObjectLiteralType",
    schema,
    $defs,
  });
};
