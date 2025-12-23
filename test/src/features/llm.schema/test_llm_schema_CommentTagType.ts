import { ILlmSchema } from "@samchon/openapi";
import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_llm_schema_CommentTagType = (): void => {
  const $defs: Record<string, ILlmSchema> = {};
  const schema: ILlmSchema = typia.llm.schema<CommentTagType>($defs);
  _test_llm_schema({
    name: "CommentTagType",
    schema,
    $defs,
  });
};
