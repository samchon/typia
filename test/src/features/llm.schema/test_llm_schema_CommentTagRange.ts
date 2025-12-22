import { ILlmSchema } from "@samchon/openapi";
import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { CommentTagRange } from "../../structures/CommentTagRange";

export const test_llm_schema_CommentTagRange = (): void => {
  const $defs: Record<string, ILlmSchema> = {};
  const schema: ILlmSchema = typia.llm.schema<CommentTagRange>($defs);
  _test_llm_schema({
    name: "CommentTagRange",
    schema,
    $defs,
  });
};
