import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ArrayRepeatedUnion } from "../../../structures/ArrayRepeatedUnion";

export const test_json_application_ajv_surplus_ArrayRepeatedUnion =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
    name: "ArrayRepeatedUnion",
  })(typia.json.application<[ArrayRepeatedUnion], "ajv", true>());
