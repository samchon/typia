import typia from "typia";
import { ToJsonAtomicUnion } from "../../../structures/ToJsonAtomicUnion";
import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";

export const test_llm_applicationEquals_claude_ToJsonAtomicUnion = (): void =>
  _test_llm_applicationEquals({
    model: "claude",
    name: "ToJsonAtomicUnion",
    factory: ToJsonAtomicUnion
  })(
    typia.llm.application<ToJsonAtomicUnionApplication, "claude", { equals: true }>(),
  );

interface ToJsonAtomicUnionApplication {
  insert(p: { first: ToJsonAtomicUnion }): Promise<void>;
  reduce(p: { first: ToJsonAtomicUnion, second: ToJsonAtomicUnion | null }): Promise<ToJsonAtomicUnion>;
  coalesce(p: {
    first: ToJsonAtomicUnion | null,
    second: ToJsonAtomicUnion | null,
    third?: ToJsonAtomicUnion | null,
  }): Promise<ToJsonAtomicUnion | null>;
}