import { ILlmSchema } from "@samchon/openapi";
import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { ClassPropertyAssignment } from "../../structures/ClassPropertyAssignment";

export const test_llm_schema_ClassPropertyAssignment = (): void => {
  const $defs: Record<string, ILlmSchema> = {};
  const schema: ILlmSchema = typia.llm.schema<ClassPropertyAssignment>($defs);
  _test_llm_schema({
    name: "ClassPropertyAssignment",
    schema,
    $defs,
  });
};
