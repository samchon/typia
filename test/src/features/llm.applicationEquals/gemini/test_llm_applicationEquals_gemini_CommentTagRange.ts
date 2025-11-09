import typia from "typia";
import { CommentTagRange } from "../../../structures/CommentTagRange";
import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";

export const test_llm_applicationEquals_gemini_CommentTagRange = (): void =>
  _test_llm_applicationEquals({
    model: "gemini",
    name: "CommentTagRange",
    factory: CommentTagRange
  })(
    typia.llm.application<CommentTagRangeApplication, "gemini", { equals: true }>(),
  );

interface CommentTagRangeApplication {
  insert(p: { first: CommentTagRange }): Promise<void>;
  reduce(p: { first: CommentTagRange, second: CommentTagRange | null }): Promise<CommentTagRange>;
  coalesce(p: {
    first: CommentTagRange | null,
    second: CommentTagRange | null,
    third?: CommentTagRange | null,
  }): Promise<CommentTagRange | null>;
}