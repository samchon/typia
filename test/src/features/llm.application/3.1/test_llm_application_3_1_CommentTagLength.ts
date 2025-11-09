import typia from "typia";
import { CommentTagLength } from "../../../structures/CommentTagLength";
import { _test_llm_application } from "../../../internal/_test_llm_application";

export const test_llm_application_3_1_CommentTagLength = (): void =>
  _test_llm_application({
    model: "3.1",
    name: "CommentTagLength",
    factory: CommentTagLength
  })(
    typia.llm.application<CommentTagLengthApplication, "3.1">(),
  );

interface CommentTagLengthApplication {
  insert(p: { first: CommentTagLength }): Promise<void>;
  reduce(p: { first: CommentTagLength, second: CommentTagLength | null }): Promise<CommentTagLength>;
  coalesce(p: {
    first: CommentTagLength | null,
    second: CommentTagLength | null,
    third?: CommentTagLength | null,
  }): Promise<CommentTagLength | null>;
}