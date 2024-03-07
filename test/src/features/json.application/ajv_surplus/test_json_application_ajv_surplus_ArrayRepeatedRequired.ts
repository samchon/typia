import typia from "typia";
import { ArrayRepeatedRequired } from "../../../structures/ArrayRepeatedRequired";
import { _test_json_application } from "../../../internal/_test_json_application";

export const test_json_application_ajv_surplus_ArrayRepeatedRequired =
  _test_json_application({
    purpose: "ajv",
    surplus: true,
    name: "ArrayRepeatedRequired",
  })(typia.json.application<[ArrayRepeatedRequired], "ajv", true>());
