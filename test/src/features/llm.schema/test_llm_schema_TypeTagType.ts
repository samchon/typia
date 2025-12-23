import { ILlmSchema } from "@samchon/openapi";
import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { TypeTagType } from "../../structures/TypeTagType";

export const test_llm_schema_TypeTagType = (): void => {
  const $defs: Record<string, ILlmSchema> = {};
  const schema: ILlmSchema = typia.llm.schema<TypeTagType>($defs);
  _test_llm_schema({
    name: "TypeTagType",
    schema,
    $defs,
  });
};
