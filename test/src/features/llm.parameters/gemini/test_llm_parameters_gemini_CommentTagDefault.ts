import typia from "typia";
import { CommentTagDefault } from "../../../structures/CommentTagDefault";
import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";

export const test_llm_parameters_gemini_CommentTagDefault = (): void =>
  _test_llm_parameters({
    model: "gemini",
    name: "CommentTagDefault",
  })(
    typia.llm.parameters<CommentTagDefaultParameters, "gemini">(),
  );

interface CommentTagDefaultParameters {
  regular: CommentTagDefault;
  nullable: CommentTagDefault | null;
  optional: CommentTagDefault | undefined;
  faint: CommentTagDefault | null | undefined;
  array: Array<CommentTagDefault>;
}