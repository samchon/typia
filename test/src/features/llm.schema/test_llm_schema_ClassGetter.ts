import { ILlmSchema } from "@samchon/openapi";
import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_llm_schema_ClassGetter = (): void => {
  const $defs: Record<string, ILlmSchema> = {};
  const schema: ILlmSchema = typia.llm.schema<ClassGetter>($defs);
  _test_llm_schema({
    name: "ClassGetter",
    schema,
    $defs,
  });
};
