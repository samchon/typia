import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { DynamicEnumeration } from "../../../structures/DynamicEnumeration";

export const test_json_application_ajv_surplus_DynamicEnumeration =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
    name: "DynamicEnumeration",
  })(typia.json.application<[DynamicEnumeration], "ajv", true>());
