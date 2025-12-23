import { ILlmSchema } from "@samchon/openapi";
import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_llm_schema_CommentTagPattern = (): void => {
  const $defs: Record<string, ILlmSchema> = {};
  const schema: ILlmSchema = typia.llm.schema<CommentTagPattern>($defs);
  _test_llm_schema({
    name: "CommentTagPattern",
    schema,
    $defs,
  });
};
