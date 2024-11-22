import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ConstantAtomicUnion } from "../../../structures/ConstantAtomicUnion";

export const test_llm_application_3_0_ConstantAtomicUnion =
  _test_llm_application({
    model: "3.0",
    name: "ConstantAtomicUnion",
  })(typia.llm.application<ConstantAtomicUnionApplication, "3.0">());

interface ConstantAtomicUnionApplication {
  insert(first: ConstantAtomicUnion): Promise<void>;
  reduce(
    first: ConstantAtomicUnion,
    second: ConstantAtomicUnion | null,
  ): Promise<ConstantAtomicUnion>;
  coalesce(
    first: ConstantAtomicUnion | null,
    second: ConstantAtomicUnion | null,
    third?: ConstantAtomicUnion | null,
  ): Promise<ConstantAtomicUnion | null>;
}
