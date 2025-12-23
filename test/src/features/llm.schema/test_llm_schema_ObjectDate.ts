import { ILlmSchema } from "@samchon/openapi";
import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { ObjectDate } from "../../structures/ObjectDate";

export const test_llm_schema_ObjectDate = (): void => {
  const $defs: Record<string, ILlmSchema> = {};
  const schema: ILlmSchema = typia.llm.schema<ObjectDate>($defs);
  _test_llm_schema({
    name: "ObjectDate",
    schema,
    $defs,
  });
};
