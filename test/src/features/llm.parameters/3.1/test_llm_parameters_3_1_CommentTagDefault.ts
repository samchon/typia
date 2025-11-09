import typia from "typia";
import { CommentTagDefault } from "../../../structures/CommentTagDefault";
import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";

export const test_llm_parameters_3_1_CommentTagDefault = (): void =>
  _test_llm_parameters({
    model: "3.1",
    name: "CommentTagDefault",
  })(
    typia.llm.parameters<CommentTagDefaultParameters, "3.1">(),
  );

interface CommentTagDefaultParameters {
  regular: CommentTagDefault;
  nullable: CommentTagDefault | null;
  optional: CommentTagDefault | undefined;
  faint: CommentTagDefault | null | undefined;
  array: Array<CommentTagDefault>;
}