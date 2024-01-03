import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { DynamicUnion } from "../../../structures/DynamicUnion";

export const test_json_application_ajv_surplus_DynamicUnion =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
    name: "DynamicUnion",
  })(typia.json.application<[DynamicUnion], "ajv", true>());
