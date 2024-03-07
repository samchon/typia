import typia from "typia";
import { ConstantEnumeration } from "../../../structures/ConstantEnumeration";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_ajv_standard_ConstantEnumeration =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "ConstantEnumeration",
  })(typia.json.application<[ConstantEnumeration], "ajv", false>());
