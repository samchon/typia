import { ILlmSchema } from "@samchon/openapi";
import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { CommentTagObjectUnion } from "../../structures/CommentTagObjectUnion";

export const test_llm_schema_CommentTagObjectUnion = (): void => {
  const $defs: Record<string, ILlmSchema> = {};
  const schema: ILlmSchema = typia.llm.schema<CommentTagObjectUnion>($defs);
  _test_llm_schema({
    name: "CommentTagObjectUnion",
    schema,
    $defs,
  });
};
