import typia from "typia";
import { CommentTagObjectUnion } from "../../../structures/CommentTagObjectUnion";
import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";

export const test_llm_parameters_gemini_CommentTagObjectUnion = (): void =>
  _test_llm_parameters({
    model: "gemini",
    name: "CommentTagObjectUnion",
  })(
    typia.llm.parameters<CommentTagObjectUnionParameters, "gemini">(),
  );

interface CommentTagObjectUnionParameters {
  regular: CommentTagObjectUnion;
  nullable: CommentTagObjectUnion | null;
  optional: CommentTagObjectUnion | undefined;
  faint: CommentTagObjectUnion | null | undefined;
  array: Array<CommentTagObjectUnion>;
}