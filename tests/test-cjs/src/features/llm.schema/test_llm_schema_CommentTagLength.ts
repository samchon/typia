import { ILlmSchema } from "@samchon/openapi";
import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_llm_schema_CommentTagLength = (): void => {
  const $defs: Record<string, ILlmSchema> = {};
  const schema: ILlmSchema = typia.llm.schema<CommentTagLength>($defs);
  _test_llm_schema({
    name: "CommentTagLength",
    schema,
    $defs,
  });
};
