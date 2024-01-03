import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ConstantEnumeration } from "../../../structures/ConstantEnumeration";

export const test_json_application_ajv_standard_ConstantEnumeration =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "ConstantEnumeration",
  })(typia.json.application<[ConstantEnumeration], "ajv", false>());
