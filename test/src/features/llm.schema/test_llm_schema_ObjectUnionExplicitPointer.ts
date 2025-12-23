import { ILlmSchema } from "@samchon/openapi";
import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";

export const test_llm_schema_ObjectUnionExplicitPointer = (): void => {
  const $defs: Record<string, ILlmSchema> = {};
  const schema: ILlmSchema =
    typia.llm.schema<ObjectUnionExplicitPointer>($defs);
  _test_llm_schema({
    name: "ObjectUnionExplicitPointer",
    schema,
    $defs,
  });
};
