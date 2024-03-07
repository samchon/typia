import typia from "typia";
import { DynamicEnumeration } from "../../../structures/DynamicEnumeration";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_ajv_standard_DynamicEnumeration =
  _test_json_application({
    purpose: "ajv",
    surplus: false,
    name: "DynamicEnumeration",
  })(typia.json.application<[DynamicEnumeration], "ajv", false>());
