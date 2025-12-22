import { ILlmSchema } from "@samchon/openapi";
import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { CommentTagAtomicUnion } from "../../structures/CommentTagAtomicUnion";

export const test_llm_schema_CommentTagAtomicUnion = (): void => {
  const $defs: Record<string, ILlmSchema> = {};
  const schema: ILlmSchema = typia.llm.schema<CommentTagAtomicUnion>($defs);
  _test_llm_schema({
    name: "CommentTagAtomicUnion",
    schema,
    $defs,
  });
};
