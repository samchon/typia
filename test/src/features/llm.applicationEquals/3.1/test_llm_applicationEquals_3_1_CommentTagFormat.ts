import typia from "typia";
import { CommentTagFormat } from "../../../structures/CommentTagFormat";
import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";

export const test_llm_applicationEquals_3_1_CommentTagFormat = (): void =>
  _test_llm_applicationEquals({
    model: "3.1",
    name: "CommentTagFormat",
    factory: CommentTagFormat
  })(
    typia.llm.application<CommentTagFormatApplication, "3.1", { equals: true }>(),
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