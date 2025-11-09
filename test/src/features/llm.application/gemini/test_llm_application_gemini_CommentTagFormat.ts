import typia from "typia";
import { CommentTagFormat } from "../../../structures/CommentTagFormat";
import { _test_llm_application } from "../../../internal/_test_llm_application";

export const test_llm_application_gemini_CommentTagFormat = (): void =>
  _test_llm_application({
    model: "gemini",
    name: "CommentTagFormat",
    factory: CommentTagFormat
  })(
    typia.llm.application<CommentTagFormatApplication, "gemini">(),
  );

interface CommentTagFormatApplication {
  insert(p: { first: CommentTagFormat }): Promise<void>;
  reduce(p: { first: CommentTagFormat, second: CommentTagFormat | null }): Promise<CommentTagFormat>;
  coalesce(p: {
    first: CommentTagFormat | null,
    second: CommentTagFormat | null,
    third?: CommentTagFormat | null,
  }): Promise<CommentTagFormat | null>;
}