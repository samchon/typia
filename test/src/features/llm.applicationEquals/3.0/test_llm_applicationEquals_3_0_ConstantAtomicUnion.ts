import typia from "typia";

import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";
import { ConstantAtomicUnion } from "../../../structures/ConstantAtomicUnion";

export const test_llm_applicationEquals_3_0_ConstantAtomicUnion = (): void =>
  _test_llm_applicationEquals({
    model: "3.0",
    name: "ConstantAtomicUnion",
    factory: ConstantAtomicUnion,
  })(
    typia.llm.application<
      ConstantAtomicUnionApplication,
      "3.0",
      { equal: true }
    >(),
  );

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
