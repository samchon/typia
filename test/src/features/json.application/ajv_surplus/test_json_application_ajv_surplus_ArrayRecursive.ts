import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { ArrayRecursive } from "../../../structures/ArrayRecursive";

export const test_json_application_ajv_surplus_ArrayRecursive =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
    name: "ArrayRecursive",
  })(typia.json.application<[ArrayRecursive], "ajv", true>());
