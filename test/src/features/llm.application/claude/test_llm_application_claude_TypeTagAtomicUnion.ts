import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { TypeTagAtomicUnion } from "../../../structures/TypeTagAtomicUnion";

export const test_llm_application_claude_TypeTagAtomicUnion =
  _test_llm_application({
    model: "claude",
    name: "TypeTagAtomicUnion",
  })(typia.llm.application<TypeTagAtomicUnionApplication, "claude">());

interface TypeTagAtomicUnionApplication {
  insert(first: TypeTagAtomicUnion): Promise<void>;
  reduce(
    first: TypeTagAtomicUnion,
    second: TypeTagAtomicUnion | null,
  ): Promise<TypeTagAtomicUnion>;
  coalesce(
    first: TypeTagAtomicUnion | null,
    second: TypeTagAtomicUnion | null,
    third?: TypeTagAtomicUnion | null,
  ): Promise<TypeTagAtomicUnion | null>;
}
