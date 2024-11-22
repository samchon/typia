import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ConstantAtomicSimple } from "../../../structures/ConstantAtomicSimple";

export const test_llm_application_3_0_ConstantAtomicSimple =
  _test_llm_application({
    model: "3.0",
    name: "ConstantAtomicSimple",
  })(typia.llm.application<ConstantAtomicSimpleApplication, "3.0">());

interface ConstantAtomicSimpleApplication {
  insert(first: ConstantAtomicSimple): Promise<void>;
  reduce(
    first: ConstantAtomicSimple,
    second: ConstantAtomicSimple | null,
  ): Promise<ConstantAtomicSimple>;
  coalesce(
    first: ConstantAtomicSimple | null,
    second: ConstantAtomicSimple | null,
    third?: ConstantAtomicSimple | null,
  ): Promise<ConstantAtomicSimple | null>;
}
