import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ConstantAtomicWrapper } from "../../../structures/ConstantAtomicWrapper";

export const test_json_application_v3_0_ConstantAtomicWrapper =
  _test_json_application({
    version: "3.0",
    name: "ConstantAtomicWrapper",
  })(typia.json.application<ConstantAtomicWrapperApplication, "3.0">());

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
