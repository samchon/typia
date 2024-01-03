import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ConstantConstEnumeration } from "../../../structures/ConstantConstEnumeration";

export const test_json_application_ajv_standard_ConstantConstEnumeration =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "ConstantConstEnumeration",
  })(typia.json.application<[ConstantConstEnumeration], "ajv", false>());
