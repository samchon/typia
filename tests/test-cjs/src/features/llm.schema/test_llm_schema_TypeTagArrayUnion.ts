import { ILlmSchema } from "@samchon/openapi";
import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { TypeTagArrayUnion } from "../../structures/TypeTagArrayUnion";

export const test_llm_schema_TypeTagArrayUnion = (): void => {
  const $defs: Record<string, ILlmSchema> = {};
  const schema: ILlmSchema = typia.llm.schema<TypeTagArrayUnion>($defs);
  _test_llm_schema({
    name: "TypeTagArrayUnion",
    schema,
    $defs,
  });
};
