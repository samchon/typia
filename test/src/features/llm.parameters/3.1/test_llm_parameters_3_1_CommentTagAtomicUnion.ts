import typia from "typia";
import { CommentTagAtomicUnion } from "../../../structures/CommentTagAtomicUnion";
import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";

export const test_llm_parameters_3_1_CommentTagAtomicUnion = (): void =>
  _test_llm_parameters({
    model: "3.1",
    name: "CommentTagAtomicUnion",
  })(
    typia.llm.parameters<CommentTagAtomicUnionParameters, "3.1">(),
  );

interface CommentTagAtomicUnionParameters {
  regular: CommentTagAtomicUnion;
  nullable: CommentTagAtomicUnion | null;
  optional: CommentTagAtomicUnion | undefined;
  faint: CommentTagAtomicUnion | null | undefined;
  array: Array<CommentTagAtomicUnion>;
}