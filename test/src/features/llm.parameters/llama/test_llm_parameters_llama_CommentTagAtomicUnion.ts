import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { CommentTagAtomicUnion } from "../../../structures/CommentTagAtomicUnion";

export const test_llm_parameters_llama_CommentTagAtomicUnion = (): void =>
  _test_llm_parameters({
    model: "llama",
    name: "CommentTagAtomicUnion",
  })(typia.llm.parameters<CommentTagAtomicUnionParameters, "llama">());

interface CommentTagAtomicUnionParameters {
  regular: CommentTagAtomicUnion;
  nullable: CommentTagAtomicUnion | null;
  optional: CommentTagAtomicUnion | undefined;
  faint: CommentTagAtomicUnion | null | undefined;
  array: Array<CommentTagAtomicUnion>;
}
