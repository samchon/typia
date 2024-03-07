import typia from "typia";
import { ArrayRecursive } from "../../../structures/ArrayRecursive";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_ajv_surplus_ArrayRecursive =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
    name: "ArrayRecursive",
  })(typia.json.application<[ArrayRecursive], "ajv", true>());
