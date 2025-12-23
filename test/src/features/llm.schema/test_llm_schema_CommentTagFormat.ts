import { ILlmSchema } from "@samchon/openapi";
import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_llm_schema_CommentTagFormat = (): void => {
  const $defs: Record<string, ILlmSchema> = {};
  const schema: ILlmSchema = typia.llm.schema<CommentTagFormat>($defs);
  _test_llm_schema({
    name: "CommentTagFormat",
    schema,
    $defs,
  });
};
