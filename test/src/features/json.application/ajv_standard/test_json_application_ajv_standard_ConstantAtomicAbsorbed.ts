import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ConstantAtomicAbsorbed } from "../../../structures/ConstantAtomicAbsorbed";

export const test_json_application_ajv_standard_ConstantAtomicAbsorbed =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "ConstantAtomicAbsorbed",
  })(typia.json.application<[ConstantAtomicAbsorbed], "ajv", false>());
