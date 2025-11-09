import typia from "typia";
import { CommentTagArrayUnion } from "../../../structures/CommentTagArrayUnion";
import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";

export const test_llm_parameters_claude_CommentTagArrayUnion = (): void =>
  _test_llm_parameters({
    model: "claude",
    name: "CommentTagArrayUnion",
  })(
    typia.llm.parameters<CommentTagArrayUnionParameters, "claude">(),
  );

interface CommentTagArrayUnionParameters {
  regular: CommentTagArrayUnion;
  nullable: CommentTagArrayUnion | null;
  optional: CommentTagArrayUnion | undefined;
  faint: CommentTagArrayUnion | null | undefined;
  array: Array<CommentTagArrayUnion>;
}