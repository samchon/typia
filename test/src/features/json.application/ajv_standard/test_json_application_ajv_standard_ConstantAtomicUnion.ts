import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ConstantAtomicUnion } from "../../../structures/ConstantAtomicUnion";

export const test_json_application_ajv_standard_ConstantAtomicUnion =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "ConstantAtomicUnion",
  })(typia.json.application<[ConstantAtomicUnion], "ajv", false>());
