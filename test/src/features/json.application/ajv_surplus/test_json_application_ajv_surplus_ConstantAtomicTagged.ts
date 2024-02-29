import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ConstantAtomicTagged } from "../../../structures/ConstantAtomicTagged";

export const test_json_application_ajv_surplus_ConstantAtomicTagged =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
    name: "ConstantAtomicTagged",
  })(typia.json.application<[ConstantAtomicTagged], "ajv", true>());
