import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ConstantAtomicWrapper } from "../../../structures/ConstantAtomicWrapper";

export const test_llm_application_3_1_ConstantAtomicWrapper =
  _test_llm_application({
    model: "3.1",
    name: "ConstantAtomicWrapper",
  })(typia.llm.application<ConstantAtomicWrapperApplication, "3.1">());

interface ConstantAtomicWrapperApplication {
  insert(first: ConstantAtomicWrapper): Promise<void>;
  reduce(
    first: ConstantAtomicWrapper,
    second: ConstantAtomicWrapper | null,
  ): Promise<ConstantAtomicWrapper>;
  coalesce(
    first: ConstantAtomicWrapper | null,
    second: ConstantAtomicWrapper | null,
    third?: ConstantAtomicWrapper | null,
  ): Promise<ConstantAtomicWrapper | null>;
}
