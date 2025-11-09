import typia from "typia";
import { ToJsonAtomicUnion } from "../../../structures/ToJsonAtomicUnion";
import { _test_llm_application } from "../../../internal/_test_llm_application";

export const test_llm_application_3_1_ToJsonAtomicUnion = (): void =>
  _test_llm_application({
    model: "3.1",
    name: "ToJsonAtomicUnion",
    factory: ToJsonAtomicUnion
  })(
    typia.llm.application<ToJsonAtomicUnionApplication, "3.1">(),
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