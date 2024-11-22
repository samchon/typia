import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ConstantAtomicAbsorbed } from "../../../structures/ConstantAtomicAbsorbed";

export const test_json_application_v3_0_ConstantAtomicAbsorbed =
  _test_json_application({
    version: "3.0",
    name: "ConstantAtomicAbsorbed",
  })(typia.json.application<ConstantAtomicAbsorbedApplication, "3.0">());

interface ConstantAtomicAbsorbedApplication {
  insert(first: ConstantAtomicAbsorbed): Promise<void>;
  reduce(
    first: ConstantAtomicAbsorbed,
    second: ConstantAtomicAbsorbed | null,
  ): Promise<ConstantAtomicAbsorbed>;
  coalesce(
    first: ConstantAtomicAbsorbed | null,
    second: ConstantAtomicAbsorbed | null,
    third?: ConstantAtomicAbsorbed | null,
  ): Promise<ConstantAtomicAbsorbed | null>;
}
