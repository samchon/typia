import { ILlmSchema } from "@samchon/openapi";
import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_llm_schema_ObjectUnionComposite = (): void => {
  const $defs: Record<string, ILlmSchema> = {};
  const schema: ILlmSchema = typia.llm.schema<ObjectUnionComposite>($defs);
  _test_llm_schema({
    name: "ObjectUnionComposite",
    schema,
    $defs,
  });
};
