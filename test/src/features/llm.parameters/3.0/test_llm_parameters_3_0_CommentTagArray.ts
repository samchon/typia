import typia from "typia";
import { CommentTagArray } from "../../../structures/CommentTagArray";
import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";

export const test_llm_parameters_3_0_CommentTagArray = (): void =>
  _test_llm_parameters({
    model: "3.0",
    name: "CommentTagArray",
  })(
    typia.llm.parameters<CommentTagArrayParameters, "3.0">(),
  );

interface CommentTagArrayParameters {
  regular: CommentTagArray;
  nullable: CommentTagArray | null;
  optional: CommentTagArray | undefined;
  faint: CommentTagArray | null | undefined;
  array: Array<CommentTagArray>;
}