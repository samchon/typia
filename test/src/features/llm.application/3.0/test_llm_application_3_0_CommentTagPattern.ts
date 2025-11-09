import typia from "typia";
import { CommentTagPattern } from "../../../structures/CommentTagPattern";
import { _test_llm_application } from "../../../internal/_test_llm_application";

export const test_llm_application_3_0_CommentTagPattern = (): void =>
  _test_llm_application({
    model: "3.0",
    name: "CommentTagPattern",
    factory: CommentTagPattern
  })(
    typia.llm.application<CommentTagPatternApplication, "3.0">(),
  );

interface CommentTagPatternApplication {
  insert(p: { first: CommentTagPattern }): Promise<void>;
  reduce(p: { first: CommentTagPattern, second: CommentTagPattern | null }): Promise<CommentTagPattern>;
  coalesce(p: {
    first: CommentTagPattern | null,
    second: CommentTagPattern | null,
    third?: CommentTagPattern | null,
  }): Promise<CommentTagPattern | null>;
}