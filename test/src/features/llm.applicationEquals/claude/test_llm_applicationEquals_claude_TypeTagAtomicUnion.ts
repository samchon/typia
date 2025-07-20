import typia from "typia";

import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";
import { TypeTagAtomicUnion } from "../../../structures/TypeTagAtomicUnion";

export const test_llm_applicationEquals_claude_TypeTagAtomicUnion = (): void =>
  _test_llm_applicationEquals({
    model: "claude",
    name: "TypeTagAtomicUnion",
    factory: TypeTagAtomicUnion,
  })(
    typia.llm.application<
      TypeTagAtomicUnionApplication,
      "claude",
      { equals: true }
    >(),
  );

interface TypeTagAtomicUnionApplication {
  insert(p: { first: TypeTagAtomicUnion }): Promise<void>;
  reduce(p: {
    first: TypeTagAtomicUnion;
    second: TypeTagAtomicUnion | null;
  }): Promise<TypeTagAtomicUnion>;
  coalesce(p: {
    first: TypeTagAtomicUnion | null;
    second: TypeTagAtomicUnion | null;
    third?: TypeTagAtomicUnion | null;
  }): Promise<TypeTagAtomicUnion | null>;
}
