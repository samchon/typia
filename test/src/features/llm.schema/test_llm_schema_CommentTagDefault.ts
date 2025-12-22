import { ILlmSchema } from "@samchon/openapi";
import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_llm_schema_CommentTagDefault = (): void => {
  const $defs: Record<string, ILlmSchema> = {};
  const schema: ILlmSchema = typia.llm.schema<CommentTagDefault>($defs);
  _test_llm_schema({
    name: "CommentTagDefault",
    schema,
    $defs,
  });
};
