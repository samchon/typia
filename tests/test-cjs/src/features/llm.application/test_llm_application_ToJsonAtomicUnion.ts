import typia from "typia";

import { _test_llm_application } from "../../internal/_test_llm_application";
import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";

export const test_llm_application_ToJsonAtomicUnion = (): void =>
  _test_llm_application({
    name: "ToJsonAtomicUnion",
    factory: ToJsonAtomicUnion,
  })(typia.llm.application<ToJsonAtomicUnionApplication>());

interface ToJsonAtomicUnionApplication {
  insert(p: { first: ToJsonAtomicUnion }): Promise<void>;
  reduce(p: {
    first: ToJsonAtomicUnion;
    second: ToJsonAtomicUnion | null;
  }): Promise<ToJsonAtomicUnion>;
  coalesce(p: {
    first: ToJsonAtomicUnion | null;
    second: ToJsonAtomicUnion | null;
    third?: ToJsonAtomicUnion | null;
  }): Promise<ToJsonAtomicUnion | null>;
}
