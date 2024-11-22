import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ConstantAtomicSimple } from "../../../structures/ConstantAtomicSimple";

export const test_json_application_v3_1_ConstantAtomicSimple =
  _test_json_application({
    version: "3.1",
    name: "ConstantAtomicSimple",
  })(typia.json.application<ConstantAtomicSimpleApplication, "3.1">());

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
