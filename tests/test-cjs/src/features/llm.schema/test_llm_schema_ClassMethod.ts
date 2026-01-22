import { ILlmSchema } from "@samchon/openapi";
import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_llm_schema_ClassMethod = (): void => {
  const $defs: Record<string, ILlmSchema> = {};
  const schema: ILlmSchema = typia.llm.schema<ClassMethod>($defs);
  _test_llm_schema({
    name: "ClassMethod",
    schema,
    $defs,
  });
};
