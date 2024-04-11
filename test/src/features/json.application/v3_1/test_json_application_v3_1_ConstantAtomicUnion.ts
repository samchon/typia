import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ConstantAtomicUnion } from "../../../structures/ConstantAtomicUnion";

export const test_json_application_v3_1_ConstantAtomicUnion =
  _test_json_application({
    version: "3.1",
    name: "ConstantAtomicUnion",
  })(typia.json.application<[ConstantAtomicUnion], "3.1">());
