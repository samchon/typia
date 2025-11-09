import typia from "typia";
import { CommentTagAtomicUnion } from "../../../structures/CommentTagAtomicUnion";
import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";

export const test_llm_parameters_3_0_CommentTagAtomicUnion = (): void =>
  _test_llm_parameters({
    model: "3.0",
    name: "CommentTagAtomicUnion",
  })(
    typia.llm.parameters<CommentTagAtomicUnionParameters, "3.0">(),
  );

interface CommentTagAtomicUnionParameters {
  regular: CommentTagAtomicUnion;
  nullable: CommentTagAtomicUnion | null;
  optional: CommentTagAtomicUnion | undefined;
  faint: CommentTagAtomicUnion | null | undefined;
  array: Array<CommentTagAtomicUnion>;
}