import typia from "typia";
import { ToJsonAtomicUnion } from "../../../structures/ToJsonAtomicUnion";
import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";

export const test_llm_applicationEquals_gemini_ToJsonAtomicUnion = (): void =>
  _test_llm_applicationEquals({
    model: "gemini",
    name: "ToJsonAtomicUnion",
    factory: ToJsonAtomicUnion
  })(
    typia.llm.application<ToJsonAtomicUnionApplication, "gemini", { equals: true }>(),
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