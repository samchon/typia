import typia from "typia";

import { _test_llm_application } from "../../internal/_test_llm_application";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

export const test_llm_application_ConstantAtomicUnion = (): void =>
  _test_llm_application({
    name: "ConstantAtomicUnion",
    factory: ConstantAtomicUnion,
  })(typia.llm.application<ConstantAtomicUnionApplication>());

interface ConstantAtomicUnionApplication {
  insert(p: { first: ConstantAtomicUnion }): Promise<void>;
  reduce(p: {
    first: ConstantAtomicUnion;
    second: ConstantAtomicUnion | null;
  }): Promise<ConstantAtomicUnion>;
  coalesce(p: {
    first: ConstantAtomicUnion | null;
    second: ConstantAtomicUnion | null;
    third?: ConstantAtomicUnion | null;
  }): Promise<ConstantAtomicUnion | null>;
}
