import typia from "typia";
import { CommentTagArray } from "../../../structures/CommentTagArray";
import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";

export const test_llm_parameters_3_1_CommentTagArray = (): void =>
  _test_llm_parameters({
    model: "3.1",
    name: "CommentTagArray",
  })(
    typia.llm.parameters<CommentTagArrayParameters, "3.1">(),
  );

interface CommentTagArrayParameters {
  regular: CommentTagArray;
  nullable: CommentTagArray | null;
  optional: CommentTagArray | undefined;
  faint: CommentTagArray | null | undefined;
  array: Array<CommentTagArray>;
}