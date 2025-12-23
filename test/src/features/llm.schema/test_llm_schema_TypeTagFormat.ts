import { ILlmSchema } from "@samchon/openapi";
import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_llm_schema_TypeTagFormat = (): void => {
  const $defs: Record<string, ILlmSchema> = {};
  const schema: ILlmSchema = typia.llm.schema<TypeTagFormat>($defs);
  _test_llm_schema({
    name: "TypeTagFormat",
    schema,
    $defs,
  });
};
