import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ConstantAtomicUnion } from "../../../structures/ConstantAtomicUnion";

export const test_json_application_v3_1_ConstantAtomicUnion =
  _test_json_application({
    version: "3.1",
    name: "ConstantAtomicUnion",
  })(typia.json.application<ConstantAtomicUnionApplication, "3.1">());

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
